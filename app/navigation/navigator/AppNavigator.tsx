import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '@context/AuthContext';
import RNBootSplash from 'react-native-bootsplash';
import { navigateRef } from '@navigation/utils';

import MainScreen from './Main';

const App = () => {
  const hideSplash = useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <NavigationContainer ref={navigateRef} onReady={hideSplash}>
      <AuthProvider>
        <MainScreen />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
