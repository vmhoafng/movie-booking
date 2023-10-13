export const ROUTE_PARAMS = {
	MOVIE_ID: ':movieId',
};

export const PATHS = {
	HOME: {
		IDENTITY: '',
	},
	LOGIN: {
		IDENTITY: 'login',
	},
	REGISTER: {
		IDENTITY: 'register',
	},

	AUTH: {
		IDENTITY: 'auth',
	},

	MOVIES: {
		IDENTITY: 'movies',
		LIST: '',
		DETAIL: `${ROUTE_PARAMS.MOVIE_ID}`,
	},
	CINEMA: {
		IDENTITY: 'cinemas',
		LIST: '',
	},
	PROFILE: {
		IDENTITY: 'profile',
		DETAIL: '',
		EXCHANGE: 'lich-su-giao-dich',
	},
	PAYMENT: {
		IDENTITY: 'payment',
		DETAIL: '',
	},
	TICKETS: {
		IDENTITY: 'ticket',
		DETAIL: '',
	},
};
