/* eslint-disable no-console */
import React from 'react';

import { ThemeProvider } from '@rneui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-native-gesture-handler';

import AppNavigator from './navigators/application';
import theme from './theme';
import './translations';

if (!__DEV__) {
	console.log = () => {};
	console.warn = () => {};
	console.error = () => {};
}

export const queryClient = new QueryClient();

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
