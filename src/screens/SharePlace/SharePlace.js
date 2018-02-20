import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/places";
import PlaceInput from "../../components/PlaceInput/PlaceInput";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.addPlace = this.addPlace.bind(this);
  }

  onNavigatorEvent(event) {
    if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
  }

  addPlace(placeName) {
    if (!placeName.trim()) {
      alert("Input is empty");
    } else {
      this.props.addPlace(placeName);
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <PlaceInput addPlace={this.addPlace} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
