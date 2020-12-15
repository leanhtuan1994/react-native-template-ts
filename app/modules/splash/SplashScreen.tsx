import React, {useEffect} from "react";
import {View, StyleSheet, Text} from "react-native";
import {useTranslation} from "react-i18next";
import RNSplashScreen from "react-native-splash-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const SplashScreen = () => {
  const {t} = useTranslation();

  useEffect(() => {
    RNSplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{t("Welcome")}</Text>
    </View>
  );
};

export default SplashScreen;
