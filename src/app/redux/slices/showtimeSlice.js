import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
	cinemas: [
		{
			id: 'Cinema001',
			name: 'Galaxy Trung Chanh',
			address: '466',
			district: '12',
			city: 'HCM',
			showtime: [
				{
					id: '123',
					status: true,
					start_date: '2023-10-23',
					start_time: '13:00:00',
					running_time: 180,
				},
			],
		},
	],
	isLoading: false,
	isError: false,
	errorMessage: '',
};

export const getShowtimeByMovie = createAsyncThunk(
	'getShowtimeByMovie',
	async (payload, thunkApi) => {
		let res = await api.movie.getShowtimeByMovie(payload.id, payload.date);
		console.log(res.data);
		return res.data;
	}
);

export const getShowtimeByCinema = createAsyncThunk(
	'getShowtimeByCinema',
	async (payload, thunkApi) => {
		let res = await api.movie.getMoviesByCinema(payload, thunkApi);
		return res.data;
	}
);

const showtimeSlice = createSlice({
	name: 'showtime',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getShowtimeByMovie.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getShowtimeByMovie.fulfilled, (state, action) => {
			console.log(action.payload);
			state.cinemas = [...action.payload[0].cinemas];
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(getShowtimeByMovie.rejected, (state, action) => {
			state.isError = true;
			state.errorMessage = action.error.message;
		});
	},
});

export default showtimeSlice;
