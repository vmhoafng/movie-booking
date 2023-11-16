import api from "@/app/services/api";
import { IPostBill } from "@/app/types/payment";
import { ISeat } from "@/app/types/seat";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ISeatType, ITicketType } from "@/pages/client/seatPlan/type";

type IPaymentInitialState = {
  ticket: ITicketType;
  selected_seats: ISeatType[];
};

const initialState: IPaymentInitialState = {
  ticket: {
    showtime_id: "",
    movie_name: "",
    format: "",
    cinema: "",
    showtime: "",
    ticket_price: 0,
  },
  selected_seats: [],
};

export const createBill = createAsyncThunk<
  any,
  boolean,
  { state: RootState }
>("@@auth/createBill", async (isUsingPoint, thunkApi) => {
  const { auth, payment } = thunkApi.getState();
  const seatId: number[] = [];

  payment.selected_seats.forEach((s) => {
    seatId.push(s.seat_id);
  });

  const payload: IPostBill = {
    seatId,
    changedPoint: isUsingPoint ? auth.user.point : 0,
    showtimeId: payment.ticket.showtime_id,
  };
  const { data } = await api.paymetService.postBill(payload);
  return data;
});

const paymentSlice = createSlice({
  name: "@@payment",
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.ticket = { ...action.payload };
    },
    setSelectedSeats: (state, action) => {
      state.selected_seats?.find(
        (selected) => selected.seat_id === action.payload.seat_id
      )
        ? (state.selected_seats = state.selected_seats?.filter(
            (selected) => selected.seat_id !== action.payload.seat_id
          ))
        : (state.selected_seats = [...state.selected_seats, action.payload]);
    },
  },
  extraReducers(builder) {
    builder.addCase(createBill.fulfilled, (state, action) => {});
  },
});

export default paymentSlice.reducer;
export const { setTicket, setSelectedSeats } = paymentSlice.actions;
