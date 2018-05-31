import React, {Component} from "react";
import {AppRegistry, Text, View} from "react-native";

export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
