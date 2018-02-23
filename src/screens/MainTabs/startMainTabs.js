import { Navigation } from "react-native-navigation";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const startMainTabs = () => {
  const isAndroidPlatform = Platform.OS === "android";

  Promise.all([
    Icon.getImageSource(isAndroidPlatform ? "md-map" : "ios-map", 30),
    Icon.getImageSource(
      isAndroidPlatform ? "md-share-alt" : "ios-share-alt",
      30
    ),
    Icon.getImageSource(isAndroidPlatform ? "md-menu" : "ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "FindPlace",
          label: "Find place",
          title: "Find place",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              { icon: sources[2], title: "Menu", id: "sideDrawerToggle" }
            ]
          }
        },
        {
          screen: "SharePlace",
          label: "Share place",
          title: "Share place",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              { icon: sources[2], title: "Menu", id: "sideDrawerToggle" }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "SideDrawer"
        }
      }
    });
  });
};

export default startMainTabs;
