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

// Functionalities
// School Schedule - Events, Due Dates, Test Dates
// Time Management System
// Priorities List
// Grades
// Grade Calculator
// Teacher Comments
// File Sharing
// Scanning System

// Priorities
// 1. Basic UI
// 2. Grades
// 3. Grades Calculator
// 4. Priorities List or Time Management System
AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
