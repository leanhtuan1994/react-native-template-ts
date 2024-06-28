import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Startup: undefined;
};

export type RootScreenProps<S extends keyof RootStackParamList = keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, S>;

export type RootNavigationProp<T extends keyof RootStackParamList> =
	RootScreenProps<T>['navigation'];

export type RootRouteProp<T extends keyof RootStackParamList> = RootScreenProps<T>['route'];
