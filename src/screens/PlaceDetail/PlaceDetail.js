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
  ScrollView,
  Dimensions
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
    const initialRegion = {
      ...location,
      latitudeDelta: 0.0122,
      longitudeDelta:
        Dimensions.get("window").width /
        Dimensions.get("window").height *
        0.0122
    };

    return (
      <ScrollView>
        <View style={styles.viewWrapContainer}>
          <View style={styles.mapWrapper}>
            <MapView initialRegion={initialRegion} style={styles.map}>
              <MapView.Marker coordinate={location} />
            </MapView>
          </View>

          <Image source={{ uri: placeImage }} style={styles.placeImage} />

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
    height: 200
  },
  mapWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10
  }
});

const mapDispatchToProps = dispatch => {
  return {
    deletePlace: placeKey => dispatch(deletePlace(placeKey))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
