import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Colors} from "styles";
import Splash, {SplashParam} from "modules/splash";
import Home, {HomeParam} from "modules/home";

type MainParam = SplashParam & HomeParam;

const MainStack = createNativeStackNavigator<MainParam>();

const MainScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: {backgroundColor: Colors.White},
        headerShown: false,
      }}>
      <MainStack.Screen {...Splash.screen} />
      <MainStack.Screen {...Home.screen} />
    </MainStack.Navigator>
  );
};

export default MainScreen;
