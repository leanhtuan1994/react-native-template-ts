import ky from 'ky';

import { Env } from '@/env';

export const instance = ky.extend({
	prefixUrl: Env.API_URL,
	headers: {
		Accept: 'application/json',
	},
});
