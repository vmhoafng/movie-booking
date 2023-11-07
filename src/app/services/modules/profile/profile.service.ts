import { ENDPOINTS } from "@/app/constants/endpoint";
import { IPutProfilePayload } from "@/app/types/auth";
import { Axios } from "@/app/utils/api";
const moviesService = {
  putProfile: (payload: IPutProfilePayload) => {
    return Axios.axiosPutWithToken(ENDPOINTS.PROFILE.UPDATE_PROFILE, payload);
  },
};

export default moviesService;
