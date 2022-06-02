import type React from 'react';
import { createRef } from 'react';
import type {
  NavigationContainerRef,
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/core';

import type { MainParam } from '../navigator/Main';

type RootStackParamList = MainParam;

export const navigateRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export type ScreenComponent<
  P extends ParamListBase = ParamListBase,
  N extends keyof P = string,
> = React.ComponentType<{
  route: RouteProp<P, N>;
  navigation: NavigationProp<any>;
}>;

type ScreenType<
  P extends ParamListBase,
  N extends keyof P,
  O extends Record<string, unknown>,
> = {
  screen: {
    name: N;
    component: ScreenComponent<P, N>;
    options?: O;
  };
  present: (n: NavigationProp<P>, p?: P[N]) => void;
};

export function registerScreen<
  P extends ParamListBase = ParamListBase,
  N extends keyof P = string,
  O extends Record<string, unknown> = Record<string, unknown>,
>(name: N, Comp: ScreenComponent<P, N>, options?: O): ScreenType<P, N, O> {
  return {
    screen: {
      name,
      component: Comp,
      options,
    },
    present: (navigation: NavigationProp<P>, params?: P[N]) => {
      navigation.navigate({ name, params: params as P[N] });
    },
  };
}
