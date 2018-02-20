import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";

// Register screens
Navigation.registerComponent("AuthScreen", () => AuthScreen);

// Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "AuthScreen",
    title: "Login"
  }
});
