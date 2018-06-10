import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet} from 'react-native';

export default class Username extends Component {
  render() {
    return (
      <View style={{margin: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Username"
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    margin: 10
  }
})

AppRegistry.registerComponent("Username", () => Username);
