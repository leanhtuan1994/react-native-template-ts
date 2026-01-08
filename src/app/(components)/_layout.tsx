import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { Stack } from 'expo-router';
import { useThemeColor } from 'heroui-native';
import React, { useCallback } from 'react';
import { Platform, View } from 'react-native';

import { ThemeToggle } from '@/components/theme-toggle';
import { useAppTheme } from '@/lib/contexts/app-theme-context';

function Layout() {
  const { isDark } = useAppTheme();

  const [themeColorForeground, themeColorBackground] = useThemeColor([
    'foreground',
    'background',
  ]);

  const _renderThemeToggle = useCallback(() => <ThemeToggle />, []);

  return (
    <View className="flex-1 bg-background">
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: themeColorForeground,
          headerStyle: {
            backgroundColor: Platform.select({
              ios: undefined,
              android: themeColorBackground,
            }),
          },
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
          headerRight: _renderThemeToggle,
          headerBackButtonDisplayMode: 'generic',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          fullScreenGestureEnabled: isLiquidGlassAvailable() ? false : true,
          contentStyle: {
            backgroundColor: themeColorBackground,
          },
        }}
      >
        <Stack.Screen name="component-list" options={{ title: 'Components' }} />
        <Stack.Screen name="accordion" options={{ title: 'Accordion' }} />
        <Stack.Screen name="avatar" options={{ title: 'Avatar' }} />
        <Stack.Screen name="bottom-sheet" options={{ title: 'Bottom Sheet' }} />
        <Stack.Screen
          name="bottom-sheet-native-modal"
          options={{ title: 'Bottom Sheet Native Modal' }}
        />
        <Stack.Screen name="button" options={{ title: 'Button' }} />
        <Stack.Screen name="card" options={{ title: 'Card' }} />
        <Stack.Screen name="checkbox" options={{ title: 'Checkbox' }} />
        <Stack.Screen name="chip" options={{ title: 'Chip' }} />
        <Stack.Screen name="dialog" options={{ title: 'Dialog' }} />
        <Stack.Screen
          name="dialog-native-modal"
          options={{ title: 'Dialog Native Modal', presentation: 'formSheet' }}
        />
        <Stack.Screen name="divider" options={{ title: 'Divider' }} />
        <Stack.Screen name="error-view" options={{ title: 'Error View' }} />
        <Stack.Screen name="form-field" options={{ title: 'Form Field' }} />
        <Stack.Screen name="popover" options={{ title: 'Popover' }} />
        <Stack.Screen
          name="popover-native-modal"
          options={{ title: 'Popover Native Modal', presentation: 'formSheet' }}
        />
        <Stack.Screen
          name="pressable-feedback"
          options={{ title: 'Pressable Feedback' }}
        />
        <Stack.Screen name="radio-group" options={{ title: 'Radio Group' }} />
        <Stack.Screen
          name="scroll-shadow"
          options={{ title: 'Scroll Shadow' }}
        />
        <Stack.Screen name="select" options={{ title: 'Select' }} />
        <Stack.Screen
          name="select-native-modal"
          options={{ title: 'Select Native Modal', presentation: 'formSheet' }}
        />
        <Stack.Screen name="skeleton" options={{ title: 'Skeleton' }} />
        <Stack.Screen name="spinner" options={{ title: 'Spinner' }} />
        <Stack.Screen name="surface" options={{ title: 'Surface' }} />
        <Stack.Screen name="switch" options={{ title: 'Switch' }} />
        <Stack.Screen name="tabs" options={{ title: 'Tabs' }} />
        <Stack.Screen name="text-field" options={{ title: 'Text Field' }} />
        <Stack.Screen name="toast" options={{ title: 'Toast' }} />
        <Stack.Screen
          name="toast-native-modal"
          options={{ title: 'Toast Native Modal', presentation: 'formSheet' }}
        />
      </Stack>
    </View>
  );
}

export default Layout;
