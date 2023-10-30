import { ENDPOINTS } from '@/app/constants/endpoint';
import { Axios } from '@/app/utils/api';

const cinemaService = {
	getAll: async () => {
		return await Axios.axiosGet(ENDPOINTS.CINEMA_MOVIES_SHOWTIME);
	},
};

export default cinemaService;
