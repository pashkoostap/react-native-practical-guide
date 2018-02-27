import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => {
  const invalidStyles =
    !props.isValid && props.isTouched ? styles.invalid : null;

  return (
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      autoCapitalize="none"
      autoCorrect={false}
      style={[styles.inputStyles, props.style, invalidStyles]}
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
  },
  invalid: {
    backgroundColor: "#f9c0c0",
    borderColor: "red"
  }
});

export default DefaultInput;
