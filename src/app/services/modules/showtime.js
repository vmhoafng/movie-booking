/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
   getShowtimeByMovie: (id, date) => {
      return axios.get(
         `${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/movie/${id}/showtime?date=${date}`
      );
   },
   getShowtimeByCinema: (id, date) => {
      return axios.get(
         `${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/cinema/${id}/showtime?${date}`
      );
   },
   getSeatsByShowtime: (id) => {
      return axios.get(
         `${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/showtime/${id}/seats`
      );
   },
};
