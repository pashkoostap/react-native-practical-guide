import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = ({ placeName, placeImage, onItemPressed }) => {
  return (
    <TouchableOpacity onPress={onItemPressed}>
      <View style={styles.listItem}>
        <Image source={placeImage} style={styles.placeImageStyles} />
        <Text tyle={styles.listItemText}>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 10
  },
  placeImageStyles: {
    marginRight: 10,
    height: 40,
    width: 40
  }
});

export default ListItem;
