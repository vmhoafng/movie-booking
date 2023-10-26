import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './example/counter';
import userReducer from './user';
// import movieSlice from './slices/movieSlice';
import showtimeSlice from './slices/showtimeSlice';
import cinemaReducer from './cinema';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		// movie: movieSlice.reducer,
		showtime: showtimeSlice.reducer,
		cinema: cinemaReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
