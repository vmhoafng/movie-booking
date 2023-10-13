import { createSlice } from '@reduxjs/toolkit';
import { access } from 'fs';

// initial state
const initialState = {
	isAuthenticated: false,
	role: '',
};

//create user slice
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

//export user actions

//export user reducer
export default userSlice.reducer;
