import '@shopify/flash-list/jestSetup';

import theme from '@/theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import type { RenderOptions } from '@testing-library/react-native';
import { render } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import React from 'react';

const createAppWrapper = () => {
	return ({ children }: { children: React.ReactNode }) => (
		<ThemeProvider theme={theme}>
			<BottomSheetModalProvider>
				<NavigationContainer>{children}</NavigationContainer>
			</BottomSheetModalProvider>
		</ThemeProvider>
	);
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
	const Wrapper = createAppWrapper();

	return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react-native';
export { customRender as render };
