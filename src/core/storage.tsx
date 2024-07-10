/* eslint-disable @typescript-eslint/no-unsafe-return */
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export function getItem<T>(key: string): T {
	const value = storage.getString(key);
	return value ? JSON.parse(value) || null : null;
}

export function setItem<T>(key: string, value: T) {
	storage.set(key, JSON.stringify(value));
}

export function removeItem(key: string) {
	storage.delete(key);
}
