import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import FindPlace from "./src/screens/FindPlace/FindPlace";

// Register screens
Navigation.registerComponent("AuthScreen", () => AuthScreen);
Navigation.registerComponent("SharePlace", () => SharePlace);
Navigation.registerComponent("FindPlace", () => FindPlace);

// Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "AuthScreen",
    title: "Login"
  }
});
