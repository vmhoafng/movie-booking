import { ICinema } from '@/app/types/cinema';
import { createSlice } from '@reduxjs/toolkit';

type IScheduleState = {};

const initialState: IScheduleState = {};

const scheduleSlice = createSlice({
	name: '@@schedule',
	initialState,
	reducers: {},
});

export default scheduleSlice.reducer;
