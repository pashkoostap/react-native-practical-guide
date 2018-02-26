import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import PlacesList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.onPlaceItemSelect = this.onPlaceItemSelect.bind(this);
  }

  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  onNavigatorEvent(event) {
    if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
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
