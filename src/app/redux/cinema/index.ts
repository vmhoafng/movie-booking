import api from "@/app/services/api";
import { ICinema, ICinemaList } from "@/app/types/cinema";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IShowtimeGetByCinema } from "@/app/types/showtime";
import { IMovie } from "@/app/types/movie";

type TCinemaState = {
   cinemas: ICinema[];
   movies: IMovie[];
   isLoading: boolean;
   selected: number;
   date: string;
};

const initialState: TCinemaState = {
   cinemas: [],
   movies: [],
   selected: -1,
   isLoading: false,
   date: new Date(Date.now()).toISOString().slice(0, 10),
};

export const getCinemas = createAsyncThunk<ICinemaList>(
   "@@cinema/getAll",
   async (_, thunkApi) => {
      const { data } = await api.cinemaService.getAll();
      return data;
   }
);

// export const showtimeByCinema = createAsyncThunk(
//    "@@cinema/showtime",
//    async (payload: IShowtimeGetByCinema, thunkApi) => {
//       const { data } = await api.showtimesService.getShowtimeByCinema(
//          payload.cinemaId,
//          payload.date
//       );

//       return data;
//    }
// );

export const cinemaSlice = createSlice({
   name: "cinema",
   initialState,
   reducers: {
      selectCinemaAndDate: (state, action) => {
         const { cinemas } = state;

         const index = cinemas.findIndex((c) => c.name === action.payload);
         if (index !== -1) {
            state.selected = index;
            state.movies = cinemas[index]?.movies || [];
         }
      },

      selectDate: (state, action) => {
         state.date = action.payload;
      },
   },
   extraReducers(builder) {
      builder
         .addCase(getCinemas.fulfilled, (state, action) => {
            state.cinemas = [...action.payload];
            state.isLoading = false;
         })
         .addCase(getCinemas.pending, (state, action) => {
            state.isLoading = true;
         });
      //   builder.addCase(showtimeByCinema.fulfilled, (state, action) => {
      //      console.log(action);
      //   });
   },
});

export const { selectCinemaAndDate, selectDate } = cinemaSlice.actions;

export default cinemaSlice.reducer;
