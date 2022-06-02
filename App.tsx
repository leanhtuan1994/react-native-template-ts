import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from '@navigation/navigator/AppNavigator';
import '@translations/initi18next';
import AppTheme, { Colors } from '@styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
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
  </GestureHandlerRootView>
);

export default App;
