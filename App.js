import React from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

import ListItem from "./src/ListItem/ListItem";
import PlaceList from "./src/PlaceList/PlaceList";
import PlaceInput from "./src/PlaceInput/PlaceInput";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      placeName: "",
      places: []
    };

    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
    this.placeNameSubmitHandler = this.placeNameSubmitHandler.bind(this);
  }

  placeNameChangedHandler(placeName) {
    this.setState({ placeName });
  }

  placeNameSubmitHandler() {
    const { placeName } = this.state;

    if (!placeName.trim()) {
      alert("The input is empty");
    } else {
      this.setState(prevState => ({
        places: [...prevState.places, prevState.placeName],
        placeName: ""
      }));
    }
  }

  render() {
    const { placeName, places } = this.state;

    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeNameSubmitHandler={this.placeNameSubmitHandler}
        />

        <PlaceList places={places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
