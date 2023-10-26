import { ENDPOINTS } from '@/app/constants/endpoint';
import { Axios } from '@/app/utils/api';

const cinemaService = {
	getAll: async () => {
		return await Axios.axiosGet(ENDPOINTS.CINEMA_LIST, {
			params: {
				size: 10,
				page: 1,
			},
		});
	},
};

export default cinemaService;
