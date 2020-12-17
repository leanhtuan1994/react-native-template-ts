import React from "react";
import { View, StyleSheet } from "react-native";
import { registerScreen, ScreenComponent } from "navigation/utils";
import { Colors } from "styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Purple,
  },
});

const options = {};

const Name = "Home";

export type HomeParam = {
  [Name]: {};
};

const Home: ScreenComponent<HomeParam, "Home"> = () => {
  return <View style={styles.container} />;
};

export default registerScreen<HomeParam, "Home">("Home", Home, options);
