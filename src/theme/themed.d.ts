import '@rneui/themed';

declare module '@rneui/themed' {
	export interface Colors {
		info: string;
		neutral5: string;
		neutral10: string;
		neutral20: string;
		neutral40: string;
		neutral60: string;
		neutral80: string;
		neutral100: string;
		primary50: string;
		primary100: string;
		primary200: string;
		primary300: string;
		primary400: string;
		primary500: string;
		primary600: string;
		primary700: string;
	}
	export interface ThemeSpacing {
		xxl: number;
		xxxl: number;
		xxxxl: number;
	}
	export interface Theme {
		size: ThemeSpacing;
	}
}
