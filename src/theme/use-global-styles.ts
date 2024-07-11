import { makeStyles } from '@rneui/themed';

const useGlobalStyles = makeStyles(({ colors, spacing }) => ({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	content: {
		paddingHorizontal: spacing.lg,
	},
	flex: {
		flex: 1,
	},
	icon: {
		width: 24,
		height: 24,
	},
}));

export default useGlobalStyles;
