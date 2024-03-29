module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './app',
          '@assets/*': './assets/*',
          '@images': './assets/images',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@utils': './app/utils',
          '@translations': './app/utils/translations',
          '@languages': './languages',
          '@styles': './app/styles',
          '@components': './app/components',
          '@constant': './app/constant',
          '@context': './app/context',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
