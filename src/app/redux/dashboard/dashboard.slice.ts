import api from "@/app/services/api";
import { ICommentList, ICommentStatus } from "@/app/types/comment";
import { IMovie, IMovieSlug, IgetByStatus } from "@/app/types/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type IChartItem = {
   title: string;
   content: string;
};

interface IDashboardItem {
   title: string;
   content: string;
   chart: IChartItem[];
   percent: string;
}
interface IDashboardState {
   data: IDashboardItem[];
   isLoading: boolean;
   isError: boolean;
   errorMessage: string;
}

const initialState: IDashboardState = {
   data: [
      {
         title: "",
         content: "",
         chart: [],
         percent: "",
      },
   ],
   isLoading: false,
   isError: false,
   errorMessage: "",
};

export const getAll = createAsyncThunk(
   "@@movies/getAll",
   async (date: string) => {
      const { data } = await api.dashboardService.getDashboardData(date);
      console.log(data);

      return data;
   }
);

const dashboardSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getAll.fulfilled, (state, action) => {
            console.log(action.payload);

            state.data = [action.payload];
            state.isLoading = false;
            state.isError = false;
         })
         .addCase(getAll.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getAll.rejected, (state, action) => {
            // state.comment.data = [];
            // state.comment.total = 0;
            state.isLoading = false;
            state.isError = true;
            // state.errorMessage = action.error.message || "";
         });
   },
});

export default dashboardSlice;
