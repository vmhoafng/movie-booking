import { ENDPOINTS, getEndPoint } from "@/app/constants/endpoint";
import { ICinema } from "@/app/types/cinema";
import { Axios } from "@/app/utils/api";

const cinemaService = {
  getAll: async () => {
    return await Axios.axiosGet(ENDPOINTS.CINEMA_MOVIES_SHOWTIME);
  },
  getCinemaById: async (payload: string) => {
    return await Axios.axiosGetWithToken(
      getEndPoint(ENDPOINTS.ADMIN.CINEMA.GET_CINEMA_BY_ID, {
        cinemaId: payload,
      })
    );
  },
  postCinema: async (payload: ICinema) => {
    console.log(payload);
    return await Axios.axiosPostWithToken(
      ENDPOINTS.ADMIN.CINEMA.POST_CINEMA,
      payload
    );
  },
};

export default cinemaService;
