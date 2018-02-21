import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

class AuthScreen extends Component {
  constructor(props) {
    super(props);

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler() {
    startMainTabs();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>

        <Button title="Switch to login" onPress={() => {}} />

        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your email" style={styles.inputStyles} />
          <DefaultInput placeholder="Password" style={styles.inputStyles} />
          <DefaultInput
            placeholder="Confirm password"
            style={styles.inputStyles}
          />
        </View>

        <Button title="Login" onPress={this.loginHandler} />
      </View>
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
    backgroundColor: "#eee"
  }
});

export default AuthScreen;
