import { Platform } from "react-native";
import { getSystemVersion, hasNotch } from "react-native-device-info";

const isIOS = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";
const notch = hasNotch();
const isIOS13 = isIOS
  ? parseInt(getSystemVersion().split(".")[0], 10) > 12
  : false;

export { isIOS, isAndroid, notch, isIOS13 };
