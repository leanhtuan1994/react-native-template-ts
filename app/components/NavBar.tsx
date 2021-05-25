import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, HeaderProps } from 'react-native-elements';
import { Colors, FontSize, FontWeight, GlobalStyles } from 'styles';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useBackHandler } from '@react-native-community/hooks';
import { isIOS13 } from 'utils/platform';

type Props = {
  type?: 'modal' | 'stack' | 'none';
  title?: string;
  backToTop?: boolean;
  onGoBack?: () => void;
};

const titleStyle = GlobalStyles.font({
  fontSize: FontSize.Header,
  fontWeight: FontWeight.SemiBold,
  color: Colors.Black,
});

const NavBar: React.FC<HeaderProps & Props> = ({
  type = 'stack',
  title,
  backToTop,
  containerStyle,
  onGoBack,
  ...props
}) => {
  const navigation = useNavigation();

  const isSpecialHeader = isIOS13 && type === 'modal';

  const popToTop = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  useBackHandler(() => {
    if (navigation.canGoBack()) {
      if (backToTop) {
        popToTop();
        return true;
      }
      onGoBack && onGoBack();
      navigation.goBack();
    }
    return true;
  });

  return (
    <Header
      statusBarProps={
        isSpecialHeader
          ? { barStyle: 'light-content' }
          : {
              barStyle: 'dark-content',
              translucent: true,
              backgroundColor: Colors.White,
              networkActivityIndicatorVisible: true,
            }
      }
      containerStyle={StyleSheet.flatten([
        isSpecialHeader
          ? {
              paddingTop: 0,
              height: 64,
            }
          : {},
        containerStyle,
      ])}
      leftComponent={
        type === 'none'
          ? (title && { text: title, style: titleStyle }) || undefined
          : {
              type: 'feather',
              icon: type === 'stack' ? 'chevron-left' : 'x',
              onPress: () => {
                if (navigation.canGoBack()) {
                  if (backToTop) {
                    popToTop();
                  }
                  onGoBack && onGoBack();
                  navigation.goBack();
                }
              },
              size: 24,
              hitSlop: { top: 6, bottom: 6, left: 6, right: 6 },
            }
      }
      centerComponent={
        type !== 'none' && title
          ? { text: title, style: titleStyle }
          : undefined
      }
      {...props}
    />
  );
};

export default NavBar;
