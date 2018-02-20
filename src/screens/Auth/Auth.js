import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
  constructor() {
    super();

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler() {
    startMainTabs();
  }

  render() {
    return (
      <View>
        <Text>Auth screen</Text>

        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default AuthScreen;
