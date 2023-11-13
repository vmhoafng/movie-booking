import api from "@/app/services/api";
import { ICommentList, ICommentStatus } from "@/app/types/comment";
import { IMovie, IMovieSlug, IgetByStatus } from "@/app/types/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type IChartItem = {
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
            // console.log(action.payload);
            state.data = [...action.payload];
            state.isLoading = false;
            state.isError = false;
         })
         .addCase(getAll.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getAll.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
         });
   },
});

export default dashboardSlice;
