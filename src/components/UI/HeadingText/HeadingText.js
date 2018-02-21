import React from "react";
import { Text, StyleSheet } from "react-native";

const HeadingText = props => {
  return (
    <Text {...props} style={[styles.headingText, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default HeadingText;
