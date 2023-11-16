import { ENDPOINTS, getEndPoint } from "@/app/constants/endpoint";
import { ICinema } from "@/app/types/cinema";
import { Axios } from "@/app/utils/api";

const cinemaService = {
  getAll: async () => {
    return await Axios.axiosGet(ENDPOINTS.CINEMA_MOVIES_SHOWTIME);
  },
  getRooms: async (payload: string) => {
    return await Axios.axiosGet(
      getEndPoint(ENDPOINTS.ADMIN.CINEMA.GET_ROOMS_BY_CINEMA_ID, {
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
