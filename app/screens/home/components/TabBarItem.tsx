import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  StyleSheet,
} from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Colors } from 'styles';

type TabBatItemProps = {
  active: boolean;
  options: BottomTabNavigationOptions;
};

const TabBarItem: React.FC<TouchableWithoutFeedbackProps & TabBatItemProps> = ({
  active,
  options,
  ...rest
}) => {
  return (
    <TouchableWithoutFeedback {...rest}>
      <View style={styles.container}>
        {options.tabBarIcon
          ? options.tabBarIcon({
              focused: !active,
              color: active ? Colors.Black : Colors.Gray,
              size: 24,
            })
          : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingHorizontal: 8,
    paddingBottom: 8,
    minWidth: 80,
  },
});

export default TabBarItem;
