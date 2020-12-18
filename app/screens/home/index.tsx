import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { registerScreen, ScreenComponent } from "navigation/utils";

import CoopHome from "./coop-home";
import Categories from "./categories";
import Basket from "./basket";
import Order from "./order";
import { TabBarIcon, TabBar } from "./components";

const Tab = createBottomTabNavigator();

const Name = "Home";

export type HomeParam = {
  [Name]: {};
};

const Home: ScreenComponent<HomeParam, "Home"> = () => {
  return (
    <Tab.Navigator
      lazy={false}
      tabBar={(props) => <TabBar {...props} />}
      tabBarOptions={{ style: { paddingTop: 8 } }}>
      <Tab.Screen
        {...CoopHome.screen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon {...props} source={require("./assets/IconsHome.png")} />
          ),
        }}
      />
      <Tab.Screen
        {...Categories.screen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              {...props}
              source={require("./assets/IconsCategory.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        {...Order.screen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              {...props}
              source={require("./assets/IconsOrder.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        {...Basket.screen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              {...props}
              source={require("./assets/IconsBasket.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default registerScreen<HomeParam, "Home">("Home", Home);
