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

import { inputValidator } from "../../utils/validators";
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
          : "album",
      controls: {
        email: {
          value: "",
          valid: false,
          validationRules: {
            isEmail: true
          },
          isTouched: false
        },
        password: {
          value: "",
          valid: false,
          validationRules: {
            minLength: 6
          },
          isTouched: false
        },
        confirmPassword: {
          value: "",
          valid: false,
          validationRules: {
            equalTo: "password"
          },
          isTouched: false
        }
      }
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.updateInputState = this.updateInputState.bind(this);
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

  updateInputState(key, value) {
    const { controls } = this.state;
    const isPasswordKey = key === "password";
    let connectedValue = {};

    if (controls[key].validationRules.equalTo) {
      const equalControl = controls[key].validationRules.equalTo;
      const equalValue = controls[equalControl].value;
      connectedValue = {
        equalTo: equalValue
      };
    } else if (isPasswordKey) {
      connectedValue = {
        equalTo: value
      };
    }

    this.setState(prevState => {
      const { controls } = prevState;

      return {
        controls: {
          ...controls,
          confirmPassword: {
            ...controls.confirmPassword,
            isValid: isPasswordKey
              ? inputValidator(
                  controls.confirmPassword.value,
                  controls.confirmPassword.validationRules,
                  connectedValue
                )
              : controls.confirmPassword.isValid
          },
          [key]: {
            ...controls[key],
            value,
            isTouched: true,
            isValid: inputValidator(
              value,
              controls[key].validationRules,
              connectedValue
            )
          }
        }
      };
    });
  }

  componentWillMount() {
    Dimensions.addEventListener("change", this.dementionsChangeListener);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.dementionsChangeListener);
  }

  render() {
    const {
      controls: { email, password, confirmPassword },
      viewMode
    } = this.state;
    const isPortraitMode = viewMode === "portrait";
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
            <DefaultInput
              placeholder="Your email"
              style={styles.inputStyles}
              value={email.value}
              isValid={email.isValid}
              isTouched={email.isTouched}
              onChangeTextHandler={val => this.updateInputState("email", val)}
            />

            <View style={passwordContainerStyles}>
              <View>
                <DefaultInput
                  placeholder="Password"
                  style={styles.inputStyles}
                  value={password.value}
                  isValid={password.isValid}
                  isTouched={password.isTouched}
                  onChangeTextHandler={val =>
                    this.updateInputState("password", val)
                  }
                />
              </View>

              <View>
                <DefaultInput
                  placeholder="Confirm password"
                  style={styles.inputStyles}
                  value={confirmPassword.value}
                  isValid={confirmPassword.isValid}
                  isTouched={confirmPassword.isTouched}
                  onChangeTextHandler={val =>
                    this.updateInputState("confirmPassword", val)
                  }
                />
              </View>
            </View>
          </View>

          <ButtonWithBackground
            color="#29aaf4"
            disabled={
              !email.isValid || !password.isValid || !confirmPassword.isValid
            }
            onPress={this.loginHandler}
          >
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
