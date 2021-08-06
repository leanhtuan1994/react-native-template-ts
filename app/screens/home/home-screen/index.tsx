import React from 'react';
import { View } from 'react-native';
import { registerScreen, ScreenComponent } from 'navigation/utils';
import { GlobalStyles } from 'styles';

const Name = 'HomeScreen';

export type CoopHomeParam = {
  [Name]: Record<string, unknown>;
};

const HomeScreen: ScreenComponent<CoopHomeParam, 'HomeScreen'> = () => {
  return (
    <View
      style={GlobalStyles.container({
        alignItems: 'center',
        justifyContent: 'center',
      })}
    />
  );
};

export default registerScreen<CoopHomeParam, 'HomeScreen'>(
  'HomeScreen',
  HomeScreen,
);
