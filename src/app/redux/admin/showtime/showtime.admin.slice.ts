import { ENDPOINTS, getEndPoint } from '@/app/constants/endpoint';
import { ICinema } from '@/app/types/cinema';
import { IMovie } from '@/app/types/movie';
import {
	ICreateShowtime,
	IDeleteShowtime,
	IShowtime,
} from '@/app/types/showtime';
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
	isLoading: boolean;
};

const initialState: IScheduleState = {
	cinemas: [],
	isLoading: false,
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

export const createShowtime = createAsyncThunk<any, ICreateShowtime>(
	'createShowtime',
	async (payload) => {
		const { data } = await Axios.axiosPostWithToken(
			ENDPOINTS.ADMIN.SCHEDULE.POST_SHOWTIME,
			payload
		);
		return data;
	}
);

export const deleteShowtime = createAsyncThunk<any, IDeleteShowtime>(
	'deleteShowtime',
	async (payload) => {
		const { data } = await Axios.axiosDelete(
			getEndPoint(ENDPOINTS.ADMIN.SCHEDULE.DELETE_SHOWTIME, {
				showTimeId: payload.id,
			})
		);
		return data;
	}
);

const scheduleSlice = createSlice({
	name: '@@schedule',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllSchedules.fulfilled, (state, action) => {
				state.cinemas = action.payload;
				state.isLoading = false;
			})
			.addCase(getAllSchedules.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getAllSchedules.rejected, (state, action) => {
				state.isLoading = false;
			});
		builder.addCase(createShowtime.fulfilled, (state, action) => {
			console.log('Succeed');
		});
		builder.addCase(deleteShowtime.fulfilled, (state, action) => {
			console.log('Deleted');
		});
	},
});

export default scheduleSlice.reducer;
