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

    this.state = {
      windowHeight: Dimensions.get("window").height > 500
    };

    Dimensions.addEventListener("change", dimensions => {
      this.setWindowHeight(dimensions.window.height);
    });

    this.loginHandler = this.loginHandler.bind(this);
    this.setWindowHeight = this.setWindowHeight.bind(this);
  }

  static navigationOptions = {
    header: {
      visible: false
    }
  };

  setWindowHeight(windowHeight) {
    this.setState(prevState => ({ windowHeight }));
  }

  loginHandler() {
    startMainTabs();
  }

  render() {
    const minWindowHeight = 500;
    const windowHeightCondition = this.state.windowHeight > minWindowHeight;
    const passwordContainerStyles = {
      flexDirection: windowHeightCondition ? "column" : "row",
      flexWrap: windowHeightCondition ? "wrap" : "nowrap",
      justifyContent: windowHeightCondition ? "flex-start" : "space-between"
    };
    let headingText = null;

    if (windowHeightCondition) {
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
  }
});

export default AuthScreen;
