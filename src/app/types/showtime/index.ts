import { IMovieFormat } from '../movie';

export type IShowtime = {
	id: string;
	status: boolean;
	format: IMovieFormat;
	start_date: string;
	start_time: number;
	running_time: number;
};

export type IShowtimeGetByCinema = {
	cinemaId: string;
	date: string;
};

export type IShowtimeGetByMovie = {
	movieId: string;
	date: string;
};
