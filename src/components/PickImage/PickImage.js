import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";

const defaultImage = {
  uri:
    "http://ukrainetrek.com/blog/wp-content/uploads/2011/12/ukrainian-carpathians-landscape-16.jpg"
};

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image style={styles.image} source={defaultImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    height: 150,
    width: "80%"
  },
  button: {
    margin: 10
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default PickImage;
