/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-console */
import './translations';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@rneui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';

import AppNavigator from './navigators/application';
import theme from './theme';

if (!__DEV__) {
	console.log = () => {};
	console.warn = () => {};
	console.error = () => {};
}

export const queryClient = new QueryClient();

export const storage = new MMKV();

const App: React.FC = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<BottomSheetModalProvider>
						<AppNavigator />
					</BottomSheetModalProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</GestureHandlerRootView>
	);
};

export default App;
