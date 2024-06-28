import { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Startup } from '@/screens';
import type { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
