import { ENDPOINTS } from "@/app/constants/endpoint";
import {
  ICheckPassword,
  IGetBills,
  IPutPassword,
  IPutProfile,
} from "@/app/types/profile";
import { Axios } from "@/app/utils/api";
const profileService = {
  putProfile: (payload: IPutProfile) => {
    return Axios.axiosPutWithToken(ENDPOINTS.PROFILE.UPDATE_PROFILE, payload);
  },
  checkPassword: async (payload: ICheckPassword) => {
    return await Axios.axiosGetWithToken(ENDPOINTS.PROFILE.CHECKPASSWORD, {
      params: {
        password: payload.password,
      },
    });
  },
  putPassword: async (payload: IPutPassword) => {
    return await Axios.axiosPutWithToken(
      ENDPOINTS.PROFILE.CHANGEPASSWORD,
      payload
    );
  },
  getBills: async (payload: IGetBills) => {
    return await Axios.axiosGetWithToken(ENDPOINTS.PROFILE.BILLS, {
      params: {
        page: payload.page || 1,
        size: payload.size || 100,
        date: payload.date,
      },
    });
  },
};

export default profileService;
