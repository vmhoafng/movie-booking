import api from "@/app/services/api";
import { IMovie, IgetByStatus } from "@/app/types/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
}

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
};
export const getByStatus = createAsyncThunk(
  "@@movies/getByStatus",
  async (payload: IgetByStatus, thunkApi) => {
    const { data } = await api.moviesService.getAll(payload);
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
      });
  },
});

export default moviesSlice;
