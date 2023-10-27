import { ROUTE_PARAMS } from './path';

export const ENDPOINTS = {
	MOVIE_BY_STATUS: `landing/status/movies`,
	GET_SHOWTIME_BY_CINEMA_DATE: `landing/cinema/${ROUTE_PARAMS.CINEMA_ID}/showtime`,
	CINEMA_MOVIES_SHOWTIME: '',
	SHOWTIME_BY_MOVIE: `lading/movie/${ROUTE_PARAMS.MOVIE_ID}/showtime`,
	SEARCH_MOVIE: `landing/searchMovie`,
	SHOWTIME_SEAT: `landing/showtime/${ROUTE_PARAMS.SHOWTIME_ID}/seats`,
	MOVIE_GENRES: `landing/movieGenres`,
	CINEMA_DETAILS: `landing/cinema/${ROUTE_PARAMS.CINEMA_ID}`,
	CINEMA_LIST: `landing/cinemas`,
	PROFILE: 'currentUser',
	ADMIN: {},
};

export const getEndPoint = (endpoint: string, arg: Object) => {
	let newEndpoint = '';
	Object.keys(arg).forEach((key) => {
		const regex = new RegExp('(:' + key + ')', 'g');
		//@ts-ignore
		newEndpoint = endpoint.replace(regex, arg[key]);
	});
	return newEndpoint;
};
