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
	selected: number;
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
	selected: -1,
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
		let { data } = await api.moviesService.getMovieShowtimes(payload);
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

export const createMovie = createAsyncThunk<void, IPutMovieDetails>(
	'@@movies/createMovie',
	async (payload) => {
		const response = await api.moviesService.postMovie(payload);
		// return response;
	}
);

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
	reducers: {
		selectMovie: (state, action) => {
			const { movies } = state;
			const index = movies.findIndex((c) => c.slug === action.payload);

			if (index !== -1) {
				state.selected = index;
			}
		},
		resetError: (state) => {
			state.isError = false;
		},
	},
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
				state.detail = { ...state.detail, ...action.payload };
				state.isLoading = false;
				state.isError = false;
			})
			.addCase(getMovieDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMovieDetail.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
		builder.addCase(getShowtimeByMovie.fulfilled, (state, action) => {
			state.detail.cinema = action.payload.data;
		});
		builder.addCase(getMovies.fulfilled, (state, action) => {
			state.movies = [...action.payload.data];
			state.showingNow = action.payload.data.filter((m) => m.status.id === 2);
			state.comingSoon = action.payload.data.filter((m) => m.status.id === 1);
		});
	},
});

export const { selectMovie, resetError } = moviesSlice.actions;

export default moviesSlice;
