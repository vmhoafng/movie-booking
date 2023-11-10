import { ENDPOINTS } from "@/app/constants/endpoint";
import { Axios } from "@/app/utils/api";
const dashboardService = {
   getDashboardData: async (payload: string) => {
      return await Axios.axiosGetWithToken(ENDPOINTS.ADMIN.DASHBOARD.ALL, {
         params: {
            date: payload,
         },
      });
   },
};

export default dashboardService;
