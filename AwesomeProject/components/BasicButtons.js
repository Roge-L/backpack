import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class BasicButtons extends Component {
  _onPressButton() {
    Alert.alert("Boi you tapped the button!")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press me"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent; "center",
    flexDirection: "row",
  },
  buttonContainer: {
    margin: 20
  }
})

AppRegistry.registerComponent("BasicButtons", () => BasicButtons);
