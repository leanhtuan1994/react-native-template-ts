import { Text } from '@rneui/themed';
import { isNotEmpty, isNotNil } from 'ramda';
import React from 'react';
import { Image } from 'react-native';

import EmptyImg from '@/assets/images/empty.png';

import { Box } from '../box';
import { BoxProps } from '../box/box';

type Props = BoxProps & {
	content?: string;
};

const EmptyView: React.FC<Props> = ({ content, ...props }) => {
	return (
		<Box flex={1} justifyContent="center" alignItems="center" pt={60} {...props}>
			<Image source={EmptyImg} />
			{isNotNil(content) && isNotEmpty(content) && (
				<>
					<Box height={24} />
					<Text body2>{content}</Text>
				</>
			)}
		</Box>
	);
};

export default EmptyView;
