import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
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
    const { selectedPlace: { placeImage, placeName } } = this.props;
    const isAndroidPlatform = Platform.OS === "android";

    return (
      <View style={styles.viewWrapContainer}>
        <Image source={placeImage} style={styles.placeImage} />
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
  }
});

const mapDispatchToProps = dispatch => {
  return {
    deletePlace: placeKey => dispatch(deletePlace(placeKey))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
