/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import {
  TouchableNativeFeedback as NativeTouchNativeFeedback,
  TouchableOpacity as NativeTouchOpacity,
  Platform,
} from "react-native";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

const TouchableNativeComponent = Platform.select({
  // @ts-ignore
  android: NativeTouchNativeFeedback,
  ios: NativeTouchOpacity,
  default: NativeTouchOpacity,
});

const TouchableComponent = Platform.select({
  android: TouchableNativeFeedback,
  default: TouchableOpacity,
});

export { TouchableNativeComponent, TouchableComponent };
