import React, {Component} from "react";
import {AppRegistry, Text, View, Image} from "react-native";

// import Pug from "./components/Pug.js";
// import Welcome from "./components/Welcome.js";
// import PizzaTranslator from "./components/PizzaTranslator.js";
// import Username from "./components/Username.js";
// import Password from "./components/Password.js";
// import StartPageBackground from "./components/StartPageBackground.js";

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image source={require()} style={{flex:1, resizeMode: "cover"}}/>
      </View>
    )
  }
}

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
