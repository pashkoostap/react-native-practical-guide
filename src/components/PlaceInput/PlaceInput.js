import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  constructor() {
    super();

    this.state = {
      placeName: ""
    };

    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
    this.placeNameSubmitHandler = this.placeNameSubmitHandler.bind(this);
  }

  placeNameChangedHandler(placeName) {
    if (!placeName.trim()) {
      alert("Input is empty");
    } else {
      this.setState(prevState => ({ placeName }));
    }
  }

  placeNameSubmitHandler() {
    this.props.addPlace(this.state.placeName);

    this.setState(prevState => ({ placeName: "" }));
  }

  render() {
    const { placeName } = this.state;

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputComponent}
          placeholder="An awesome place"
          value={placeName}
          onChangeText={this.placeNameChangedHandler}
        />

        <Button
          title="Add"
          style={styles.buttonStyles}
          onPress={this.placeNameSubmitHandler}
        />
      </View>
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
