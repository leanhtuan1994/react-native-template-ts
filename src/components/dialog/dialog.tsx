import { Button, makeStyles, Text, useTheme } from '@rneui/themed';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import RNModal, { ModalProps } from 'react-native-modal';

import { Box } from '../box';

type Props = Partial<ModalProps> & {
	title?: string;
	description?: string;
	closeLabel?: string;
	confirmLabel?: string;
	isRequired?: boolean | undefined;
	onClosed?: () => void;
	onConfirm?: () => void;
};

const Dialog: React.FC<Props> = ({
	isVisible,
	children,
	title,
	description,
	closeLabel,
	confirmLabel,
	isRequired = false,
	style,
	onClosed,
	onConfirm,
	...props
}) => {
	const {
		theme: { colors, spacing },
	} = useTheme();

	const styles = useStyles();

	const { t } = useTranslation();

	const onBackdropPress = useCallback(() => {
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
			<Box
				backgroundColor={colors.background}
				borderRadius={spacing.xl}
				alignItems="center"
				p={spacing.xl}
			>
				<Text h4>{title ?? t('notificationTitle', { defaultValue: 'Notification' })}</Text>
				<Box height={24} />
				{!!description && <Text>{description}</Text>}
				{children}
				<Box flexDirection="row" justifyContent="space-between" mt={40}>
					{!isRequired && (
						<>
							<Button
								containerStyle={styles.flex}
								title={closeLabel ?? t('close', { defaultValue: 'Close' })}
								buttonStyle={styles.closeButton}
								titleStyle={styles.closeTitle}
								onPress={onClosed}
							/>
							<Box width={8} />
						</>
					)}
					<Button
						containerStyle={styles.flex}
						title={confirmLabel ?? t('confirm', { defaultValue: 'Confirm' })}
						onPress={onConfirm}
					/>
				</Box>
			</Box>
		</RNModal>
	);
};

const useStyles = makeStyles(({ colors, spacing }) => ({
	modal: {
		margin: spacing.xl,
	},
	flex: {
		flex: 1,
	},
	closeButton: {
		backgroundColor: colors.primary100,
	},
	closeTitle: {
		color: colors.primary,
	},
	xButton: {
		position: 'absolute',
		top: 16,
		right: 16,
	},
}));

export default Dialog;
