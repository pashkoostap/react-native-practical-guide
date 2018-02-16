import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = ({ places, onPlaceItemDelete }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={({ item: { key, value } }) => (
        <ListItem
          placeName={value}
          onItemPressed={() => onPlaceItemDelete(key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    alignSelf: "stretch",
    marginBottom: 40
  }
});

export default PlaceList;
