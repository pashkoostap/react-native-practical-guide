import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import PlacesList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  render() {
    const { placesReducer: { places } } = this.props;

    return (
      <View style={styles.wrapper}>
        <PlacesList places={places} />
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
