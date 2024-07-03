/* eslint-disable no-console */
import 'react-native-gesture-handler';
import './translations';

import { ThemeProvider } from '@rneui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
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
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<AppNavigator />
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default App;
