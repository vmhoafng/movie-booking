import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
	baseURL:
		process.env.REACT_APP_BOOKING_MOVIE_API_URL ||
		'http://localhost:8080/api/v1/',
	withCredentials: false,
	timeout: 30000,
});

export const Axios = {
	axiosGet: (
		endpoint: string,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.get(endpoint, params);
	},

	axiosPost: (
		endpoint: string,
		body: any,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.post(endpoint, body, params);
	},
	axiosPut: (
		endpoint: string,
		body: any,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.put(endpoint, body, params);
	},
	axiosDelete: (
		endpoint: string,
		params?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.delete(endpoint, params);
	},
};
