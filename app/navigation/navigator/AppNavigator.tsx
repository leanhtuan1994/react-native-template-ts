import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "context/AuthContext";
import { FirebaseProvider } from "context/FirebaseContext";
import { FCMProvider } from "context/FCMContext";

import { navigatorRef } from "../utils";

import MainScreen from "./Main";

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer ref={navigatorRef}>
      <FirebaseProvider>
        <FCMProvider>
          <AuthProvider>
            <MainScreen />
          </AuthProvider>
        </FCMProvider>
      </FirebaseProvider>
    </NavigationContainer>
  );
};

export default App;
