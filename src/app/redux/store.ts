import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./example/counter";
import userReducer from "./user";
import showtimeSlice from "./slices/showtimeSlice";
import movieSlice from "./slices/movieSlice";
export const store = configureStore({
   reducer: {
      counter: counterReducer,
      user: userReducer,
      movie: movieSlice.reducer,
      showtime: showtimeSlice.reducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
