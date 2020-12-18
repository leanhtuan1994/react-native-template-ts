import { registerScreen, ScreenComponent } from "navigation/utils";
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Name = "Basket";

export type BasketParam = {
  [Name]: {};
};

const Basket: ScreenComponent<BasketParam, "Basket"> = () => {
  return <View style={styles.container} />;
};

export default registerScreen<BasketParam, "Basket">("Basket", Basket);
