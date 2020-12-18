import { registerScreen } from "navigation/utils";
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const OrderName = "Order";

export type OrderParam = {
  [OrderName]: {};
};

const Order = () => {
  return <View style={styles.container} />;
};

export default registerScreen<OrderParam, "Order">("Order", Order);
