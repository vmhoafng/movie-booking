/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
   getShowtimeByMovie: (id, date) => {
      return axios.get(
         `http://localhost:8080/api/v1/landing/movie/${id}/showtime?date=${date}`
      );
   },
   getShowtimeByCinema: (id, date) => {
      return axios.get(
         `http://localhost:8080/api/v1/landing/cinema/${id}/showtime?${date}`
      );
   },
   getSeatsByShowtime: (id) => {
      return axios.get(
         `http://localhost:8080/api/v1/landing/showtime/${id}/seats`
      );
   },
};
