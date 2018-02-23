import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions
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
    let headingText = null;

    if (Dimensions.get("window").height > 500) {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }

    return (
      <ImageBackground
        source={{ uri: "https://www.w3schools.com/howto/img_fjords.jpg" }}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          {headingText}

          <ButtonWithBackground color="#29aaf4" onPress={() => {}}>
            Switch to login
          </ButtonWithBackground>

          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your email" style={styles.inputStyles} />
            <View style={styles.passwordContainer}>
              <View>
                <DefaultInput
                  placeholder="Password"
                  style={styles.inputStyles}
                />
              </View>
              <View>
                <DefaultInput
                  placeholder="Confirm password"
                  style={styles.inputStyles}
                />
              </View>
            </View>
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
    borderColor: "#bbb",
    minWidth: "45%"
  },
  bgImage: {
    width: "100%",
    flex: 1
  },
  passwordContainer: {
    flexDirection: Dimensions.get("window").height > 500 ? "column" : "row",
    flexWrap: Dimensions.get("window").height > 500 ? "wrap" : "nowrap",
    justifyContent:
      Dimensions.get("window").height > 500 ? "flex-start" : "space-between"
  }
});

export default AuthScreen;
