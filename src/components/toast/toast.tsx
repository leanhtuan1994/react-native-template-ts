/* eslint-disable react/no-unstable-nested-components */
import { makeStyles } from '@rneui/themed';
import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast, { BaseToast, ToastConfig } from 'react-native-toast-message';

import ToastErrorIcon from '@/assets/svgs/toast/toast-error.svg';
import ToastInfoIcon from '@/assets/svgs/toast/toast-info.svg';
import ToastSuccessIcon from '@/assets/svgs/toast/toast-success.svg';

const ToastProvider = () => {
	const { top } = useSafeAreaInsets();

	const styles = useStyles();

	const toastConfig: ToastConfig = useMemo(
		() => ({
			success: props => (
				<BaseToast
					{...props}
					style={[styles.toastBase, styles.success]}
					text1Style={styles.text1Style}
					text2Style={styles.text2Style}
					text1NumberOfLines={1}
					text2NumberOfLines={2}
					renderLeadingIcon={() => <ToastSuccessIcon />}
					contentContainerStyle={styles.container}
				/>
			),
			error: props => (
				<BaseToast
					{...props}
					style={[styles.toastBase, styles.error]}
					text1Style={styles.text1Style}
					text2Style={styles.text2Style}
					text1NumberOfLines={1}
					text2NumberOfLines={2}
					renderLeadingIcon={() => <ToastErrorIcon />}
					contentContainerStyle={styles.container}
				/>
			),
			info: props => (
				<BaseToast
					{...props}
					style={styles.toastBase}
					text1NumberOfLines={1}
					text2NumberOfLines={2}
					text1Style={[styles.text1Style, styles.textInfoColor]}
					text2Style={[styles.text2Style, styles.textInfoColor]}
					renderLeadingIcon={() => <ToastInfoIcon />}
					contentContainerStyle={styles.container}
				/>
			),
		}),

		[styles],
	);

	return <Toast position="top" config={toastConfig} topOffset={top + 12} />;
};

const useStyles = makeStyles(({ colors, size }) => ({
	toastBase: {
		paddingHorizontal: 12,
		gap: 12,
		alignItems: 'center',
		borderLeftWidth: 0,
	},
	container: {
		paddingHorizontal: 0,
	},
	success: {
		backgroundColor: colors.success,
	},
	error: {
		backgroundColor: colors.error,
	},
	text1Style: {
		fontSize: size.lg,
		color: colors.white,
	},
	text2Style: {
		fontSize: size.md,
		color: colors.white,
	},
	textInfoColor: {
		color: colors.neutral800,
	},
}));

export default ToastProvider;
