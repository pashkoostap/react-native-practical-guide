import React, { Component } from "react";
import { StyleSheet } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

class PlaceInput extends Component {
  constructor() {
    super();

    this.state = {
      placeName: ""
    };

    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
  }

  placeNameChangedHandler(placeName) {
    if (!placeName.trim()) {
      alert("Input is empty");
    } else {
      this.setState(prevState => ({ placeName }));
    }
  }

  render() {
    const { placeName } = this.state;

    return (
      <DefaultInput
        value={placeName}
        onChangeText={this.placeNameChangedHandler}
      />
    );
  }
}

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
