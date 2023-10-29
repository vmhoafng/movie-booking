import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
   cinemas: [
      {
         id: "",
         name: "",
         address: "",
         district: "",
         city: "",
         showtime: [
            {
               id: "",
               status: true,
               start_date: "",
               start_time: "",
               running_time: 180,
               seats: [
                  {
                     status: true,
                     row: "",
                     isReserved: true,
                     type: {
                        id: 1,
                        name: "",
                        price: 50000,
                     },
                     seat_id: 1,
                     row_index: 1,
                  },
               ],
            },
         ],
      },
   ],
   isLoading: false,
   isError: false,
   errorMessage: "",
};

export const getShowtimeByMovie = createAsyncThunk(
   "getShowtimeByMovie",
   async ({ id, date }) => {
      let res = await api.showtime.getShowtimeByMovie(id, date);
      return res.data;
   }
);

export const getShowtimeByCinema = createAsyncThunk(
   "getShowtimeByCinema",
   async ({ id, date }) => {
      let res = await api.showtime.getMoviesByCinema(id, date);
      return res.data;
   }
);

export const getSeatsByShowtime = createAsyncThunk(
   "getSeatsByShowtime",
   async ({ id }) => {
      let res = await api.movie.getSeatsByShowtime(id);
      console.log(res.data);
      return res.data;
   }
);

const showtimeSlice = createSlice({
   name: "showtime",
   initialState,
   extraReducers: (builder) => {
      // get Showtime
      builder.addCase(getShowtimeByMovie.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getShowtimeByMovie.fulfilled, (state, action) => {
         state.cinemas = [...action.payload.cinemas];
         state.isLoading = false;
         state.isError = false;
      });
      builder.addCase(getShowtimeByMovie.rejected, (state, action) => {
         state.isError = true;
         state.errorMessage = action.error.message;
      });
      // get Seats
      builder.addCase(getSeatsByShowtime.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getSeatsByShowtime.fulfilled, (state, action) => {
         console.log(action.payload);
         state.cinemas.showtime.seats = [...action.payload[0].rooms];
         state.isLoading = false;
         state.isError = false;
      });
      builder.addCase(getSeatsByShowtime.rejected, (state, action) => {
         state.isError = true;
         state.errorMessage = action.error.message;
      });
   },
});

export default showtimeSlice;
