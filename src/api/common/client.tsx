import { Env } from '@env';
import { create } from 'axios';

export const client = create({
  baseURL: Env.API_URL,
});
