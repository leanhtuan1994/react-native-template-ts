import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from '@screens/home';

const MainStack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen component={Home} name="Home" />
    </MainStack.Navigator>
  );
};

export default MainScreen;
