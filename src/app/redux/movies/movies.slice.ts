import api from "@/app/services/api";
import {
   IMovie,
   IMovieSlug,
   IPutMovieDetails,
   IgetByStatus,
   IgetShowtimeByMovie,
} from "@/app/types/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IMoviesState {
   movies: IMovie[];
   isLoading: boolean;
   isError: boolean;
   errorMessage: string;
   detail: IMovie;
}

const initialState: IMoviesState = {
   movies: [],
   detail: {} as IMovie,
   isLoading: false,
   isError: false,
   errorMessage: "",
};
export const getByStatus = createAsyncThunk(
   "@@movies/getByStatus",
   async (payload: IgetByStatus, thunkApi) => {
      const { data } = await api.moviesService.getAll(payload);
      return data;
   }
);
export const getMovieDetail = createAsyncThunk(
   "@@movies/getMovieDetail",
   async (payload: IMovieSlug, thunkApi) => {
      const { data } = await api.moviesService.getMovieSlug(payload);
      return data;
   }
);

export const getShowtimeByMovie = createAsyncThunk(
   "@@movies/getShowtimeByMovie",
   async (payload: IgetShowtimeByMovie) => {
      let { data } = await api.showtime.getShowtimeByMovie(payload);
      return data;
   }
);

export const putMovie = createAsyncThunk<
   void,
   { id: string; payload: IPutMovieDetails }
>("@@movies/putMovie", async ({ id, payload }, thunkApi) => {
   const { data } = await api.moviesService.putMovie(id, payload);
   return data;
});

export const getMovieDetailById = createAsyncThunk<IMovie, string>(
   "@@movies/getMovieDetail",
   async (id: string, thunkApi) => {
      const { data } = await api.moviesService.getMovieById(id);
      return data;
   }
);

const moviesSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getByStatus.fulfilled, (state, action) => {
            state.movies = [...(action.payload.data[0].movies || [])];
            state.isLoading = false;
         })
         .addCase(getByStatus.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getMovieDetail.fulfilled, (state, action) => {
            state.detail = { ...action.payload };
            state.isLoading = false;
         })
         .addCase(getMovieDetail.pending, (state) => {
            state.isLoading = true;
         });
      builder.addCase(getShowtimeByMovie.fulfilled, (state, action) => {
         state.detail.showtimes = action.payload;
      });
   },
});

export default moviesSlice;
