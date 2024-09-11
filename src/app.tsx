/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-console */
import './translations';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@rneui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ToastProvider from './components/toast/toast';
import AppNavigator from './navigators/app-navigator';
import theme from './theme';

if (!__DEV__) {
	console.log = () => {};
	console.warn = () => {};
	console.error = () => {};
}

export const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
		<GestureHandlerRootView style={styles.container}>
			<KeyboardProvider>
				<SafeAreaProvider>
					<QueryClientProvider client={queryClient}>
						<ThemeProvider theme={theme}>
							<BottomSheetModalProvider>
								<AppNavigator />
								<ToastProvider />
							</BottomSheetModalProvider>
						</ThemeProvider>
					</QueryClientProvider>
				</SafeAreaProvider>
			</KeyboardProvider>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
