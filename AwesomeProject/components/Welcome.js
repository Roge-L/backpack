import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet} from "react-native";

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: "Roger"
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.bigAndBlue}>{this.props.message}</Text>
        <Text style={styles.green}>{this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigAndBlue: {
    color: "blue",
    fontSize: 20,
  },
  green: {
    color: "green",
    fontStyle: "italic",
    fontFamily: "Arial",
    fontSize: 18,
  },
});

AppRegistry.registerComponent("Welcome", () => Welcome);
