import { AxiosInstance, AxiosResponse } from 'axios';

class BaseApi {
	protected httpClient: AxiosInstance;

	constructor(httpClient: AxiosInstance) {
		this.httpClient = httpClient;
	}

	protected async get<T>(url: string, params?: object): Promise<T> {
		const response: AxiosResponse<T> = await this.httpClient.get(url, { params });
		return response.data;
	}

	protected async post<T>(
		url: string,
		data: object,
		params?: {
			[param: string]: string | string[];
		},
		headers?: {
			[header: string]: string;
		},
	): Promise<T> {
		const response: AxiosResponse<T> = await this.httpClient.post(url, data, { params, headers });
		return response.data;
	}

	protected async delete<T>(url: string, params?: object): Promise<T> {
		const response: AxiosResponse<T> = await this.httpClient.delete(url, { params });
		return response.data;
	}

	protected async put<T>(
		url: string,
		data: object,
		params?: {
			[param: string]: string | string[];
		},
		headers?: {
			[header: string]: string;
		},
	): Promise<T> {
		const response: AxiosResponse<T> = await this.httpClient.put(url, data, { params, headers });
		return response.data;
	}

	protected async patch<T>(url: string, data: object): Promise<T> {
		const response: AxiosResponse<T> = await this.httpClient.patch(url, data);
		return response.data;
	}
}

export default BaseApi;
