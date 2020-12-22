import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "context/AuthContext";

import { navigatorRef } from "../utils";

import MainScreen from "./Main";

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer ref={navigatorRef}>
      <AuthProvider>
        <MainScreen />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
