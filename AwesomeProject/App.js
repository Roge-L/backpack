import React, {Component} from "react";
import {AppRegistry, Text, View, Image} from "react-native";

import Pug from "./components/Pug.js";
import Welcome from "./components/Welcome.js";

export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Welcome message="This is my message Prop given to my Welcome component"/>
        <Pug />
      </View>
    )
  }
}

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
