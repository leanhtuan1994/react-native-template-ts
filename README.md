# React Native Template TypeScript

> Clean and minimalist React Native template for a quick start with TypeScript.

<br />

## 📦 Getting started

Installing Dependencies:

```bash
$ yarn install
$ yarn pod
```

Running the app:

```bash
$ yarn start
```

For starting the app on a specific OS:

```bash
$ yarn ios | yarn android
```

<br />

## 👩🏾‍💻 Development

### Navigation

- https://reactnavigation.org/

- Fully using [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated), [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler), [react-native-screens](https://github.com/software-mansion/react-native-screens), [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context), [@react-native-community/masked-view](https://github.com/react-native-masked-view/masked-view#readme)

- Optimize memory usage and performance by enable native screens

<br/>

### State Management using Context API & Hooks

### SVG

- https://github.com/react-native-community/react-native-svg
- https://github.com/kristerkari/react-native-svg-transformer

### i18n & l10n

#### Setup:

- https://react.i18next.com/
- https://www.i18next.com/
- https://github.com/zoontek/react-native-localize
- https://github.com/react-native-async-storage/async-storage

#### How to use:

- Follow setup languages at `./app/utils/translations`
- Using `./languages` by common localize, using anywhere in the project
- If you need to create translations in specific folder, please import it into `./app/utils/translation/localization`
- using hooks `useTranslation` from `react-i18next` like:

```
import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

export function MyComponent() {
 const { t, i18n } = useTranslation();
 // or const [t, i18n] = useTranslation();

 return <View>{t('my translated text')}</View>
}
```

### Animated

- https://github.com/wcandillon/react-native-redash
- https://github.com/software-mansion/react-native-reanimated

### BottomSheet

- A performant interactive bottom sheet with fully configurable options: [Gorhom React Native Bottom Sheet](https://gorhom.github.io/react-native-bottom-sheet/)

### UI Kit

- [React Native Elements](https://reactnativeelements.com/docs)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- Please check custom theme at here: `./app/styles/theme`

### Unit test

- Write your own test suit by create a js file in `__test__` folder
- Test suit must have postfix `.test.test`
- Run all test suits with command `yarn test --verbose`
- Run specific test case with command `yarn test -u -t="test-case-name"`
- Get test coverage report with command `yarn run test-coverage`
- Further reference:
  - https://jestjs.io/docs/en/getting-started
  - https://enzymejs.github.io/enzyme/docs/guides/react-native.html

### Firebase

If you wanna use firebase in this project, please check branch `features/firebase` with fully setup firebase & notification.
