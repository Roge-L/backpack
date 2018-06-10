import React, {Component} from "react";
import {AppRegistry, Text, View, ImageBackground, StyleSheet} from "react-native";

// import Pug from "./components/Pug.js";
// import Welcome from "./components/Welcome.js";
// import PizzaTranslator from "./components/PizzaTranslator.js";
import Username from "./components/Username.js";
import Password from "./components/Password.js";
// import StartPageBackground from "./components/StartPageBackground.js";

export default class AwesomeProject extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./images/backpack.jpg")}
        style={styles.backgroundContainer}>
        <Username/>
        <Password/>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: 700,
    height: null,
  }
});

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
