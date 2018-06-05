import React, {Component} from "react";
import {AppRegistry, View, Text, Image} from "react-native";

export default class Pug extends Component {
  render() {
    let pug = {
      uri: 'https://wallpapercave.com/wp/87HMOXr.jpg'
    };
    return (
      <Image source={pug} style={{width: 412, height: 683}}/>
    )
  }
}

AppRegistry.registerComponent("Pug", () => Pug);
