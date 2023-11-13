import api from "@/app/services/api";
import { ICommentList, ICommentStatus } from "@/app/types/comment";
import { IMovie, IMovieSlug, IgetByStatus } from "@/app/types/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ICommentsState {
   comment: ICommentList;
   isLoading: boolean;
   isError: boolean;
   errorMessage: string | undefined;
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

export const putCommentStatus = createAsyncThunk(
   "@@movies/putCommentStatus",
   async (
      { id, payload }: { id: string; payload: ICommentStatus },
      thunkApi
   ) => {
      const { data } = await api.commentService.putStatus(id, payload);
      return data;
   }
);

const commentsSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getAll.fulfilled, (state, action) => {
            state.comment.data = [action.payload.data];
            state.comment.total = action.payload.total;
            state.isLoading = false;
            state.isError = false;
         })
         .addCase(getAll.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getAll.rejected, (state, action) => {
            state.comment.data = [];
            state.comment.total = 0;
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.error.message;
         })
         .addCase(getCommentByStatus.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getCommentByStatus.fulfilled, (state, action) => {
            state.comment.data = [...(action.payload.data || [])];
            state.comment.total = action.payload.total;

            state.isLoading = false;
            state.isError = false;
         })
         .addCase(getCommentByStatus.rejected, (state, action) => {
            state.comment.data = [];
            state.comment.total = 0;
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.error.message;
         });
   },
});

export default commentsSlice;
