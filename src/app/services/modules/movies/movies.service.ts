import { ENDPOINTS, getEndPoint } from "@/app/constants/endpoint";
import {
  IMovieSlug,
  IPutMovieDetails,
  IgetByStatus,
  IgetShowtimeByMovie,
} from "@/app/types/movie";
import { Axios } from "@/app/utils/api";
const moviesService = {
  getAll: async (payload: IgetByStatus) => {
    return await Axios.axiosGet(ENDPOINTS.MOVIE_BY_STATUS, {
      params: {
        status: payload.status || "showing-now",
        page: payload.page || 1,
        size: payload.size || 100,
      },
    });
  },
  getMovieSlug: (payload: IMovieSlug) => {
    return Axios.axiosGet(
      getEndPoint(ENDPOINTS.MOVIE_SLUG, {
        movieSlug: payload.slug,
      })
    );
  },

  getMovieById: (id: string) => {
    return Axios.axiosGetWithToken(
      getEndPoint(ENDPOINTS.ADMIN.MOVIE.DETAIL, {
        movieId: id,
      })
    );
  },

  getMovieShowtimes: (payload: IgetShowtimeByMovie) => {
    const { id, date } = payload;
    return Axios.axiosGet(
      getEndPoint(ENDPOINTS.SHOWTIME_BY_MOVIE, {
        movieId: id,
      }),
      {
        params: {
          date,
        },
      }
    );
  },

  putMovie: (id: string, payload: IPutMovieDetails) => {
    return Axios.axiosPutWithFile(
      getEndPoint(ENDPOINTS.ADMIN.MOVIE.PUT, {
        movieId: id,
      }),
      payload
    );
  },

  getAllMovies: async () => {
    return Axios.axiosGet(ENDPOINTS.MOVIES);
  },
  getAllAdminMovies: async () => {
    return Axios.axiosGetWithToken(ENDPOINTS.ADMIN.MOVIE.LIST, {
      params: {
        size: 9999,
        page: 1,
      },
    });
  },
};

export default moviesService;
