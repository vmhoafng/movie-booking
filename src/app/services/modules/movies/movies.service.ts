import { ENDPOINTS } from '@/app/constants/endpoint';
import { IMovieSlug, IPutMovieDetails, IgetByStatus } from '@/app/types/movie';
import { Axios } from '@/app/utils/api';
const moviesService = {
	getAll: async (payload: IgetByStatus) => {
		return await Axios.axiosGet(ENDPOINTS.MOVIE_BY_STATUS, {
			params: {
				status: payload.status || 'showing-now',
				page: payload.page || 1,
				size: payload.size || 100,
			},
		});
	},
	getMovieSlug: (payload: IMovieSlug) => {
		return Axios.axiosGet(ENDPOINTS.MOVIE_SLUG, {
			params: {
				slug: payload.slug || '',
			},
		});
	},

	putMovie: (id: string, payload: IPutMovieDetails) => {},
};

export default moviesService;
