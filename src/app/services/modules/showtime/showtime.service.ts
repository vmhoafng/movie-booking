/* eslint-disable import/no-anonymous-default-export */
import { ENDPOINTS, getEndPoint } from "@/app/constants/endpoint";
import { Axios } from "@/app/utils/api";
import { IgetShowtimeByMovie } from "@/app/types/movie";
const showtimesService = {
   getShowtimeByMovie: (payload: IgetShowtimeByMovie) => {
      return Axios.axiosGet(
         getEndPoint(ENDPOINTS.SHOWTIME_BY_MOVIE, {
            params: {
               date: payload.date,
               id: payload.id,
            },
         })
      );
   },
   // getShowtimeByCinema: (id, date) => {
   //    return axios.get(
   //       `${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/cinema/${id}/showtime?${date}`
   //    );
   // },
   // getSeatsByShowtime: (id) => {
   //    return axios.get(
   //       `${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/showtime/${id}/seats`
   //    );
   // },
};

export default showtimesService;
