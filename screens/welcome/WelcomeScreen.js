import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';


const WelcomeScreen = ({ navigation }) => {

  // setTimeout(() => {
  //   navigation.reset({
  //     index: 0,
  //     actions: ["Home"]
  //   })
  // }, 3000);

  return (
    <View style={styles.WelcomeScreen}>
      <View style={styles.WelcomeScreen_block}>
        <ReactImage source={require('./assets/logoPng.png')} style={styles.WelcomeScreen_logoPng} />
        <ReactImage source={require('./assets/asset1.png')} style={styles.WelcomeScreen_asset1} />
        <Text style={styles.WelcomeScreen_appName}>ADMIN MANAGEMENT</Text>
      </View>
      <ReactImage source={require('./assets/bg.png')} style={styles.WelcomeScreen_bg} />
    </View>
  );
}

export default WelcomeScreen;


const styles = StyleSheet.create({
  "WelcomeScreen": {
    flex: 1,
    alignItems: "center",
    "backgroundColor": "rgba(255, 255, 255, 1)",
  },
  "WelcomeScreen_block": {
    alignSelf: "center",
    margin:"50%",
    
    
  },
  "WelcomeScreen_logoPng": {
    "width": 268,
    "height": 191,
  },
  "WelcomeScreen_asset1": {
    "position": "absolute",
    "width": 118,
    "height": 38,
    "left": 197,
    "top": 130
  },
  "WelcomeScreen_appName": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    alignSelf: "center",
  },
  "WelcomeScreen_bg": {
    "position": "absolute",
    "width": "100%",
    "height": 236,
    "left": 0,
    "bottom": 0
  }
});