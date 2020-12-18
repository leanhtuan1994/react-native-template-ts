import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Colors } from "styles";

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
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          minWidth: 80,
          height: 56,
        }}>
        {options.tabBarIcon
          ? options.tabBarIcon({
              focused: !active,
              color: active ? Colors.Primary : Colors.Gray,
              size: 0,
            })
          : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabBarItem;
