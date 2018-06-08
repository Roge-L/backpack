import React, {Component} from "react";
import {AppRegistry, Text, View, ImageBackground} from "react-native";

export default class StartPageBackground extends Component {

  render() {
    return (
      <ImageBackground source={"./images/backpack.png"}
        <Text>OK</Text>
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent("StartPageBackground", () => StartPageBackground);
