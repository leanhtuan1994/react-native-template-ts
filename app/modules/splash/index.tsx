import React from "react";
import { View, StyleSheet } from "react-native";
import { registerScreen, ScreenComponent } from "navigation/utils";
import LottieView from "lottie-react-native";
import { Layout } from "constant";

const ANI_SIZE = Layout.screen.width / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ani: {
    width: ANI_SIZE,
    height: ANI_SIZE,
  },
});

const Name = "Splash";

export type SplashParam = {
  [Name]: {};
};

const Splash: ScreenComponent<SplashParam, "Splash"> = ({}) => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.ani}
        autoPlay
        source={require("assets/animations/splash-animation.json")}
      />
    </View>
  );
};

export default registerScreen<SplashParam, "Splash">(Name, Splash);
