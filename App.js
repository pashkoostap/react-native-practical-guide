import React from "react";
import { connect } from "react-redux";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import {
  addPlace,
  deletePlace,
  selectPlace,
  unselectPlace
} from "./src/store/actions";

import ListItem from "./src/ListItem/ListItem";
import PlaceList from "./src/PlaceList/PlaceList";
import PlaceInput from "./src/PlaceInput/PlaceInput";
import PlaceDetail from "./src/PlaceDetail/PlaceDetail";

class App extends React.Component {
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
      this.props.addPlace(placeName);
      this.setState(prevState => ({ placeName: "" }));
    }
  }

  onPlaceItemSelect(key) {
    this.props.selectPlace(key);
  }

  onPlaceItemDelete() {
    this.props.deletePlace();
  }

  onPlaceDetailModalClose() {
    this.props.unselectPlace();
  }

  render() {
    const { placeName } = this.state;
    const { placesReducer: { places, selectedPlace } } = this.props;

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

const mapStateToProps = ({ placesReducer }) => {
  return { placesReducer };
};

const mapActionsToProps = dispatch => {
  return {
    addPlace: placeName => dispatch(addPlace(placeName)),
    deletePlace: () => dispatch(deletePlace()),
    selectPlace: placeKey => dispatch(selectPlace(placeKey)),
    unselectPlace: () => dispatch(unselectPlace())
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);
