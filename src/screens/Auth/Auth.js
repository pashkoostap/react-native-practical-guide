import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";

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

        <TextInput placeholder="Your email" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm password" />

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
  }
});

export default AuthScreen;
