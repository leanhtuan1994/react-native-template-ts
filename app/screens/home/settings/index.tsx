import { registerScreen, ScreenComponent } from 'navigation/utils';
import React from 'react';
import { View } from 'react-native';
import { GlobalStyles } from 'styles';

const Name = 'Settings';

export type SettingsParam = {
  [Name]: Record<string, unknown>;
};

const Basket: ScreenComponent<SettingsParam, 'Settings'> = () => {
  return <View style={GlobalStyles.container()} />;
};

export default registerScreen<SettingsParam, 'Settings'>('Settings', Basket);
