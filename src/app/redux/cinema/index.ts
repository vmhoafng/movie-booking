import api from '@/app/services/api';
import { ICinema, ICinemaList } from '@/app/types/cinema';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getShowtimeByCinema } from '../slices/showtimeSlice';

type TCinemaState = {
	cinemas: ICinema[];
	isLoading: boolean;
	selected: ICinema | undefined;
};

const initialState: TCinemaState = {
	cinemas: [],
	selected: undefined,
	isLoading: false,
};

const getCinemas = createAsyncThunk<ICinemaList>(
	'@@cinema/getAll',
	async (_, thunkApi) => {
		const { data } = await api.cinemaService.getAll();
		return data;
	}
);

const showtimeByCinema = createAsyncThunk(
	'@@cinema/showtime',
	(payload: { cinemaId: string; date: string }, thunkApi) => {
		thunkApi.dispatch(getShowtimeByCinema());
	}
);

export const cinemaSlice = createSlice({
	name: 'cinema',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getCinemas.fulfilled, (state, action) => {
			state.cinemas = [...action.payload.data];
		});
	},
});

export default cinemaSlice.reducer;
