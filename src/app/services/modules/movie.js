/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

export default {
  getMoviesByStatus: (status, page, size) => {
    return axios.get(
      `${
        process.env.REACT_APP_BOOKING_MOVIE_API_URL
      }/landing/status/movies?status=${status || "showing-now"}&page=${
        page || 1
      }&size=${size || 4}`
    );
  },
  getMoviesBySlug: (slug) => {
   console.log(      `${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/movie/${slug}`
   );

    return axios.get(
      `${process.env.REACT_APP_BOOKING_MOVIE_API_URL}/landing/movie/${slug}`
    );
  },
};
