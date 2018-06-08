import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class Password extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{margin: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Password"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("Password", () => Password);
