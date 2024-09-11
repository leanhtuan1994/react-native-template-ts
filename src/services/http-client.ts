/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { Env } from '@/env';

const httpClient: AxiosInstance = axios.create({
	baseURL: Env.API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Request interceptor to add the access token to headers
// httpClient.interceptors.request.use(
// 	config => {
// 		if (config.headers && !config.headers.Authorization) {
// 			const token = getAccessToken();
// 			config.headers.Authorization = `Bearer ${token ?? ''}`;
// 		}
// 		return config;
// 	},
// 	(error: AxiosError) => {
// 		return Promise.reject(error);
// 	},
// );

// Response interceptor to handle responses globally if needed
httpClient.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

export default httpClient;
