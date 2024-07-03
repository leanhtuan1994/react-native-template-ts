import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
	Startup: undefined;
};

export type AppScreenProps<S extends keyof AppStackParamList = keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, S>;

export type AppNavigationProp<T extends keyof AppStackParamList> = AppScreenProps<T>['navigation'];

export type AppRouteProp<T extends keyof AppStackParamList> = AppScreenProps<T>['route'];
