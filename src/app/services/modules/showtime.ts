/* eslint-disable import/no-anonymous-default-export */
import { ENDPOINTS, getEndPoint } from '@/app/constants/endpoint';
import { IMovieShowTimeListByDate } from '@/app/types/movie';
import { Axios } from '@/app/utils/api';
import { AxiosResponse } from 'axios';

export default {
	getShowtimeByMovie: async (
		id: string,
		date: string
	): Promise<AxiosResponse<IMovieShowTimeListByDate>> => {
		return await Axios.axiosGet(
			getEndPoint(ENDPOINTS.SHOWTIME_BY_MOVIE, {
				movieId: id,
			}),
			{
				params: { date },
			}
		);
	},
	getShowtimeByCinema: async (id: string, date: string) => {
		return await Axios.axiosGet(
			getEndPoint(ENDPOINTS.GET_SHOWTIME_BY_CINEMA_DATE, {
				cinemaId: id,
			}),
			{
				params: {
					date,
				},
			}
		);
	},

	getShowtimeSeats: async (showtimeId: string) => {
		return await Axios.axiosGet(
			getEndPoint(ENDPOINTS.SHOWTIME_SEAT, {
				showtimeId,
			})
		);
	},
};
