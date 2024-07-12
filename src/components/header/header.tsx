import { StackActions, useNavigation } from '@react-navigation/native';
import type { HeaderProps } from '@rneui/themed';
import { Header as RNEHeader, makeStyles, useTheme } from '@rneui/themed';
import React, { useEffect } from 'react';
import { BackHandler, StyleProp, TextStyle } from 'react-native';

type Props = HeaderProps & {
	type?: 'modal' | 'stack' | 'none';
	title?: string;
	titleStyle?: StyleProp<TextStyle> | undefined;
	backToTop?: boolean;
	onGoBack?: () => void;
	goBack?: () => void;
};

const useStyles = makeStyles(({ colors, size }) => ({
	titleStyle: {
		fontSize: size.xxl,
		fontWeight: '700',
		color: colors.neutral100,
	},
}));

const Header: React.FC<Props> = ({
	type = 'stack',
	title,
	titleStyle,
	backToTop,
	onGoBack,
	goBack,
	edges = ['top'],
	...props
}) => {
	const navigation = useNavigation();

	useEffect(() => {
		const backAction = () => {
			if (backToTop) {
				navigation.dispatch(StackActions.popToTop());
				return true;
			}

			if (goBack) {
				goBack();
				return true;
			}

			if (navigation.canGoBack()) {
				if (onGoBack) {
					onGoBack();
				}
				navigation.goBack();
			}
			return true;
		};

		const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
		return () => backHandler.remove();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const {
		theme: { colors },
	} = useTheme();

	const styles = useStyles();

	const onPress = React.useCallback(() => {
		if (backToTop) {
			navigation.dispatch(StackActions.popToTop());
		}

		if (goBack) {
			goBack();
		} else if (navigation.canGoBack()) {
			if (onGoBack) {
				onGoBack();
			}
			navigation.goBack();
		}
	}, [backToTop, goBack, navigation, onGoBack]);

	return (
		<RNEHeader
			edges={edges}
			backgroundColor={colors.white}
			leftComponent={
				type === 'none'
					? (title && { text: title, style: titleStyle ?? styles.titleStyle }) || undefined
					: {
							type: 'feather',
							icon: type === 'stack' ? 'arrow-left' : 'x',
							size: 24,
							onPress,
					  }
			}
			centerComponent={
				type !== 'none' && title
					? {
							text: title,
							style: titleStyle ?? styles.titleStyle,
					  }
					: undefined
			}
			{...props}
		/>
	);
};

export default Header;
