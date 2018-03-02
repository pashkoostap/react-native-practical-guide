import React from "react";
import { Text, StyleSheet } from "react-native";

const MainText = props => {
  return (
    <Text {...props} style={styles.mainText}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: "#000",
    backgroundColor: "transparent",
    width: "100%",
    textAlign: "center"
  }
});

export default MainText;
