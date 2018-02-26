import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";

const ButtonWithBackground = ({ onPress, children, color, disabled }) => {
  const innerContent = (
    <View
      style={[
        styles.button,
        { backgroundColor: color },
        disabled ? styles.disabled : null
      ]}
    >
      <Text style={[styles.text, disabled ? styles.disabledText : null]}>
        {children.toUpperCase()}
      </Text>
    </View>
  );

  if (disabled) {
    return innerContent;
  }

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
  },
  disabledText: {
    color: "#aaa"
  },
  disabled: {
    backgroundColor: "#eee",
    borderColor: "#aaa"
  }
});

export default ButtonWithBackground;
