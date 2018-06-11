import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet, Image, Button} from "react-native";

import Username from "./components/Username.js";
import Password from "./components/Password.js";

export default class LoginScreen extends Component {
  render () {
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text>This is the Login Screen</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent("LoginScreen", () => LoginScreen)
