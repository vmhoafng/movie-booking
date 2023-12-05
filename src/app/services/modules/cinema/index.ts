import { ENDPOINTS, getEndPoint } from "@/app/constants/endpoint";
import { ICinema, IRoomStatus } from "@/app/types/cinema";
import { Axios } from "@/app/utils/api";

const cinemaService = {
  getAll: async () => {
    return await Axios.axiosGet(ENDPOINTS.CINEMA_MOVIES_SHOWTIME);
  },
  getAdminCinemas: async () => {
    return await Axios.axiosGet(ENDPOINTS.CINEMA_LIST, {
      params: {
        size: 9999,
        page: 1,
      },
    });
  },
  getCinemaById: async (payload: string) => {
    return await Axios.axiosGetWithToken(
      getEndPoint(ENDPOINTS.ADMIN.CINEMA.GET_CINEMA_BY_ID, {
        cinemaId: payload,
      })
    );
  },
  postCinema: async (payload: ICinema) => {
    return await Axios.axiosPostWithToken(
      ENDPOINTS.ADMIN.CINEMA.POST_CINEMA,
      payload
    );
  },
  updateCinema: async (payload: ICinema) => {
    const patchData = {
      name: payload.name,
      address: payload.address,
      district: payload.district,
      city: payload.city,
      description: payload.description,
      phoneNumber: payload.phone_number,
      status: payload.status,
    };
    return await Axios.axiosPutWithToken(
      getEndPoint(ENDPOINTS.ADMIN.CINEMA.POST_CINEMA, {
        cinemaId: payload.id,
      }),
      patchData
    );
  },
  updateRoomStatus: async (payload: IRoomStatus) => {
    return await Axios.axiosPutWithToken(
      getEndPoint(ENDPOINTS.ADMIN.CINEMA.POST_CINEMA, {
        roomId: payload.roomId,
        statusId: payload.statusId,
      }),
      ""
    );
  },
  deleteCinema: async (payload: ICinema) => {
    return await Axios.axiosPostWithToken(
      ENDPOINTS.ADMIN.CINEMA.POST_CINEMA,
      payload
    );
  },
};

export default cinemaService;
