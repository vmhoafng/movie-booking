import { IShowtime } from '../showtime';

export type ICinema = {
	id: string;
	name: string;
	address: string;
	district: string;
	city: string;
};

export type ICinemaList = {
	total: number;
	data: ICinema[];
};

export type ICinemaShowtimeList = ICinema & { showtime: IShowtime[] };
