/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

export default {
   getMoviesByStatus: (status, page, size) => {
      return axios.get(
         `http://localhost:8080/api/v1/landing/status/movies?status=${
            status || "showing-now"
         }&page=${page || 1}&size=${size || 4}`
      );
   },
};
