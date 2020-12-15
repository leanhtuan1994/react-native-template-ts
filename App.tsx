import "react-native-gesture-handler";
import React from "react";
import {screensEnabled} from "react-native-screens";
import {SafeAreaProvider} from "react-native-safe-area-context";
import AppNavigator from "navigation/navigator/AppNavigator";
import "translations/initi18next";
import AppTheme from "styles";

screensEnabled();

const App = () => {
  return (
    <SafeAreaProvider>
      <AppTheme>
        <AppNavigator />
      </AppTheme>
    </SafeAreaProvider>
  );
};

export default App;
