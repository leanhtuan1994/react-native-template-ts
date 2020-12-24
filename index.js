import { AppRegistry } from "react-native";
import messaging from "@react-native-firebase/messaging";

import "react-native-gesture-handler";
import App from "./App";
import { name as appName } from "./app.json";

//* Register background handler
messaging().setBackgroundMessageHandler(async (remoteMsg) => {
  console.log("message handle in the background: " + JSON.stringify(remoteMsg));
});

AppRegistry.registerComponent(appName, () => App);
