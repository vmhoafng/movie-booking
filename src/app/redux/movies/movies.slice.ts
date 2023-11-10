import api from '@/app/services/api';
import {
	IMovie,
	IMovieSlug,
	IMoviesGetAll,
	IPutMovieDetails,
	IgetByStatus,
	IgetShowtimeByMovie,
} from '@/app/types/movie';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IMoviesState {
	movies: IMovie[];
	showingNow: IMovie[];
	comingSoon: IMovie[];
	isLoading: boolean;
	isError: boolean;
	errorMessage: string;
	detail: IMovie;
}

const initialState: IMoviesState = {
	movies: [],
	showingNow: [],
	comingSoon: [],
	detail: {} as IMovie,
	isLoading: false,
	isError: false,
	errorMessage: '',
};
export const getByStatus = createAsyncThunk(
	'@@movies/getByStatus',
	async (payload: IgetByStatus, thunkApi) => {
		const { data } = await api.moviesService.getAll(payload);
		return data;
	}
);
export const getMovieDetail = createAsyncThunk(
	'@@movies/getMovieDetail',
	async (payload: IMovieSlug, thunkApi) => {
		const { data } = await api.moviesService.getMovieSlug(payload);
		return data;
	}
);

export const getShowtimeByMovie = createAsyncThunk(
	'@@movies/getShowtimeByMovie',
	async (payload: IgetShowtimeByMovie) => {
		let { data } = await api.showtime.getShowtimeByMovie(payload);
		return data;
	}
);

export const putMovie = createAsyncThunk<
	void,
	{ id: string; payload: IPutMovieDetails }
>('@@movies/putMovie', async ({ id, payload }, thunkApi) => {
	const { data } = await api.moviesService.putMovie(id, payload);
	return data;
});

export const getMovieDetailById = createAsyncThunk<IMovie, string>(
	'@@movies/getMovieDetail',
	async (id: string, thunkApi) => {
		const { data } = await api.moviesService.getMovieById(id);
		return data;
	}
);

export const getMovies = createAsyncThunk<IMoviesGetAll, undefined>(
	'@@movies/getMovies',
	async () => {
		const { data } = await api.moviesService.getAllMovies();
		return data;
	}
);

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getByStatus.fulfilled, (state, action) => {
				state.movies = [...(action.payload.data[0].movies || [])];
				state.isLoading = false;
			})
			.addCase(getByStatus.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMovieDetail.fulfilled, (state, action) => {
				state.detail = { ...action.payload };
				state.isLoading = false;
			})
			.addCase(getMovieDetail.pending, (state) => {
				state.isLoading = true;
			});
		builder.addCase(getShowtimeByMovie.fulfilled, (state, action) => {
			state.detail.showtimes = action.payload;
		});
		builder.addCase(getMovies.fulfilled, (state, action) => {
			state.movies = [...action.payload.data];
			state.showingNow = action.payload.data.filter((m) => m.status.id === 2);
			state.comingSoon = action.payload.data.filter((m) => m.status.id === 1);
		});
	},
});

export default moviesSlice;
