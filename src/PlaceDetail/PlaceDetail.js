import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlaceDetail = ({
  selectedPlace,
  onPlaceItemDelete,
  onPlaceDetailModalClose
}) => {
  if (!selectedPlace) return null;

  const { placeName, placeImage } = selectedPlace;

  return (
    <Modal
      style={styles.modalContainer}
      onRequestClose={onPlaceDetailModalClose}
      visible={!!selectedPlace}
      animationType="slide"
    >
      <View style={styles.viewWrapContainer}>
        <Image source={placeImage} style={styles.placeImage} />
        <Text style={styles.placeName}>{placeName}</Text>

        <View style={styles.buttonsWrap}>
          <TouchableOpacity onPress={onPlaceItemDelete}>
            <View style={styles.buttonStyles}>
              <Icon size={30} color="red" name="md-trash" />
              <Text style={styles.textStyles}>Delete</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPlaceDetailModalClose}>
            <View style={styles.buttonStyles}>
              <Icon size={30} color="black" name="md-close" />
              <Text style={styles.textStyles}>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

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

export default PlaceDetail;
