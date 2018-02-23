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

    this.windowBreakPoint = 500;

    this.state = {
      viewMode:
        Dimensions.get("window").height > this.windowBreakPoint
          ? "portrait"
          : "album"
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.dementionsChangeListener = this.dementionsChangeListener.bind(this);
  }

  static navigationOptions = {
    header: {
      visible: false
    }
  };

  dementionsChangeListener(dimensions) {
    this.setState(prevState => ({
      viewMode:
        dimensions.window.height > this.windowBreakPoint ? "portrait" : "album"
    }));
  }

  loginHandler() {
    startMainTabs();
  }

  componentWillMount() {
    Dimensions.addEventListener("change", this.dementionsChangeListener);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.dementionsChangeListener);
  }

  render() {
    const isPortraitMode = this.state.viewMode === "portrait";
    const passwordContainerStyles = isPortraitMode
      ? styles.passwordContainerPortrait
      : styles.passwordContainerAlbum;
    let headingText = null;

    if (isPortraitMode) {
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
            <View style={passwordContainerStyles}>
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
  passwordContainerPortrait: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  passwordContainerAlbum: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default AuthScreen;
