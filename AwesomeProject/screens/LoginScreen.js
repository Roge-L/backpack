import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet, Image} from "react-native";

// import Username from "./components/Username.js";
// import Password from "./components/Password.js";

export default class LoginScreen extends Component {
  render () {
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text>This is the Login Screen</Text>
      </View>
      // <View style={{flex: 1, backgroundColor: "steelblue"}}>
      //   <View style={{flex: 0.75}}/>
      //   <View style={styles.iconContainer}>
      //     <Image source={require("./images/backpack.png")} style={styles.icon}/>
      //     <Text style={styles.title}>Backpack</Text>
      //     <Text style={styles.subtitle}>The only app you need for school.</Text>
      //   </View>
      //   <View style={{flex: 0.45}}/>
      //   <Username/>
      //   <Password/>
      //   <View style={{flex: 1}}/>
      // </View>
    )
  }
}

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

AppRegistry.registerComponent("LoginScreen", () => LoginScreen)
