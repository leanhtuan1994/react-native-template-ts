import React from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';
import { Colors } from '@app/styles';

type Props = {
  size?: number;
  vertical?: boolean;
  color?: string;
};

const Separator: React.FC<ViewProps & Props> = ({
  style,
  size = 1,
  vertical,
  color = Colors.SeparatorColor,
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={[
        { backgroundColor: color },
        vertical
          ? { width: size, height: '100%' }
          : { height: size, width: '100%' },
        style,
      ]}
    />
  );
};

export default Separator;
