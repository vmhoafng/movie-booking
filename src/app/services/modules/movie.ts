/* eslint-disable import/no-anonymous-default-export */

import { ENDPOINTS } from '@/app/constants/endpoint';
import { IGetListParams } from '@/app/types/common/api';
import { IMovieByStatusList } from '@/app/types/movie';
import { Axios } from '@/app/utils/api';
import { AxiosResponse } from 'axios';

export default {
	getMoviesByStatus: async (
		status: string,
		params?: IGetListParams
	): Promise<AxiosResponse<IMovieByStatusList>> => {
		return await Axios.axiosGet(ENDPOINTS.MOVIE_BY_STATUS, {
			params: {
				status: status || 'showing-now',
				size: params?.size || 10,
				page: params?.page || 1,
			},
		});
	},
};
