import React, {Component} from "react";
import {AppRegistry, Text, View, Button, StyleSheet, Image} from "react-native";

import Username from "AwesomeProject/components/Username.js";
import Password from "AwesomeProject/components/Password.js";

export default class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render () {
    return(
      <View style={{flex: 1, backgroundColor: "steelblue"}}>
        <View style={{flex: 0.75}}/>
        <View style={styles.iconContainer}>
          <Image source={require("AwesomeProject/images/backpack.png")} style={styles.icon}/>
          <Text style={styles.title}>Roger Was Here</Text>
          <Text style={styles.subtitle}>The only app you need for school.</Text>
        </View>
        <View style={{flex: 0.45}}/>
        <Username/>
        <Password/>

        <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={() => this.props.navigation.navigate("Home")}/>
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate("Signup")}/>
        </View>

        <View style={{flex: 1}}/>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  icon: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    color: "lightblue"
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "lightblue"
  },
  buttonContainer: {
    flex: 0.75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
})

AppRegistry.registerComponent("LoginScreen", () => LoginScreen)
