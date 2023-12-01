import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import authUtils from '../auth';
import { type } from 'os';
import { TFile } from '@/app/components/upload/FileUploader';

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
			// case 409:
			// 	message = `Conflict`;
			// 	break;

			default: {
				message =
					error.response && error.response.data
						? error.response.data.messages[0]
						: error.message || error;
			}
		}

		return Promise.reject(message);
	}
);

export const Axios = {
	axiosGet: (
		endpoint: string,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.get(endpoint, config);
	},

	axiosGetWithToken: (
		endpoint: string,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.get(endpoint, {
			headers: {
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
			},
			...config,
		});
	},

	axiosPost: (
		endpoint: string,
		body: any,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.post(endpoint, body, config);
	},

	axiosPostWithToken: (
		endpoint: string,
		body: any,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.post(endpoint, body, {
			...config,
			headers: {
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
			},
		});
	},

	axiosPostWithFile: (
		endpoint: string,
		body: any,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		const config_payload: any = {
			headers: {
				...axios.defaults.headers,
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
				'content-type': 'multipart/form-data',
			},

			...config,
		};

		const formData = new FormData();
		for (const key in body) {
			if (Array.isArray(body[key])) {
				body[key].forEach((image: TFile) => {
					formData.append(`${key}`, image);
				});
			} else {
				formData.append(key, body[key]);
			}
		}

		return instance.post(endpoint, formData, config_payload);
	},

	axiosPut: (
		endpoint: string,
		body: any,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.put(endpoint, body, config);
	},

	axiosPutWithToken: (
		endpoint: string,
		body: any,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.put(endpoint, body, {
			...config,
			headers: {
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
			},
		});
	},

	axiosPutWithFile: (
		endpoint: string,
		body: any,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		const config_payload: any = {
			headers: {
				...axios.defaults.headers,
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
				'content-type': 'multipart/form-data',
			},
			...config,
		};

		const formData = new FormData();
		for (const key in body) {
			if (Array.isArray(body[key])) {
				body[key].forEach((image: TFile) => {
					formData.append(`${key}`, image);
				});
			} else {
				formData.append(key, body[key]);
			}
		}

		return instance.put(endpoint, formData, config_payload);
	},

	axiosDelete: (
		endpoint: string,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse> => {
		return instance.delete(endpoint, {
			...config,
			headers: {
				Authorization: 'Bearer ' + authUtils.getSessionToken(),
			},
		});
	},
};
