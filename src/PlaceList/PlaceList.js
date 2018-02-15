import React from "react";
import { View, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = ({ places }) => {
  return (
    <View style={styles.listContainer}>
      {places.map((place, i) => {
        return (
          <ListItem
            key={i}
            placeName={place}
            onItemPressed={() => alert("item pressed" + i)}
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
