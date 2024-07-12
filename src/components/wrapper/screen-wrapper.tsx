import { useTheme } from '@rneui/themed';
import React from 'react';

import Box, { BoxProps } from '../box/box';

type Props = BoxProps;

export const ScreenWrapper: React.FC<Props> = ({ children, ...props }) => {
	const {
		theme: { colors },
	} = useTheme();

	return (
		<Box flex={1} backgroundColor={colors.background} {...props}>
			{children}
		</Box>
	);
};

export const ContentWrapper: React.FC<Props> = ({ children, ...props }) => {
	const {
		theme: { colors, spacing },
	} = useTheme();

	return (
		<Box flex={1} backgroundColor={colors.background} px={spacing.xl} {...props}>
			{children}
		</Box>
	);
};
