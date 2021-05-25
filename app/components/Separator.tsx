import { Colors } from 'app/styles';
import React from 'react';
import { View, ViewProps } from 'react-native';

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
