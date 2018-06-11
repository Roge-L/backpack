import React, {Component} from "react";
import {AppRegistry, Text, View} from "react-native";

export default class SignupScreen extends Component {
  render () {
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text>This is the Signup Screen</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent("SignupScreen", () => SignupScreen)
