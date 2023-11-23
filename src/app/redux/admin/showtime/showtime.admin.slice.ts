import { ENDPOINTS } from '@/app/constants/endpoint';
import { ICinema } from '@/app/types/cinema';
import { IMovie } from '@/app/types/movie';
import { IShowtime } from '@/app/types/showtime';
import { Axios } from '@/app/utils/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { async } from 'q';

type ICinemaSchedule = ICinema & {
	rooms: [
		{
			id: string;
			name: string;
			showtimes: [IShowtime & { movie: IMovie }];
		}
	];
};

type IScheduleState = {
	cinemas: ICinemaSchedule[];
};

const initialState: IScheduleState = {
	cinemas: [],
};

export const getAllSchedules = createAsyncThunk<any, undefined>(
	'getAllSchedules',
	async () => {
		const { data } = await Axios.axiosGetWithToken(
			ENDPOINTS.ADMIN.SCHEDULE.LIST
		);
		return data.data;
	}
);

const scheduleSlice = createSlice({
	name: '@@schedule',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getAllSchedules.fulfilled, (state, action) => {
			state.cinemas = action.payload;
		});
	},
});

export default scheduleSlice.reducer;
