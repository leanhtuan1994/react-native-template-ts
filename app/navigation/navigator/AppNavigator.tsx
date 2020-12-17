import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { navigatorRef } from "../utils";

import MainScreen from "./Main";

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer ref={navigatorRef}>
      <MainScreen />
    </NavigationContainer>
  );
};

export default App;
