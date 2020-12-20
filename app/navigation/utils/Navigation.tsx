import React from "react";
import {
  NavigationContainerRef,
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/core";
import throttle from "lodash.throttle";

const navigateSafe = (navigate: any, time = 2000) =>
  throttle(navigate, time, { trailing: false });

export const navigatorRef = React.createRef<NavigationContainerRef>();

export type ScreenComponent<
  P extends ParamListBase = ParamListBase,
  N extends keyof P = string
> = React.ComponentType<{
  route: RouteProp<P, N>;
  navigation: any;
}>;

type ScreenType<
  P extends ParamListBase,
  N extends keyof P,
  O extends object
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
  O extends object = object
>(name: N, Comp: ScreenComponent<P, N>, options?: O): ScreenType<P, N, O> {
  return {
    screen: {
      name,
      component: Comp,
      options,
    },
    present: (navigation: NavigationProp<P>, params?: P[N]) => {
      navigateSafe(navigation.navigate({ name, params: params as P[N] }));
    },
  };
}
