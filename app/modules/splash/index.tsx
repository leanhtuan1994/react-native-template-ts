import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { registerScreen, ScreenComponent } from "navigation/utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Name = "Splash";

export type SplashParam = {
  [Name]: {};
};

const Splash: ScreenComponent<SplashParam, "Splash"> = ({}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t("Welcome")}</Text>
    </View>
  );
};

export default registerScreen<SplashParam, "Splash">(Name, Splash);
