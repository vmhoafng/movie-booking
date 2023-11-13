import { ENDPOINTS } from "@/app/constants/endpoint";
import {
  ICheckPassword,
  IGetBills,
  IPutPassword,
  IPutProfile,
} from "@/app/types/profile";
import { Axios } from "@/app/utils/api";
const moviesService = {
  putProfile: (payload: IPutProfile) => {
    return Axios.axiosPutWithToken(ENDPOINTS.PROFILE.UPDATE_PROFILE, payload);
  },
  checkPassword: (payload: ICheckPassword) => {
    return Axios.axiosPutWithToken(ENDPOINTS.PROFILE.CHECKPASSWORD, "", {
      params: {
        password: payload.password,
      },
    });
  },
  putPassword: (payload: IPutPassword) => {
    return Axios.axiosPutWithToken(ENDPOINTS.PROFILE.CHANGEPASSWORD, "", {
      params: {
        oldPassword: payload.oldPassword,
        newPassword: payload.newPassword,
      },
    });
  },
  getBills: (payload: IGetBills) => {
    return Axios.axiosGetWithToken(ENDPOINTS.PROFILE.BILLS, {
      params: {
        page: payload.page || 1,
        size: payload.size || 100,
        date: payload.date,
      },
    });
  },
};

export default moviesService;
