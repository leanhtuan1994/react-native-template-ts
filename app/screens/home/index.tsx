import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { registerScreen, ScreenComponent } from 'navigation/utils';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Discover from './discover';
import Charts from './charts';
import { TabBar } from './components';
import CoopHome from './home-screen';
import Portfolio from './portfolio';
import Settings from './settings';

const Tab = createBottomTabNavigator();

const Name = 'Home';

export type HomeParam = {
  [Name]: Record<string, unknown>;
};

const Home: ScreenComponent<HomeParam, 'Home'> = () => {
  return (
    <Tab.Navigator lazy={false} tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        {...CoopHome.screen}
        options={{
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />
      <Tab.Screen
        {...Charts.screen}
        options={{
          tabBarIcon: props => <Icon name="bar-graph" {...props} />,
        }}
      />
      <Tab.Screen
        {...Portfolio.screen}
        options={{
          tabBarIcon: props => <AwesomeIcon name="pie-chart" {...props} />,
        }}
      />
      <Tab.Screen
        {...Discover.screen}
        options={{
          tabBarIcon: props => <AwesomeIcon name="bandcamp" {...props} />,
        }}
      />
      <Tab.Screen
        {...Settings.screen}
        options={{
          tabBarIcon: props => <AwesomeIcon name="ellipsis-h" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default registerScreen<HomeParam, 'Home'>('Home', Home);
