import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {
  constructor(props) {
    super(props);

    this.loginHandler = this.loginHandler.bind(this);
  }

  static navigationOptions = {
    header: {
      visible: false
    }
  };

  loginHandler() {
    startMainTabs();
  }

  render() {
    return (
      <ImageBackground
        source={{ uri: "https://www.w3schools.com/howto/img_fjords.jpg" }}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>

          <ButtonWithBackground color="#29aaf4" onPress={() => {}}>
            Switch to login
          </ButtonWithBackground>

          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your email" style={styles.inputStyles} />
            <DefaultInput placeholder="Password" style={styles.inputStyles} />
            <DefaultInput
              placeholder="Confirm password"
              style={styles.inputStyles}
            />
          </View>

          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Login
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  inputStyles: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  bgImage: {
    width: "100%",
    flex: 1
  }
});

export default AuthScreen;
