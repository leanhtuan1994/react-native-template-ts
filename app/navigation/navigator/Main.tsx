import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import type { HomeScreenParam } from '@screens/home';
import Home from '@screens/home';

type MainParam = HomeScreenParam;

const MainStack = createNativeStackNavigator<MainParam>();

const MainScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen {...Home.screen} />
    </MainStack.Navigator>
  );
};

export default MainScreen;
