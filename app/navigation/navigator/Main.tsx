import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Colors } from "styles";
import Home from "screens/home";
import Splash from "screens/splash";

const MainStack = createNativeStackNavigator();

const MainScreen = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    //* async init module here
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: { backgroundColor: Colors.White },
        headerShown: false,
      }}>
      {loading && <MainStack.Screen {...Splash.screen} />}
      <MainStack.Screen {...Home.screen} />
    </MainStack.Navigator>
  );
};

export default MainScreen;
