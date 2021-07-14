import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';


const RegisterScreen = ({ navigation }) => {
  const onPressBack = () => {
    navigation.goBack();
  }
  
  return (
    <View style={styles.register}>
      <TouchableHighlight onPress={onPressBack} style={styles.register_header}>
        <View>
          <ReactImage source={require('./assets/back.png')} style={styles.register_header_back} />
          <Text style={styles.register_header_title}>Quay lại </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.register_logo}>
        <ReactImage source={require('./assets/logoPng.png')} style={styles.register_logo_logoPng} />
        <ReactImage source={require('./assets/asset1.png')} style={styles.register_logo_asset1} />
        <Text style={styles.register_logo_appName}>Ứng dụng cho của hàng</Text>
      </View>
      <View style={styles.register_text_Title}><Text style={styles.register_text_NhapSDT}>Nhập số điện thoại của bạn</Text></View>
      <View style={styles.register_inputPhone}>
        <View style={styles.register_inputPhone_country}>
          <ReactImage source={require('./assets/countryLogo.png')} style={styles.register_inputPhone_countryLogo} />
          <Text style={styles.register_text_mavung}>+84</Text>
        </View>

        <TextInput style={styles.register_inputPhone_input} placeholder="Nhập số điện thoại..." />
      </View>
      <TouchableHighlight style={styles.register_continue}>
        <View style={styles.register_continue_ngK}><Text style={{ "marginTop": -1.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>ĐĂNG  KÝ</Text></View>
      </TouchableHighlight>
      <ReactImage source={require('./assets/bg.png')} style={styles.register_bg} />
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  "register": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    flex: 1,
    alignItems: "center"
  },
  "register_header": {
    alignSelf: "flex-start",
    "marginLeft": 13,
    "marginTop": 37,
  },


  "register_header_back": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 20,
    "height": 20,
    "left": 0,
    "top": 0
  },
  "register_header_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 53,
    "height": 17,
    "left": 35,
    "top": 2
  },
  "register_text_Title": {
    alignSelf: "flex-start",
    "alignSelf": 'center',
    "marginTop": 50,
  },
  "register_text_mavung": {
    "marginTop": -1.5,
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 18,
  },
  "register_text_NhapSDT": {
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 18,
    "width": 200,
    "height": 20,
    "left": 35,
  },

  "register_logo": {
    "marginTop": "5%",
  },

  "register_logo_logoPng": {
    "width": 268,
    "height": 191,
  },
  "register_logo_asset1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 118,
    "height": 38,
    "left": 134,
    "top": 121
  },
  "register_logo_appName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 170,
    "height": 19,
    "left": 49,
    "top": 172
  },
  "register_inputPhone": {
    "borderWidth": 2,
    "borderRadius": 5,
    "borderColor": "rgba(0, 0, 0, 0.4)",
    "width": "70%",
    "height": 48,
    "marginTop": "5%",
    "flexDirection": "row"
  },
  "register_inputPhone_line7": {
    "opacity": 1,
    "position": "absolute",
    "width": 1,
    "height": 36,
    "left": 73,
    "top": 6
  },
  "register_inputPhone_path6435c7fa1c5": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 327,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "register_inputPhone_country": {
    borderRightWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10
  },
  "register_inputPhone_countryLogo": {
    "width": 26,
    "height": 26,
  },
  "register_inputPhone_input": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontFamily": "Roboto",
    "lineHeight": 14,
    "flex": 1,
    "paddingLeft": 10
  },
  "register_continue": {
    "marginTop": 30,
    "backgroundColor": "rgba(212, 174, 57, 1)",
    "borderRadius": 5,
    "top": 5
  },
  "register_continue_path643": {
    "width": "40%",
    "height": 33,
  },
  "register_continue_ngK": {
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "paddingLeft": 30,
    "paddingTop": 10,
    "paddingRight": 30,
    "paddingBottom": 10
  },
  "register_bg": {
    "position": "absolute",
    "width": "100%",
    "height": 236,
    "bottom": 0
  }
});