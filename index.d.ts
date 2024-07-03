/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.png' {
	const value: any;
	export = value;
}

declare module '*.svg' {
	import React from 'react';
	import { SvgProps } from 'react-native-svg';

	const content: React.FC<SvgProps>;
	export default content;
}

declare module 'react-native-config' {
	export interface NativeConfig {
		API_URL?: string;
		APP_ENV?: string;
		APP_NAME?: string;
	}

	export const Config: NativeConfig;
	export default Config;
}
