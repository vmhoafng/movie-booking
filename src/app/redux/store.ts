import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './example/counter';
import userReducer from './user';
<<<<<<< HEAD
=======
import movieSlice from './slices/movieSlice';
import showtimeSlice from './slices/showtimeSlice';
import cinemaReducer from './cinema';
>>>>>>> nolb226/finish-cinema-screen
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
<<<<<<< HEAD
=======
		movie: movieSlice.reducer,
		showtime: showtimeSlice.reducer,
		cinema: cinemaReducer,
>>>>>>> nolb226/finish-cinema-screen
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
