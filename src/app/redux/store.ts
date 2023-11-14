import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./example/counter";
import userReducer from "./auth";
import movieSlice from "./slices/movieSlice";
import showtimeSlice from "./slices/showtimeSlice";
import cinemaReducer from "./cinema";
import moviesSlice from "./movies/movies.slice";
import layoutReducer from "./layout";
import commentsSlice from "./comment";
import paymentReducer from "./payment";
import dashboardSlice from "./dashboard/dashboard.slice";
import profileSlice from "./profile/profile.slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: userReducer,
    movie: movieSlice.reducer,
    showtime: showtimeSlice.reducer,
    cinema: cinemaReducer,
    movies: moviesSlice.reducer,
    payment: paymentReducer,
    layout: layoutReducer,
    comment: commentsSlice.reducer,
    dashboard: dashboardSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
