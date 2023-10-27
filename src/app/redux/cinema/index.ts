import api from '@/app/services/api';
import { ICinema, ICinemaList } from '@/app/types/cinema';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IShowtimeGetByCinema } from '@/app/types/showtime';

type TCinemaState = {
	cinemas: ICinema[];
	isLoading: boolean;
	selected: number | undefined;
};

const initialState: TCinemaState = {
	cinemas: [],
	selected: undefined,
	isLoading: false,
};

export const getCinemas = createAsyncThunk<ICinemaList>(
	'@@cinema/getAll',
	async (_, thunkApi) => {
		const { data } = await api.cinemaService.getAll();
		return data;
	}
);

export const showtimeByCinema = createAsyncThunk(
	'@@cinema/showtime',
	async (payload: IShowtimeGetByCinema, thunkApi) => {
		thunkApi.dispatch(selectCinema(payload.cinemaId));
		const { data } = await api.showtime.getShowtimeByCinema(
			payload.cinemaId,
			payload.date
		);
		console.log(data);

		return data;
	}
);

export const cinemaSlice = createSlice({
	name: 'cinema',
	initialState,
	reducers: {
		selectCinema: (state, action) => {
			state.selected = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getCinemas.fulfilled, (state, action) => {
				state.cinemas = [...action.payload.data];
				state.isLoading = false;
			})
			.addCase(getCinemas.pending, (state, action) => {
				state.isLoading = true;
			});
		builder.addCase(showtimeByCinema.fulfilled, (state, action) => {
			console.log(action);
		});
	},
});

export const { selectCinema } = cinemaSlice.actions;

export default cinemaSlice.reducer;
