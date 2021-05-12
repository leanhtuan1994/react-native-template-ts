import React from 'react';
import { SafeAreaView } from 'react-native';
import { Route } from '@react-navigation/core';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Colors, GlobalStyles } from 'styles';

import TabBarItem from './TabBarItem';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const onTabPress = (route: Route<string>, index: number) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (state.index !== index && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onTabLongPress = (route: Route<string>) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.White,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        ...GlobalStyles.shadow,
      }}>
      {state.routes.map((route, index) => (
        <TabBarItem
          key={route.key}
          active={index === state.index}
          options={descriptors[route.key].options}
          onPress={() => onTabPress(route, index)}
          onLongPress={() => onTabLongPress(route)}
        />
      ))}
    </SafeAreaView>
  );
};

export default TabBar;
