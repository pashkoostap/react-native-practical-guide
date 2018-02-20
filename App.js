import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import configureStore from "./src/store/configureStore";

// Screens
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import FindPlace from "./src/screens/FindPlace/FindPlace";

const store = configureStore();

// Register screens
Navigation.registerComponent("AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("SharePlace", () => SharePlace, store, Provider);
Navigation.registerComponent("FindPlace", () => FindPlace, store, Provider);

// Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "AuthScreen",
    title: "Login"
  }
});
