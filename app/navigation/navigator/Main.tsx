import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { HomeScreenParam } from '@screens/home';
import Home from '@screens/home';

export type MainParam = HomeScreenParam;

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
