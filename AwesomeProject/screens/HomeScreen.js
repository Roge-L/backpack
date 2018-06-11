import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet} from "react-native";

export default class HomeScreen extends Component {
  render () {
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text>This is the Home Screen</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent("HomeScreen", () => HomeScreen)
