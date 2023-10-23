import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './example/counter';
import userReducer from './auth';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
