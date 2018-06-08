import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

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

AppRegistry.registerComponent("Username", () => Username);
