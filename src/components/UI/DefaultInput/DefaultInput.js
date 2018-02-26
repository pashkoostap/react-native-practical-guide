import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => {
  return (
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[styles.inputStyles, props.style]}
      onChangeText={props.onChangeTextHandler}
    />
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5
  }
});

export default DefaultInput;
