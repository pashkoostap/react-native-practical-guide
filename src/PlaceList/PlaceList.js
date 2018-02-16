import React from "react";
import { View, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = ({ places, onPlaceItemDelete }) => {
  return (
    <View style={styles.listContainer}>
      {places.map((place, i) => {
        return (
          <ListItem
            key={i}
            placeName={place}
            onItemPressed={() => onPlaceItemDelete(i)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    alignSelf: "stretch"
  }
});

export default PlaceList;
