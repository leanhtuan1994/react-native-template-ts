import {
  GlobalStyles,
  Colors,
  FontWeight,
  getSuperScriptFontSize,
  getSuperScriptLineHeight,
  FontSize,
} from 'app/styles';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Text, TextProps } from 'react-native-elements';

type Props = {
  superscriptText?: string;
  superscriptColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const SuperScript: React.FC<TextProps & Props> = ({
  containerStyle,
  children,
  superscriptText = 'đ',
  style = GlobalStyles.font({
    color: Colors.Black,
    fontWeight: FontWeight.SemiBold,
  }),
  superscriptColor,
  ...props
}) => (
  <View style={StyleSheet.compose(containerStyle, { flexDirection: 'row' })}>
    <Text {...props} style={style}>
      {children}
    </Text>
    <Text
      style={StyleSheet.compose(style, {
        fontSize: getSuperScriptFontSize(
          (style as TextStyle)?.fontSize || FontSize.Regular,
        ),
        lineHeight: getSuperScriptLineHeight(
          (style as TextStyle)?.fontSize || FontSize.Regular,
        ),
        textDecorationLine: 'underline',
        color: superscriptColor || (style as TextStyle)?.color || Colors.Black,
      })}>
      {superscriptText}
    </Text>
  </View>
);

export default SuperScript;
