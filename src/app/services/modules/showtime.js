/* eslint-disable import/no-anonymous-default-export */
import { ENDPOINTS, getEndPoint } from '@/app/constants/endpoint';
import { Axios } from '@/app/utils/api';
import axios from 'axios';

export default {
	getShowtimeByMovie: (id, date) => {
		return Axios.axiosGet(
			getEndPoint(ENDPOINTS.SHOWTIME_BY_MOVIE, { movieId: id }),
			{
				params: {
					date,
				},
			}
		);
	},
	getShowtimeByCinema: (id, date) => {
		return axios.get(
			`${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/cinema/${id}/showtime?${date}`
		);
	},
	getSeatsByShowtime: (id) => {
		// return axios.get(
		//   `${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/showtime/${id}/seats`
		// );
		return Axios.axiosGet(
			getEndPoint(ENDPOINTS.SHOWTIME_SEAT, {
				showTimeId: id,
			})
		);
	},
};
