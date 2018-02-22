import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import configureStore from "./src/store/configureStore";
const store = configureStore();

// Screens
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

// Register screens
Navigation.registerComponent("AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("SharePlace", () => SharePlace, store, Provider);
Navigation.registerComponent("FindPlace", () => FindPlace, store, Provider);
Navigation.registerComponent("PlaceDetail", () => PlaceDetail, store, Provider);
Navigation.registerComponent("SideDrawer", () => SideDrawer, store, Provider);

// Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "AuthScreen",
    title: "Login",
    navigatorStyle: { navBarHidden: true }
  }
});
