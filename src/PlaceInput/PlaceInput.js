import React from "react";

import { View, TextInput, Button, StyleSheet } from "react-native";

const PlaceInput = ({
  placeName,
  placeNameChangedHandler,
  placeNameSubmitHandler
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputComponent}
        placeholder="An awesome place"
        value={placeName}
        onChangeText={placeNameChangedHandler}
      />

      <Button
        title="Add"
        style={styles.buttonStyles}
        onPress={placeNameSubmitHandler}
      />
    </View>
  );
};

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
