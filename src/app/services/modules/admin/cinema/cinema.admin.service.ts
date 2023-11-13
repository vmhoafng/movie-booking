import { ENDPOINTS, getEndPoint } from "@/app/constants/endpoint";
import { IMovieSlug, IPutMovieDetails, IgetByStatus } from "@/app/types/movie";
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
    return Axios.axiosGet(ENDPOINTS.MOVIE_SLUG, {
      params: {
        slug: payload.slug || "",
      },
    });
  },

  getMovieById: (id: string) => {
    return Axios.axiosGetWithToken(
      getEndPoint(ENDPOINTS.ADMIN.MOVIE.DETAIL, {
        movieId: id,
      })
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
};

export default moviesService;
