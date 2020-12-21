/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-empty-function */

import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import "react-native-gesture-handler/jestSetup";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock(
  "react-native-localize",
  () =>
    class RNLocalization {
      language = "en";

      constructor(props) {
        this.props = props;
        this.setLanguage(this.language);
      }

      setLanguage(interfaceLanguage) {
        this.language = interfaceLanguage;
        if (this.props[interfaceLanguage]) {
          const localizedStrings = this.props[this.language];
          for (const key in localizedStrings) {
            if (localizedStrings.hasOwnProperty(key)) {
              this[key] = localizedStrings[key];
            }
          }
        }
      }
    },
);

jest.mock("react-native-screens", () => {
  const RealComponent = jest.requireActual("react-native-screens");
  RealComponent.enableScreens = function () {};
  return RealComponent;
});

jest.mock("react-native-splash-screen", () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigation: jest.fn,
    }),
  };
});
