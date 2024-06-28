import { makeStyles } from '@rneui/themed';

const useGlobalStyles = makeStyles(theme => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	content: {
		paddingHorizontal: theme.spacing.lg,
	},
	icon: {
		width: 24,
		height: 24,
	},
}));

export default useGlobalStyles;
