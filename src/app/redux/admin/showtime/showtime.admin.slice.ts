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
            ENDPOINTS.ADMIN.SCHEDULE.LIST,
        );
        return data.data;
    },
);

export const createShowtime = createAsyncThunk<any, ICreateShowtime>(
    'createShowtime',
    async (payload) => {
        const response = await Axios.axiosPostWithToken(
            ENDPOINTS.ADMIN.SCHEDULE.POST_SHOWTIME,
            payload,
        );
        return response;
    },
);

export const deleteShowtime = createAsyncThunk<any, IDeleteShowtime>(
    'deleteShowtime',
    async (payload) => {
        const response = await Axios.axiosDelete(
            getEndPoint(ENDPOINTS.ADMIN.SCHEDULE.DELETE_SHOWTIME, {
                showTimeId: payload.id,
            }),
        );
        return response;
    },
);

const scheduleSlice = createSlice({
    name: '@@schedule',
    initialState,
    reducers: {
        setSelectedRoom: (state, action) => {
            const { cinemas } = state;
            state.selectedRoom = action.payload;
            state.showtimes =
                //@ts-ignore
                cinemas[state.selectedCinema]?.rooms[
                    state.selectedRoom
                ].showtimes?.map((show: any) => {
                    return {
                        ...show,
                    };
                }) || [];
        },
        setSelectedCinema: (state, action) => {
            const { cinemas } = state;
            state.selectedRoom = 0;

            state.selectedCinema = action.payload;
            state.showtimes =
                //@ts-ignore
                cinemas[state.selectedCinema]?.rooms[
                    state.selectedRoom
                ].showtimes?.map((show: any) => {
                    return {
                        ...show,
                    };
                }) || [];
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getAllSchedules.fulfilled, (state, action) => {
                state.cinemas = action.payload;
                state.isLoading = false;

                state.showtimes =
                    //@ts-ignore
                    action.payload[state.selectedCinema]?.rooms[
                        state.selectedRoom
                    ].showtimes?.map((show: any) => {
                        return {
                            ...show,
                        };
                    }) || [];
            })
            .addCase(getAllSchedules.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getAllSchedules.rejected, (state, action) => {
                state.isLoading = false;
            });
        builder.addCase(createShowtime.fulfilled, (state, action) => {
            const data = action.payload.data;
            const showtime = {
                id: data.id,
                format: data.format,
                movie: data.movie,
                room_id: data.room.id,
                running_time: data.running_time,
                start_date: data.start_date,
                start_time: data.start_time,
                status: data.status,
            } as IShowtimeList;
            state.cinemas[state.selectedCinema]?.rooms![
                state.selectedRoom
            ].showtimes?.push(showtime);
        });
        builder.addCase(deleteShowtime.fulfilled, (state, action) => {
            const deletedId = action.payload.data;
            const newShowtimes =
                (state.showtimes.filter(
                    (show) => show.id !== deletedId,
                ) as IShowtimeList[]) || [];

            state.cinemas[state.selectedCinema].rooms![
                state.selectedRoom
            ].showtimes = [...newShowtimes];
        });
    },
});

export const { setSelectedRoom, setSelectedCinema } = scheduleSlice.actions;

export default scheduleSlice.reducer;
