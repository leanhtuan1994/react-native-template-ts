import React from 'react';
import { View } from 'react-native';
import { registerScreen, ScreenComponent } from 'navigation/utils';
import { GlobalStyles } from 'styles';

const Name = 'CoopHome';

export type CoopHomeParam = {
  [Name]: Record<string, unknown>;
};

const CoopHome: ScreenComponent<CoopHomeParam, 'CoopHome'> = () => {
  return <View style={GlobalStyles.container()} />;
};

export default registerScreen<CoopHomeParam, 'CoopHome'>('CoopHome', CoopHome);
