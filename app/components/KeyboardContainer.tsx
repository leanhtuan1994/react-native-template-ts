import React from 'react';
import type { KeyboardAvoidingViewProps } from 'react-native';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isIOS } from '@utils/platform';

interface Props {
  modal?: boolean;
}

const KeyboardContainer: React.FC<KeyboardAvoidingViewProps & Props> = ({
  style,
  ...props
}) => {
  const { bottom } = useSafeAreaInsets();
  const verticalOffset = isIOS ? 8 : 4;
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
