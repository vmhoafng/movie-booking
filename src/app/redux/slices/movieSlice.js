import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
   movies: [],
   isLoading: false,
   isError: false,
   errorMessage: "",
};

export const getMovieList = createAsyncThunk(
   "getMovieList",
   async (movieStatus) => {
      let res = await api.movie.getMoviesByStatus(movieStatus);
      return res.data;
   }
);

const movieSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {
      
   },
   extraReducers: (builder) => {
      builder.addCase(getMovieList.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getMovieList.fulfilled, (state, action) => {
         state.movies = [...action.payload[0].movies];
         state.isLoading = false;
         state.isError = false;
      });
      builder.addCase(getMovieList.rejected, (state, action) => {
         state.isError = true;
         state.errorMessage = action.error.message;
      });
   },
});

export default movieSlice;
