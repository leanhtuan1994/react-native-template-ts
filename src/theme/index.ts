/* eslint-disable @typescript-eslint/no-shadow */
import { createTheme } from '@rneui/themed';
import { Platform, TextStyle } from 'react-native';

import colors from './colors';
import fonts from './fonts';
import size from './size';
import spacing from './spacing';

const theme = createTheme({
	lightColors: {
		primary: colors.primary[500],
		secondary: colors.secondary[500],
		background: colors.white,
		white: colors.white,
		black: colors.black,
		success: colors.success,
		warning: colors.warning,
		error: colors.error,
		info: colors.info,
		neutral50: colors.neutral[50],
		neutral100: colors.neutral[100],
		neutral200: colors.neutral[200],
		neutral300: colors.neutral[300],
		neutral400: colors.neutral[400],
		neutral500: colors.neutral[500],
		neutral600: colors.neutral[600],
		neutral700: colors.neutral[700],
		neutral800: colors.neutral[800],
		primary10: colors.primary[10],
		primary50: colors.primary[50],
		primary100: colors.primary[100],
		primary200: colors.primary[200],
		primary300: colors.primary[300],
		primary400: colors.primary[400],
		primary500: colors.primary[500],
		secondary50: colors.secondary[50],
		secondary100: colors.secondary[100],
		secondary200: colors.secondary[200],
		secondary300: colors.secondary[300],
		secondary400: colors.secondary[400],
		secondary500: colors.secondary[500],
		green: colors.green,
		green2: colors.green2,
		red: colors.red,
		red2: colors.red2,
		blue: colors.blue,
		blue2: colors.blue2,
		yellow: colors.yellow,
		yellow2: colors.yellow2,
	},
	darkColors: {
		primary: colors.primary[400],
		secondary: colors.secondary[500],
		background: colors.black,
		white: colors.black,
		black: colors.white,
		success: colors.success,
		warning: colors.warning,
		error: colors.error,
		info: colors.info,
		primary10: colors.primary[10],
		neutral50: colors.neutral[50],
		neutral100: colors.neutral[100],
		neutral200: colors.neutral[200],
		neutral300: colors.neutral[300],
		neutral400: colors.neutral[400],
		neutral500: colors.neutral[500],
		neutral600: colors.neutral[600],
		neutral700: colors.neutral[700],
		neutral800: colors.neutral[800],
		primary50: colors.primary[50],
		primary100: colors.primary[100],
		primary200: colors.primary[200],
		primary300: colors.primary[300],
		primary400: colors.primary[400],
		primary500: colors.primary[500],
		secondary50: colors.secondary[50],
		secondary100: colors.secondary[100],
		secondary200: colors.secondary[200],
		secondary300: colors.secondary[300],
		secondary400: colors.secondary[400],
		secondary500: colors.secondary[500],
		green: colors.green,
		green2: colors.green2,
		red: colors.red,
		red2: colors.red2,
		blue: colors.blue,
		blue2: colors.blue2,
		yellow: colors.yellow,
		yellow2: colors.yellow2,
	},
	spacing,
	size,
	components: {
		Text: (props, { colors, size }) => ({
			style: {
				color: colors.neutral800,
				fontSize: props.body2 ? size.md : size.lg,
				...Platform.select({
					android: {
						...(fonts.android.regular as TextStyle),
					},
					default: {
						...(fonts.default.regular as TextStyle),
					},
				}),
			},
			h1Style: {
				color: colors.neutral800,
				fontSize: size.xxxxl,
				...Platform.select({
					android: {
						...(fonts.android.bold as TextStyle),
					},
					default: {
						...(fonts.default.bold as TextStyle),
					},
				}),
			},
			h2Style: {
				color: colors.neutral800,
				fontSize: size.xxxl,
				...Platform.select({
					android: {
						...(fonts.android.bold as TextStyle),
					},
					default: {
						...(fonts.default.bold as TextStyle),
					},
				}),
			},
			h3Style: {
				color: colors.neutral800,
				fontSize: size.xxl,
				...Platform.select({
					android: {
						...(fonts.android.bold as TextStyle),
					},
					default: {
						...(fonts.default.bold as TextStyle),
					},
				}),
			},
			h4Style: {
				color: colors.neutral800,
				fontSize: size.xl,
				...Platform.select({
					android: {
						...(fonts.android.bold as TextStyle),
					},
					default: {
						...(fonts.default.bold as TextStyle),
					},
				}),
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
				...Platform.select({
					android: {
						...(fonts.android.bold as TextStyle),
					},
					default: {
						...(fonts.default.bold as TextStyle),
					},
				}),
			},
		}),
		Switch: (_, theme) => ({
			trackColor: { false: theme.colors.neutral200, true: theme.colors.primary },
		}),
	},
	mode: 'light',
});

export default theme;
