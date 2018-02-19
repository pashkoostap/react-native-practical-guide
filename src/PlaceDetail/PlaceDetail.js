import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";
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

        <View>
          <Button
            title="Delete place"
            color="red"
            onPress={onPlaceItemDelete}
          />

          <Icon size={30} color="red" name="ios-trash" />
          <Button title="Close modal" onPress={onPlaceDetailModalClose} />
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
  }
});

export default PlaceDetail;
