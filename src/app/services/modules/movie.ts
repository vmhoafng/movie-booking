/* eslint-disable import/no-anonymous-default-export */

import { ENDPOINTS } from '@/app/constants/endpoint';
import { IMovieByStatusList } from '@/app/types/movie';
import { Axios } from '@/app/utils/api';
import { AxiosResponse } from 'axios';

export default {
	getMoviesByStatus: async (
		status: string
	): Promise<AxiosResponse<IMovieByStatusList>> => {
		return await Axios.axiosGet(ENDPOINTS.MOVIE_BY_STATUS, {
			params: {
				status: status || 'showing-now',
				page: 1,
				size: 10,
			},
		});
	},
};
