import api from "@/app/services/api";
import { ICommentList, ICommentStatus } from "@/app/types/comment";
import { IMovie, IMovieSlug, IgetByStatus } from "@/app/types/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ICommentsState {
   comment: ICommentList;
   isLoading: boolean;
   isError: boolean;
   errorMessage: string;
}

const initialState: ICommentsState = {
   comment: {
      total: 0,
      data: [],
   },
   isLoading: false,
   isError: false,
   errorMessage: "",
};
export const getCommentByStatus = createAsyncThunk(
   "@@movies/getCommentByStatus",
   async (payload: ICommentStatus) => {
      const { data } = await api.commentService.getCommentByStatus(payload);
      return data;
   }
);
export const getAll = createAsyncThunk("@@movies/getAll", async () => {
   const { data } = await api.commentService.getAll();
   return data;
});
const commentsSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getAll.fulfilled, (state, action) => {
            state.comment.data = [...(action.payload.data || [])];
            state.comment.total = 0;
            state.isLoading = false;
         })
         .addCase(getAll.pending, (state) => {
            state.isLoading = true;
         });
      // .addCase(getAll.fulfilled, (state, action) => {
      //    state.detail = { ...action.payload };
      //    state.isLoading = false;
      // })
      // .addCase(getCommentByStatus.pending, (state) => {
      //    state.isLoading = true;
      // })
      // .addCase(getCommentByStatus.fulfilled, (state, action) => {
      //    state.movies = [...(action.payload.data[0].movies || [])];
      //    state.isLoading = false;
      // });
   },
});

export default commentsSlice;
