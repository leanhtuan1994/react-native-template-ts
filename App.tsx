import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from 'navigation/navigator/AppNavigator';
import 'translations/initi18next';
import AppTheme, { Colors } from 'styles';

//* required to improvement native screens
enableScreens();

//* check init intl
if (!global.Intl) {
  require('intl');
  require('intl/locale-data/jsonp/vi-VN.js');
}

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={Colors.White}
      />
      <AppTheme>
        <AppNavigator />
      </AppTheme>
    </SafeAreaProvider>
  );
};

export default App;
