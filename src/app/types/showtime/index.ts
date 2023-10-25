import { IMovieFormat } from '../movie';

export type IShowtime = {
	id: string;
	status: boolean;
	format: IMovieFormat;
	start_date: string;
	start_time: string;
	running_time: number;
};
