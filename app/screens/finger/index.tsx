import React from "react";
import { View, StyleSheet } from "react-native";
import { registerScreen, ScreenComponent } from "navigation/utils";
import FingerprintScanner, {
  Biometrics,
  FingerprintScannerError,
} from "react-native-fingerprint-scanner";
import { Button } from "react-native-elements";
import Home from "screens/home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 24,
  },
});

const Name = "Finger";

export type FingerParam = {
  [Name]: {};
};

const Finger: ScreenComponent<FingerParam, "Finger"> = ({ navigation }) => {
  const [type, setType] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    FingerprintScanner.isSensorAvailable().then((value: Biometrics) => {
      console.log("tuananhle type: " + value);
      setType(value);
    });

    return FingerprintScanner.release();
  }, []);

  const getMessage = React.useCallback(() => {
    if (type === "Face ID") {
      return "";
    }
    return "";
  }, [type]);

  const onAttempt = React.useCallback((error: FingerprintScannerError) => {
    console.log("tuananhle error: " + error);
  }, []);

  const onFingerCheck = React.useCallback(() => {
    FingerprintScanner.authenticate({
      description: getMessage(),
      onAttempt: onAttempt,
    })
      .then(() => {
        console.log("tuananhle ok");
        Home.present(navigation);
      })
      .catch((error) => {
        console.log("tuananhle error " + error);
      });
  }, [getMessage, onAttempt, navigation]);

  return (
    <>
      <View style={styles.container}>
        <Button title="Finger" onPress={onFingerCheck} />
      </View>
    </>
  );
};

export default registerScreen<FingerParam, "Finger">(Name, Finger);
