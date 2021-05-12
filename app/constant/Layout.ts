import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const isSmallDevice = width < 375;

const screen = {
  width,
  height,
};

export { screen, isSmallDevice };
