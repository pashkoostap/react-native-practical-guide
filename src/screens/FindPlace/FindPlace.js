import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import PlacesList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  constructor() {
    super();

    this.onPlaceItemSelect = this.onPlaceItemSelect.bind(this);
  }

  onPlaceItemSelect(placeKey) {
    const selectedPlace = this.props.placesReducer.places.find(
      place => place.key === placeKey
    );

    this.props.navigator.push({
      screen: "PlaceDetail",
      title: selectedPlace.placeName,
      passProps: {
        selectedPlace
      }
    });
  }

  render() {
    const { placesReducer: { places } } = this.props;

    return (
      <View style={styles.wrapper}>
        <PlacesList
          places={places}
          onPlaceItemSelect={this.onPlaceItemSelect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});

const mapStateToProps = ({ placesReducer }) => {
  return { placesReducer };
};

export default connect(mapStateToProps, null)(FindPlaceScreen);
