import { ENDPOINTS } from "@/app/constants/endpoint";
import { ICinema } from "@/app/types/cinema";
import { Axios } from "@/app/utils/api";

const cinemaService = {
  getAll: async () => {
    return await Axios.axiosGet(ENDPOINTS.CINEMA_MOVIES_SHOWTIME);
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
