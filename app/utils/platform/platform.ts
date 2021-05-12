import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const notch = true;
const isIOS13 = true;

export { isIOS, isAndroid, notch, isIOS13 };
