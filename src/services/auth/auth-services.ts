import BaseApi from '../base-api';
import httpClient from '../http-client';

class AuthServices extends BaseApi {
	constructor() {
		super(httpClient);
	}
}

const authServices = new AuthServices();

export default authServices;
