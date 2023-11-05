import api from "@/app/services/api";
import { IgetShowtimeByMovie } from "@/app/types/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IShowtime {
   id: string;
   status: boolean;
   room: {
      id: string;
      name: string;
      totalSeats: 150;
      cinema: {
         id: string;
         name: string;
         address: number;
         district: number;
         city: string;
         description: string;
         phone_number: number;
      };
   };
   start_date: string;
   start_time: string;
   running_time: number;
}

interface IShowtimeCinema {
   id: string;
   name: string;
   address: number;
   district: string;
   city: string;
   description: string;
   showtime: IShowtime[];
}

interface IShowtimeState {
   showtime: IShowtimeCinema[];
   isLoading: boolean;
   isError: boolean;
   errorMessage: string;
}

const initialState: IShowtimeState = {
   showtime: [],
   isLoading: false,
   isError: false,
   errorMessage: "",
};

export const getShowtimeByMovie = createAsyncThunk(
   "@@movies/getShowtimeByMovie",
   async (payload: IgetShowtimeByMovie) => {
      let { data } = await api.showtimesService.getShowtimeByMovie(payload);
      return data;
   }
);

const showtimesSlice = createSlice({
   name: "showtimes",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(getShowtimeByMovie.fulfilled, (state, action) => {
         state.showtime = { ...action.payload };
         state.isError = false;
         state.isLoading = false;
         state.errorMessage = "";
      });
      builder.addCase(getShowtimeByMovie.pending, (state, action) => {
         state.isLoading = true;
      });
      builder.addCase(getShowtimeByMovie.rejected, (state, action) => {
         state.isError = false;
         state.isLoading = false;
         state.errorMessage = action.error.message!;
      });
   },
});
