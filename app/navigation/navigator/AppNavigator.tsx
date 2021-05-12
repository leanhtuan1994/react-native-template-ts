import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from 'context/AuthContext';
import RNBootSplash from 'react-native-bootsplash';

import { navigatorRef } from '../utils';

import MainScreen from './Main';

const App = () => {
  const hideSplash = React.useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <NavigationContainer ref={navigatorRef} onReady={hideSplash}>
      <AuthProvider>
        <MainScreen />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
