import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

class PickLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedLocation: {
        latitude: 37.79352,
        longitude: -122.4013726,
        latitudeDelta: 0.0122,
        longitudeDelta:
          Dimensions.get("window").width /
          Dimensions.get("window").height *
          0.0122
      }
    };

    this.pickLocationHandler = this.pickLocationHandler.bind(this);
  }

  pickLocationHandler(event) {
    const { nativeEvent: { coordinate } } = event;

    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coordinate.latitude,
          longitude: coordinate.longitude
        }
      };
    });
  }

  render() {
    const { focusedLocation } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={focusedLocation}
          region={focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
        />

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
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 10
  }
});

export default PickLocation;
