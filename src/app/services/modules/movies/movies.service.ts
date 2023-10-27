import { ENDPOINTS } from "@/app/constants/endpoint";
import { IgetByStatus } from "@/app/types/movie";
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
};

export default moviesService;
