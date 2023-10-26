import { ICinema } from '../cinema';

export type IMovieFormat = {
	id: string;
	caption: string;
	version: string;
};

export type IMovie = {
	id: string;
	name: string;
	cast: string;
	rating: number;
	language: string;
	description: string;
	trailer: string;
	poster: string;
	rated: string;
	status: IMovieStatus;
	sub_name: string;
	release_date: string;
	end_date: string;
	running_time: number;
	number_of_ratings: number;
	horizontal_poster: string;
};

export type IMovieStatus = {
	id: string;
	description: string;
	slug: string;
};

export type IMovieGenre = {
	id: number;
	name: string;
};

export type IMovieGenreList = {
	total: number;
	data: IMovieGenre[];
};

export type IMovieByStatusList = {
	total: number;
	data: [IMovieStatus & { movies: IMovie[] }];
};

export type IMovieShowTimeListByDate = IMovie & {
	genre: IMovieGenre;
	status: IMovieStatus;
	formats: IMovieFormat[];
	cinema: ICinema[];
};
