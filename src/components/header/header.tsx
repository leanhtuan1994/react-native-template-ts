// eslint-disable-next-line simple-import-sort/imports
import { StackActions, useNavigation } from '@react-navigation/native';
import type { HeaderProps } from '@rneui/themed';
import { Icon, makeStyles, Header as RNEHeader, useTheme } from '@rneui/themed';
import React, { useEffect } from 'react';
import { BackHandler, Pressable, StyleProp, TextStyle } from 'react-native';

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
		fontSize: size.xl,
		fontWeight: '500',
		color: colors.neutral800,
	},
	container: {
		borderBottomWidth: 0,
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
				type === 'none' ? (
					(title && { text: title, style: titleStyle ?? styles.titleStyle }) || undefined
				) : (
					<Pressable onPress={onPress} hitSlop={8}>
						<Icon name={type === 'stack' ? 'arrow-left' : 'x'} type="feather" size={24} />
					</Pressable>
				)
			}
			centerComponent={
				type !== 'none' && title
					? {
							text: title,
							style: titleStyle ?? styles.titleStyle,
					  }
					: undefined
			}
			containerStyle={styles.container}
			{...props}
		/>
	);
};

export default Header;
