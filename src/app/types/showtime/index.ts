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

export type ICreateShowtime = {
	start_date: string;
	start_time: string;
	movie_id: string;
	format_id: number;
	room_id: string;
};

export type IDeleteShowtime = {
	id: string;
};
