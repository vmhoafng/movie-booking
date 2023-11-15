import api from "@/app/services/api";
import { IPostBill } from "@/app/types/payment";
import { ISeat } from "@/app/types/seat";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type IPaymentInitialState = {
   room_name: string;
   format: string;
   selected_seats: ISeat[];
   movie_name: string;
   start_time: string;
   start_date: string;
   showtimeId: string;
   total: number;
};

const initialState: IPaymentInitialState = {
   room_name: "RAP 1",
   format: "Lồng tiếng",
   selected_seats: [
      {
         is_reserved: false,
         row: "J",
         type: {
            id: 1,
            name: "Normal",
            price: 50000,
         },
         seat_id: 142,
         row_index: 9,
         status: true,
      },
   ],
   movie_name: "The nun",
   start_date: "CN 17/11",
   start_time: "15:30",
   showtimeId: "Showtime029",
   total: 0,
};

export const createBill = createAsyncThunk<
   any,
   undefined,
   { state: RootState }
>("@@auth/createBill", async (_, thunkApi) => {
   const { auth, payment } = thunkApi.getState();
   const seatId: number[] = [];

   payment.selected_seats.forEach((s) => {
      seatId.push(s.seat_id);
   });

   const payload: IPostBill = {
      seatId,
      changedPoint: auth.user.point,
      showtimeId: payment.showtimeId,
   };
   const { data } = await api.paymetService.postBill(payload);
   return data;
});

const paymentSlice = createSlice({
   name: "@@payment",
   initialState,
   reducers: {
      setTicket: (state, action) => {
         state = action.payload;
      },
      setSelectedSeats: (state, action) => {},
   },
   extraReducers(builder) {
      builder.addCase(createBill.fulfilled, (state, action) => {});
   },
});

export default paymentSlice.reducer;
