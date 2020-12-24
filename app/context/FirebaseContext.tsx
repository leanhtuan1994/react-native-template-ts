import React from "react";
import "@react-native-firebase/app";
import Messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";
import Firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import Auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

type ContextType = {
  messaging: FirebaseMessagingTypes.Module;
  firestore: FirebaseFirestoreTypes.Module;
  auth: FirebaseAuthTypes.Module;
};

export const Context = React.createContext<ContextType | string>(
  "useFirebase shoulde be used inside FirebaseProvider",
);

export const FirebaseProvider: React.FC = ({ children }) => {
  const value: ContextType = {
    messaging: Messaging(),
    firestore: Firestore(),
    auth: Auth(),
  };

  return <Context.Provider {...{ value, children }} />;
};

export function useFirebase(): ContextType {
  const c = React.useContext(Context);
  if (typeof c === "string") {
    throw new Error(c);
  }
  return c;
}
