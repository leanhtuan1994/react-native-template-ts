import React from "react";
import { StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";
import RNSplashScreen from "react-native-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "navigation/navigator/AppNavigator";
import "translations/initi18next";
import AppTheme, { Colors } from "styles";
import * as Sentry from "@sentry/react-native";
import {
  getBuildNumber,
  getBundleId,
  getVersion,
} from "react-native-device-info";
import Config from "react-native-config";

//* required to improvement native screens
enableScreens();

//* Init Sentry
if (!__DEV__) {
  Sentry.init({
    dsn: Config.DNS,
    release: `${getBundleId()}:${getVersion()}:${getBuildNumber()}`,
    dist: getBuildNumber(),
  });
}

//* check init intl
if (!global.Intl) {
  require("intl");
  require("intl/locale-data/jsonp/vi-VN.js");
}

const App = () => {
  React.useEffect(() => {
    RNSplashScreen.hide();
  }, []);

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
