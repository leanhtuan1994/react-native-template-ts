import type { ConfigContext, ExpoConfig } from '@expo/config';
import type { AppIconBadgeConfig } from 'app-icon-badge/types';

import { ClientEnv, Env } from './env';

const appIconBadgeConfig: AppIconBadgeConfig = {
  enabled: Env.APP_ENV !== 'production',
  badges: [
    { text: Env.APP_ENV, type: 'banner', color: 'white' },
    { text: Env.VERSION.toString(), type: 'ribbon', color: 'white' },
  ],
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  scheme: Env.SCHEME,
  slug: 'caracalapp',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  updates: { fallbackToCacheTimeout: 0 },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
    infoPlist: { ITSAppUsesNonExemptEncryption: false },
  },
  experiments: { typedRoutes: true, reactCompiler: true },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#0A0D11',
    },
    package: Env.PACKAGE,
    predictiveBackGestureEnabled: false,
  },
  web: { favicon: './assets/favicon.png', bundler: 'metro' },
  plugins: [
    './plugins/with-gradle-performance',
    [
      'expo-build-properties',
      {
        android: {
          usePrecompiledHeaders: true,
          // Drop x86/x86_64 — those only serve Intel emulators, and every
          // shipping device is arm. Production keeps armeabi-v7a for legacy
          // 32-bit handsets.
          buildArchs:
            Env.APP_ENV === 'production'
              ? ['armeabi-v7a', 'arm64-v8a']
              : ['arm64-v8a'],
        },
      },
    ],
    [
      'expo-splash-screen',
      {
        backgroundColor: '#0A0D11',
        image: './assets/splash-icon.png',
        imageWidth: 150,
      },
    ],
    ['expo-font'],
    'expo-localization',
    'expo-router',
    ['app-icon-badge', appIconBadgeConfig],
    ['react-native-edge-to-edge'],
    ['expo-image'],
    'expo-status-bar',
  ],
  extra: { ...ClientEnv, eas: { projectId: Env.EAS_PROJECT_ID } },
});
