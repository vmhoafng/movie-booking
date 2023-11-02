import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import authUtils from '../auth';

const instance: AxiosInstance = axios.create({
	baseURL:
		process.env.REACT_APP_BOOKING_MOVIE_API_URL ||
		'http://localhost:8080/api/v1/',
	withCredentials: false,
	timeout: 30000,
});

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: any) => {
		let message: string;

		switch (error.response!.status) {
			case 401:
				message = 'Invalid credentials';
				break;
			case 403:
				message = 'Access forbidden';
				break;
			case 404:
				message = `Something bad happened :'(`;
				break;

			default: {
				message =
					error.response && error.response.data
						? error.response.data.message
						: error.message || error;
			}
		}
		return Promise.reject(message);
	}
);

export const Axios = {
	axiosGet: (
		endpoint: string,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.get(endpoint, params);
	},

	axiosGetWithToken: (
		endpoint: string,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.get(endpoint, {
			headers: {
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
			},

			...params,
		});
	},

	axiosPost: (
		endpoint: string,
		body: any,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.post(endpoint, body, params);
	},

	axiosPostWithToken: (
		endpoint: string,
		body: any,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.post(endpoint, body, {
			headers: {
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
			},
			...params,
		});
	},

	axiosPut: (
		endpoint: string,
		body: any,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.put(endpoint, body, params);
	},

	axiosPutWithToken: (
		endpoint: string,
		body: any,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.put(endpoint, body, {
			headers: {
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
			},
			...params,
		});
	},

	axiosDelete: (
		endpoint: string,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.delete(endpoint, {
			...params,
			headers: {
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
			},
		});
	},
};
