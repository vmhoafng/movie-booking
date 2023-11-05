import { TFile } from '@/app/components/upload/FileUploader';
import { ICinema, ICinemaShowtimeList } from '../cinema';
import { IShowtime } from '../showtime';

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
	producer: string;
	description: string;
	country: string;
	trailer: string;
	poster: string;
	slug: string;
	rated: number;
	director: string;
	status: IMovieStatus;
	sub_name: string;
	release_date: string;
	end_date: string;
	running_time: number;
	number_of_ratings: number;
	horizontal_poster: string;
	showtimes?: IShowtime[];
	cinema?: ICinemaShowtimeList[];
};

export type IMovieStatus = {
	id: number;
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

export type IgetByStatus = {
	status: 'coming-soon' | 'showing-now';
	page?: number;
	size?: number;
};
export type IMovieSlug = {
	slug: string;
};

export type IPutMovieDetails = {
	name: string;
	sub_name: string;
	cast: string;
	language: string;
	description: string;
	country: string;
	status: string;
	release_date: string;
	end_date: string;
	running_time: string;
	poster?: TFile;
	horizontal_poster?: TFile;
	images?: TFile[];
};
export type IgetShowtimeByMovie = {
	id: string;
	date: string;
};
