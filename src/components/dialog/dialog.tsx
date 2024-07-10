import { makeStyles, useTheme } from '@rneui/themed';
import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import RNModal, { ModalProps } from 'react-native-modal';

import { Box } from '../box';

const useStyles = makeStyles(theme => ({
	modal: {
		margin: theme.spacing.lg, // 16,
	},
}));

type Props = Partial<ModalProps> & {
	isRequired?: boolean | undefined;
	onClosed?: () => void;
};

const Dialog: React.FC<Props> = ({
	isVisible,
	children,
	isRequired = false,
	style,
	onClosed,
	...props
}) => {
	const {
		theme: { colors, spacing },
	} = useTheme();

	const styles = useStyles();

	const { height } = useWindowDimensions();

	const minHeight = useMemo(() => {
		return height / 3;
	}, [height]);

	const onBackdropPress = React.useCallback(() => {
		if (!isRequired && !!onClosed) {
			onClosed();
		}
	}, [isRequired, onClosed]);

	return (
		<RNModal
			{...props}
			animationIn="fadeIn"
			animationOut="fadeOut"
			isVisible={isVisible}
			onBackdropPress={onBackdropPress}
			style={[styles.modal, style]}
		>
			<Box backgroundColor={colors.background} borderRadius={spacing.xl} minHeight={minHeight}>
				{children}
			</Box>
		</RNModal>
	);
};

export default Dialog;
