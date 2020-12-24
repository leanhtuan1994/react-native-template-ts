import React from "react";
import Messaging from "@react-native-firebase/messaging";
import RNPushNotification, {
  PushNotification,
} from "react-native-push-notification";
import { isIOS } from "utils/platform";

import { useFirebase } from "./FirebaseContext";

type FCMContextType = {
  token?: string;
  hasPermission: boolean;
};

const FCMContext = React.createContext<FCMContextType | string>(
  "useFCM shoude be used inside FCMProvider",
);

export const FCMProvider: React.FC = ({ children }) => {
  const { messaging } = useFirebase();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [token, setToken] = React.useState<string>();

  const handlePermission = React.useCallback(() => {
    const handle = async () => {
      try {
        const currentPermission = await messaging.hasPermission();
        if (currentPermission === Messaging.AuthorizationStatus.DENIED) {
          console.warn("User didnt accept Notification permission");
          return;
        }
        if (
          currentPermission === Messaging.AuthorizationStatus.NOT_DETERMINED
        ) {
          const requestResult = await messaging.requestPermission();
          if (requestResult === Messaging.AuthorizationStatus.DENIED) {
            console.warn("User didnt accept Notification permission");
            return;
          }
        }
        setHasPermission(true);
      } catch (e) {
        console.warn("Something went wrong with Notification", e, {
          hasPermission,
        });
      }
    };

    handle();
  }, [messaging, hasPermission]);

  const onNotification = React.useCallback((notification: PushNotification) => {
    console.log("notification : " + notification.message);
  }, []);

  const onRegister = React.useCallback((onToken: any) => {
    console.log("onRegister: " + JSON.stringify(onToken));
  }, []);

  React.useEffect(() => {
    handlePermission();
    RNPushNotification.configure({
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      onNotification,
      onRegister,
    });
  }, [handlePermission, onNotification, onRegister]);

  React.useEffect(() => {
    if (hasPermission) {
      messaging.getToken().then((deviceToken) => {
        setToken(deviceToken);
      });

      RNPushNotification.createChannel(
        {
          channelId: "default-channel-id",
          channelName: "Default channel id",
          importance: 1,
        },
        (_) => {
          console.log("create channel with id");
        },
      );

      const unsubscribe = messaging.onMessage(async (remoteMsg) => {
        if (isIOS && remoteMsg) {
          RNPushNotification.localNotification({
            title: remoteMsg?.notification?.title,
            message: remoteMsg?.notification?.body || "",
          });
        }
      });

      return unsubscribe;
    }
    return;
  }, [hasPermission, messaging]);

  const value: FCMContextType = {
    token,
    hasPermission,
  };

  return <FCMContext.Provider {...{ value, children }} />;
};

export function useFCMToken(): FCMContextType {
  const c = React.useContext(FCMContext);
  if (typeof c === "string") {
    throw Error(c);
  }
  return c;
}
