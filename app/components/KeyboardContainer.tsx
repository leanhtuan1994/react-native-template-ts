import React from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isIOS13, isIOS } from 'utils/platform';

interface Props {
  modal?: boolean;
}

const KeyboardContainer: React.FC<KeyboardAvoidingViewProps & Props> = ({
  style,
  modal,
  ...props
}) => {
  const { bottom } = useSafeAreaInsets();
  const verticalOffset = isIOS
    ? 8 + (modal && isIOS13 ? (bottom || 16) + 16 : 0)
    : 4;
  return (
    <KeyboardAvoidingView
      style={StyleSheet.compose(
        { flex: 1, marginBottom: isIOS ? bottom : 0 },
        style,
      )}
      behavior="padding"
      keyboardVerticalOffset={verticalOffset}
      {...props}
    />
  );
};

export default KeyboardContainer;
