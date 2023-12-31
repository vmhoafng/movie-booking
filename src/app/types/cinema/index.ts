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
	status?: string;
	rooms?: roomType[];
};
export type IRoomStatus = {
	roomId: string;
	statusId: number;
};
export type roomType = {
	id: string;
	totalSeats: number;
	name: string;
	showtimes?: IShowtime[];
	seats: seatType[];
};
export type seatType = { row: string; row_index: string; type_id: string };
export type ICinemaList = ICinema[];

export type ICinemaShowtimeList = ICinema & { showtime: IShowtime[] };
