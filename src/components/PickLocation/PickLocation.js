import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>

        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    height: 150,
    width: "80%"
  },
  button: {
    margin: 10
  }
});

export default PickLocation;
