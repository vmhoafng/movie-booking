import { IMovie } from '../movie';
import { IShowtime } from '../showtime';

export type ICinema = {
	id: string;
	name: string;
	address: string;
	district: string;
	city: string;
	phone_number: string;
	description: string;
	movies?: IMovie[];
};

export type ICinemaList = ICinema[];

export type ICinemaShowtimeList = ICinema & { showtime: IShowtime[] };
