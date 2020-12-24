import React from "react";
import { StyleSheet, View } from "react-native";
import { registerScreen, ScreenComponent } from "navigation/utils";

const Name = "CoopHome";

export type CoopHomeParam = {
  [Name]: {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const CoopHome: ScreenComponent<CoopHomeParam, "CoopHome"> = () => {
  return <View style={styles.container} />;
};

export default registerScreen<CoopHomeParam, "CoopHome">("CoopHome", CoopHome);
