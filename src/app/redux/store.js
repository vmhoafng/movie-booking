import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './example/counter';
import userReducer from './user';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
	},
});
