import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "splash";

const AppStack = createStackNavigator();

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <AppStack.Screen name="SplashScreen" component={SplashScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
