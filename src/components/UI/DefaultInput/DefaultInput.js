import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => {
  return (
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[styles.inputStyles, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 5
  }
});

export default DefaultInput;
