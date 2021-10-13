import React from 'react';
import { View } from 'react-native';
import type { ScreenComponent } from '@navigation/utils';
import { registerScreen } from '@navigation/utils';

const Name = 'HomeScreen';

export type HomeScreenParam = {
  [Name]: Record<string, unknown>;
};

const HomeScreen: ScreenComponent<HomeScreenParam, 'HomeScreen'> = () => {
  return <View />;
};

export default registerScreen<HomeScreenParam, 'HomeScreen'>(
  'HomeScreen',
  HomeScreen,
);
