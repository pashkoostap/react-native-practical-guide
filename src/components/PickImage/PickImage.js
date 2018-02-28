import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

const defaultImage = {
  uri:
    "http://ukrainetrek.com/blog/wp-content/uploads/2011/12/ukrainian-carpathians-landscape-16.jpg"
};

class PickImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedImage: null
    };

    this.pickImageHandler = this.pickImageHandler.bind(this);
  }

  pickImageHandler() {
    ImagePicker.showImagePicker(
      {
        title: "Pick an Image",
        storageOptions: {
          path: "download"
        }
      },
      res => {
        if (res.didCancel) {
          alert("Canceled by user");
        } else if (res.error) {
          alert("Unexpected error");
        } else {
          const pickedImage = { uri: res.uri, base64: res.data };
          this.setState({ pickedImage });
          this.props.onImagePick(pickedImage);
        }
      }
    );
  }

  render() {
    const { pickedImage } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image style={styles.image} source={pickedImage} />
        </View>

        <View style={styles.button}>
          <Button title="Pick Image" onPress={this.pickImageHandler} />
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
