import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends Component {
  render() {
    return (
      <View style={{ width: Dimensions.get("window").width * 0.8 }}>
        <Text>Side drawer</Text>
      </View>
    );
  }
}

export default SideDrawer;
