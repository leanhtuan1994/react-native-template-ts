import '@rneui/themed';

declare module '@rneui/themed' {
	export interface Colors {
		info: string;
		neutral50: string;
		neutral100: string;
		neutral200: string;
		neutral300: string;
		neutral400: string;
		neutral500: string;
		neutral600: string;
		neutral700: string;
		neutral800: string;
		primary10: string;
		primary50: string;
		primary100: string;
		primary200: string;
		primary300: string;
		primary400: string;
		primary500: string;
		secondary50: string;
		secondary100: string;
		secondary200: string;
		secondary300: string;
		secondary400: string;
		secondary500: string;
		green: string;
		green2: string;
		red: string;
		red2: string;
		blue: string;
		blue2: string;
		yellow: string;
		yellow2: string;
	}
	export interface ThemeSpacing {
		xxl: number;
		xxxl: number;
		xxxxl: number;
	}
	export interface Theme {
		size: ThemeSpacing;
	}

	export interface TextProps {
		body2?: boolean;
	}

	export interface ComponentTheme {
		Text: Partial<TextProps>;
	}
}
