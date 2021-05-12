import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Colors } from 'styles';
import Home, { HomeParam } from 'screens/home';

type MainParam = HomeParam;

const MainStack = createNativeStackNavigator<MainParam>();

const MainScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: { backgroundColor: Colors.White },
        headerShown: false,
      }}>
      <MainStack.Screen {...Home.screen} />
    </MainStack.Navigator>
  );
};

export default MainScreen;
