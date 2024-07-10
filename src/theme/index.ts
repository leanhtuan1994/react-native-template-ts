/* eslint-disable @typescript-eslint/no-shadow */
import { createTheme } from '@rneui/themed';

import colors from './colors';

const font = 'SVN-Circular-Regular';
const fontBold = 'SVN-Circular-Bold';

const theme = createTheme({
	lightColors: {
		primary: colors.primary[500],
		secondary: colors.secondary,
		background: colors.white,
		white: colors.white,
		black: colors.black,
		success: colors.success,
		warning: colors.warning,
		error: colors.error,
		info: colors.info,
		neutral5: colors.neutral[5],
		neutral10: colors.neutral[10],
		neutral20: colors.neutral[20],
		neutral40: colors.neutral[40],
		neutral60: colors.neutral[60],
		neutral80: colors.neutral[80],
		neutral100: colors.neutral[100],
		primary50: colors.primary[50],
		primary100: colors.primary[100],
		primary200: colors.primary[200],
		primary300: colors.primary[300],
		primary400: colors.primary[400],
		primary500: colors.primary[500],
		primary600: colors.primary[600],
		primary700: colors.primary[700],
	},
	darkColors: {
		primary: colors.primary[400],
		secondary: colors.secondary,
		background: colors.black,
		white: colors.black,
		black: colors.white,
		success: colors.success,
		warning: colors.warning,
		error: colors.error,
		info: colors.info,
		neutral5: colors.neutral[5],
		neutral10: colors.neutral[10],
		neutral20: colors.neutral[20],
		neutral40: colors.neutral[40],
		neutral60: colors.neutral[60],
		neutral80: colors.neutral[80],
		neutral100: colors.neutral[100],
		primary100: colors.primary[100],
		primary200: colors.primary[200],
		primary300: colors.primary[300],
		primary400: colors.primary[400],
		primary500: colors.primary[500],
		primary600: colors.primary[600],
		primary700: colors.primary[700],
	},
	spacing: {
		xs: 2,
		sm: 4,
		md: 8,
		lg: 12,
		xl: 16,
		xxl: 20,
		xxxl: 24,
		xxxxl: 32,
	},
	size: {
		xs: 10,
		sm: 12,
		md: 14,
		lg: 16,
		xl: 18,
		xxl: 20,
		xxxl: 24,
		xxxxl: 32,
	},
	components: {
		Text: (_, theme) => ({
			style: {
				color: theme.colors.black,
				fontFamily: font,
				fontSize: theme.size.lg,
			},
			h1Style: {
				color: theme.colors.black,
				fontFamily: fontBold,
				fontSize: theme.size.xxxxl,
				fontWeight: 'bold',
			},
			h2Style: {
				color: theme.colors.black,
				fontFamily: fontBold,
				fontSize: theme.size.xxxl,
				fontWeight: 'bold',
			},
			h3Style: {
				color: theme.colors.black,
				fontFamily: fontBold,
				fontSize: theme.size.xxl,
				fontWeight: 'bold',
			},
			h4Style: {
				color: theme.colors.black,
				fontFamily: fontBold,
				fontSize: theme.size.xl,
				fontWeight: 'bold',
			},
		}),
		Button: (_, theme) => ({
			raised: false,
			radius: theme.spacing.md,
			buttonStyle: {
				paddingVertical: theme.spacing.lg,
			},
			titleStyle: {
				color: theme.colors.white,
				fontSize: theme.size.lg,
				fontWeight: 'bold',
				fontFamily: fontBold,
			},
		}),
	},
	mode: 'light',
});

export default theme;
