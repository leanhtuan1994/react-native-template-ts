import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Colors } from "styles";
import Splash from "screens/splash";
import Finger from "screens/finger";
import Home from "screens/home";

const MainStack = createNativeStackNavigator();

const MainScreen = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    //* async init module here
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: { backgroundColor: Colors.White },
        headerShown: false,
      }}>
      {loading && <MainStack.Screen {...Splash.screen} />}
      <MainStack.Screen {...Finger.screen} />
      <MainStack.Screen {...Home.screen} />
    </MainStack.Navigator>
  );
};

export default MainScreen;
