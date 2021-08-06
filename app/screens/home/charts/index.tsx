import { registerScreen, ScreenComponent } from 'navigation/utils';
import React from 'react';
import { View } from 'react-native';
import { GlobalStyles } from 'styles';

const ChartsName = 'Charts';

export type ChartsParam = {
  [ChartsName]: Record<string, unknown>;
};

const Charts: ScreenComponent<ChartsParam, 'Charts'> = () => {
  return (
    <View
      style={GlobalStyles.container({
        justifyContent: 'center',
        alignItems: 'center',
      })}
    />
  );
};

export default registerScreen<ChartsParam, 'Charts'>('Charts', Charts);
