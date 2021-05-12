import { registerScreen, ScreenComponent } from 'navigation/utils';
import React from 'react';
import { View } from 'react-native';
import { GlobalStyles } from 'styles';

const DiscoverName = 'Discover';

export type DiscoverParam = {
  [DiscoverName]: Record<string, unknown>;
};

const Discover: ScreenComponent<DiscoverParam, 'Discover'> = () => {
  return <View style={GlobalStyles.container()} />;
};

export default registerScreen<DiscoverParam, 'Discover'>('Discover', Discover);
