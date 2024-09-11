import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Startup } from '@/screens';

import { AppStackParamList } from './navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
	const onReady = useCallback(() => {
		BootSplash.hide();
	}, []);

	return (
		<SafeAreaProvider>
			<NavigationContainer onReady={onReady}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Startup" component={Startup} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default AppNavigator;
