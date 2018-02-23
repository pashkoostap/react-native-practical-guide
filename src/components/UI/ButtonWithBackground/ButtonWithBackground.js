import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";

const ButtonWithBackground = ({ onPress, children, color }) => {
  const innerContent = (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.text}>{children.toUpperCase()}</Text>
    </View>
  );
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={onPress}>
        {innerContent}
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress}>{innerContent}</TouchableOpacity>
    );
  }
};

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
