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
type IShowtimeList = IShowtime & {
	movie: IMovie;
	room_id: string;
	start: string;
};

type IScheduleState = {
	cinemas: ICinema[];
	isLoading: boolean;
	selectedCinema: number;
	selectedRoom: number;
	showtimes: IShowtimeList[];
};

const initialState: IScheduleState = {
	cinemas: [],
	isLoading: false,
	selectedCinema: 0,
	selectedRoom: 0,
	showtimes: [],
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
	reducers: {
		setSelectedRoom: (state, action) => {
			state.selectedRoom = action.payload;
		},
		setSelectedCinema: (state, action) => {
			const { cinemas } = state;
			// const index = cinemas.findIndex((c) => c.id === action.payload.id) || 0;
			state.selectedCinema = action.payload;

			//@ts-ignore
			state.showtimes = cinemas[state.selectedCinema]?.rooms.flatMap(
				(room) =>
					(room.showtimes || []).map((show) => {
						return {
							...show,
							room_id: room.id,
						};
					}),
				1
			);
			state.selectedRoom = 0;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getAllSchedules.fulfilled, (state, action) => {
				state.cinemas = action.payload;
				state.isLoading = false;
				state.showtimes = action.payload[0]?.rooms.flatMap(
					(room: any) =>
						(room.showtimes || []).map((show: any) => {
							return {
								...show,
								room_id: room.id,
							};
						}),
					1
				);
				console.log(state.showtimes);
			})
			.addCase(getAllSchedules.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getAllSchedules.rejected, (state, action) => {
				state.isLoading = false;
			});
		builder.addCase(createShowtime.fulfilled, (state, action) => {
			state.showtimes = [...state.showtimes];
		});
		builder.addCase(deleteShowtime.fulfilled, (state, action) => {
			console.log('Deleted');
		});
	},
});

export const { setSelectedRoom, setSelectedCinema } = scheduleSlice.actions;

export default scheduleSlice.reducer;
