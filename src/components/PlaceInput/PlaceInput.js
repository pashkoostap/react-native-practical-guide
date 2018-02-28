import React, { Component } from "react";
import { StyleSheet } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const PlaceInput = ({
  placeName,
  placeNameChangedHandler,
  placeNameSubmitHandler
}) => (
  <DefaultInput
    value={placeName}
    onChangeTextHandler={placeNameChangedHandler}
    blurOnSubmit={true}
  />
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputComponent: {
    width: "80%"
  },
  buttonStyles: {
    width: "auto"
  }
});

export default PlaceInput;
