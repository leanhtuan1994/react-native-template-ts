import React from 'react';
import { ImageProps, Image } from 'react-native';

type Props = {
  focused: boolean;
  color: string;
};

const TabBarIcon: React.FC<Pick<ImageProps, 'source'> & Props> = ({
  color,
  ...props
}) => {
  return <Image style={{ tintColor: color }} {...props} />;
};

export default TabBarIcon;
