import React from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

import ListItem from "./src/ListItem/ListItem";
import PlaceList from "./src/PlaceList/PlaceList";
import PlaceInput from "./src/PlaceInput/PlaceInput";
import PlaceDetail from "./src/PlaceDetail/PlaceDetail";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      placeName: "",
      places: [],
      selectedPlace: null
    };

    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
    this.placeNameSubmitHandler = this.placeNameSubmitHandler.bind(this);
    this.onPlaceItemSelect = this.onPlaceItemSelect.bind(this);
    this.onPlaceItemDelete = this.onPlaceItemDelete.bind(this);
    this.onPlaceDetailModalClose = this.onPlaceDetailModalClose.bind(this);
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
        places: [
          ...prevState.places,
          {
            key: Math.random() + new Date(),
            placeName: prevState.placeName,
            placeImage: {
              uri:
                "http://ukrainetrek.com/blog/wp-content/uploads/2011/12/ukrainian-carpathians-landscape-16.jpg"
            }
          }
        ],
        placeName: ""
      }));
    }
  }

  onPlaceItemSelect(key) {
    this.setState(prevState => ({
      selectedPlace: prevState.places.find(item => item.key === key)
    }));
  }

  onPlaceItemDelete() {
    this.setState(prevState => ({
      places: prevState.places.filter(
        item => item.key !== prevState.selectedPlace.key
      ),
      selectedPlace: null
    }));
  }

  onPlaceDetailModalClose() {
    this.setState(prevState => ({
      selectedPlace: null
    }));
  }

  render() {
    const { placeName, places, selectedPlace } = this.state;

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          onPlaceItemDelete={this.onPlaceItemDelete}
          onPlaceDetailModalClose={this.onPlaceDetailModalClose}
        />

        <PlaceInput
          placeName={placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeNameSubmitHandler={this.placeNameSubmitHandler}
        />

        <PlaceList places={places} onPlaceItemSelect={this.onPlaceItemSelect} />
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
