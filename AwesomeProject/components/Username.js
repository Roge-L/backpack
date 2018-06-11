import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet} from 'react-native';

export default class Username extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Username"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    margin: 10,
    backgroundColor: "lightblue",
    padding: 10,
    justifyContent: "center"
  }
})

AppRegistry.registerComponent("Username", () => Username);
