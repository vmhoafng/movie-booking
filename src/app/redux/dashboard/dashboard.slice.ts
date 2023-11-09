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

const initialState: IDashboardItem[] = [
   {
      title: "",
      percent: "",
      chart: [{ title: "string", content: "string" }],
      content: "",
   },
];

export const getAll = createAsyncThunk("@@movies/getAll", async () => {
   const { data } = await api.commentService.getAll();
   console.log(data);

   return data;
});

const commentsSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getAll.fulfilled, (state, action) => {
            // state.comment.data = [...action.payload.data];
            // state.comment.total = action.payload.total;
            // state.isLoading = false;
            // state.isError = false;
         })
         .addCase(getAll.pending, (state) => {
            // state.isLoading = true;
         })
         .addCase(getAll.rejected, (state, action) => {
            // state.comment.data = [];
            // state.comment.total = 0;
            // state.isLoading = false;
            // state.isError = true;
            // state.errorMessage = action.error.message;
         });
   },
});

export default commentsSlice;
