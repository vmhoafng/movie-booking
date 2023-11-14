import { ENDPOINTS } from "@/app/constants/endpoint";
import { IPostCinema } from "@/app/types/cinema";
import { Axios } from "@/app/utils/api";

const cinemaService = {
  getAll: async () => {
    return await Axios.axiosGet(ENDPOINTS.CINEMA_MOVIES_SHOWTIME);
  },
  putCinema: (payload: IPostCinema) => {
    return Axios.axiosPost(ENDPOINTS.ADMIN.CINEMA.POST_CINEMA, payload);
  },
};

export default cinemaService;
