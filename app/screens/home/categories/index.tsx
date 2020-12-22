import { registerScreen, ScreenComponent } from "navigation/utils";
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const CategoriesName = "Categories";

export type CategoriesParam = {
  [CategoriesName]: {};
};

const Categories: ScreenComponent<CategoriesParam, "Categories"> = () => {
  return <View style={styles.container} />;
};

export default registerScreen<CategoriesParam, "Categories">(
  "Categories",
  Categories,
);
