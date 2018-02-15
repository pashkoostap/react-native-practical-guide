import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ placeName, onItemPressed }) => {
  return (
    <TouchableOpacity onPress={onItemPressed}>
      <View style={styles.listItem}>
        <Text tyle={styles.listItemText}>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 10
  }
});

export default ListItem;
