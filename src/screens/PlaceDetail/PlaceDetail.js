import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MapView from "react-native-maps";
import { deletePlace } from "../../store/actions/places";

class PlaceDetail extends Component {
  constructor() {
    super();

    this.onPlaceItemDelete = this.onPlaceItemDelete.bind(this);
  }

  onPlaceItemDelete() {
    this.props.deletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render() {
    const { selectedPlace: { placeImage, placeName, location } } = this.props;
    const isAndroidPlatform = Platform.OS === "android";

    return (
      <ScrollView>
        <View style={styles.viewWrapContainer}>
          <Image source={placeImage} style={styles.placeImage} />

          <View style={styles.mapWrapper}>
            <MapView initialRegion={location} style={styles.map}>
              <MapView.Marker coordinate={location} />
            </MapView>
          </View>

          <Text style={styles.placeName}>{placeName}</Text>

          <View style={styles.buttonsWrap}>
            <TouchableOpacity onPress={this.onPlaceItemDelete}>
              <View style={styles.buttonStyles}>
                <Icon
                  size={30}
                  color="red"
                  name={isAndroidPlatform ? "md-trash" : "ios-trash"}
                />
                <Text style={styles.textStyles}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20
  },
  viewWrapContainer: {
    padding: 20
  },
  placeImage: {
    width: "100%",
    height: 200,
    marginBottom: 10
  },
  placeName: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10
  },
  buttonsWrap: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonStyles: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyles: {
    marginLeft: 10
  },
  map: {
    width: "100%",
    height: 250
  },
  mapWrapper: {
    width: "100%",
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    deletePlace: placeKey => dispatch(deletePlace(placeKey))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
