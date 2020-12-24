import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Colors } from "styles";
import Splash from "screens/splash";

const MainStack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: { backgroundColor: Colors.White },
        headerShown: false,
      }}>
      <MainStack.Screen {...Splash.screen} />
    </MainStack.Navigator>
  );
};

export default MainScreen;
