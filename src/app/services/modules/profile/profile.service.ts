import { ENDPOINTS } from "@/app/constants/endpoint";
import { ICheckPassword, IPutPassword, IPutProfile } from "@/app/types/profile";
import { Axios } from "@/app/utils/api";
const moviesService = {
  putProfile: (payload: IPutProfile) => {
    return Axios.axiosPutWithToken(ENDPOINTS.PROFILE.UPDATE_PROFILE, payload);
  },
  checkPassword: (payload: ICheckPassword) => {
    return Axios.axiosPutWithToken(ENDPOINTS.PROFILE.CHECKPASSWORD, payload);
  },
  putPassword: (payload: IPutPassword) => {
    return Axios.axiosPutWithToken(ENDPOINTS.PROFILE.CHANGEPASSWORD, payload);
  },
};

export default moviesService;
