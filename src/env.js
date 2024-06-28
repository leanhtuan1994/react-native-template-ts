import Config from 'react-native-config';
import z from 'zod';

const client = z.object({
	APP_ENV: z.enum(['development', 'production']),
	APP_NAME: z.string(),
	API_URL: z.string(),
});

const clientEnv = {
	APP_ENV: Config.APP_ENV || 'production',
	APP_NAME: Config.APP_NAME || '',
	API_URL: Config.API_URL || '',
};

const Env = client.parse(clientEnv);

export { Env };
