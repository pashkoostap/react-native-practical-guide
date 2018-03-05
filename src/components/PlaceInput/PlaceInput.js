import React, { Component } from "react";
import { StyleSheet } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const PlaceInput = ({
  placeName,
  placeNameChangedHandler,
  placeNameSubmitHandler,
  placeholder
}) => (
  <DefaultInput
    value={placeName}
    placeholder={placeholder}
    onChangeTextHandler={placeNameChangedHandler}
    blurOnSubmit={true}
    style={styles.input}
  />
);

const styles = StyleSheet.create({
  input: {
    marginLeft: 0,
    marginRight: 0
  }
});

export default PlaceInput;
