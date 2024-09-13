import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import BootSplash from 'react-native-bootsplash';

import { SignIn, Startup } from '@/screens';

import { AppStackParamList } from './navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
	const onReady = useCallback(() => {
		BootSplash.hide();
	}, []);

	return (
		<NavigationContainer onReady={onReady}>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="SignIn" component={SignIn} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
