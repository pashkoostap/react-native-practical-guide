import { Navigation } from "react-native-navigation";

import Icon from "react-native-vector-icons/Ionicons";

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
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
