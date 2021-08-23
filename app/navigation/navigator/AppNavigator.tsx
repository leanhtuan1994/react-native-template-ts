import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from 'context/AuthContext';
import RNBootSplash from 'react-native-bootsplash';

import MainScreen from './Main';

const App = () => {
  const hideSplash = React.useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <NavigationContainer onReady={hideSplash}>
      <AuthProvider>
        <MainScreen />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
