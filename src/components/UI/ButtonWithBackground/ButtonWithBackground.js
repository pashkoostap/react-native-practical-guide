import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ButtonWithBackground = ({ onPress, children, color }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.text}>{children.toUpperCase()}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    borderRadius: 2
  },
  text: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default ButtonWithBackground;
