import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet, Image} from "react-native";
import {createStackNavigator} from "react-navigation";

import Username from "./components/Username.js";
import Password from "./components/Password.js";

import LoginScreen from "./screens/LoginScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import SignupScreen from "./screens/SignupScreen.js";

export default class AwesomeProject extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Signup: SignupScreen
});

// const styles=StyleSheet.create({
//   iconContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   },
//   icon: {
//     width: 200,
//     height: 200
//   },
//   title: {
//     fontSize: 40,
//     marginTop: 20,
//     color: "lightblue"
//   },
//   subtitle: {
//     marginTop: 8,
//     fontSize: 14,
//     color: "lightblue"
//   }
// })

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
