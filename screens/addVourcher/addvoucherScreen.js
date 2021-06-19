import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class addvoucherScreen extends Component {

render() {
    
    return (
    <ScrollView dstyle={styles.addvourcher}>
        <View style={styles.addvourcher_btnHuy}>
            <View style={styles.addvourcher_btnHuy_rectangle1505}></View>
            <Text  style={styles.addvourcher_btnHuy_luLi}>LƯU LẠI</Text>
        </View>
        <View  style={styles.addvourcher_form}>
            <View  style={styles.addvourcher_form_bgdde23b2a}></View>
            <View  style={styles.addvourcher_form_titlea5a00643}>
                <View style={styles.addvourcher_form_titlea5a00643_input60ff3925}></View>
                <Text  style={styles.addvourcher_form_titlea5a00643_label9535316c}>Tên ưu đãi</Text>
            </View>
            <View  style={styles.addvourcher_form_enddate}>
                <View  style={styles.addvourcher_form_enddate_input}></View>
                <Text  style={styles.addvourcher_form_enddate_label}>Ngày hết hạn</Text>
            </View>
        </View>
        <View  style={styles.addvourcher_header}>
            <View style={styles.addvourcher_header_bg}></View>
            <ReactImage  source={require('./assets/back.png')} style={styles.addvourcher_header_back} />
            <Text  style={styles.addvourcher_header_title}>THÊM VOUCHER</Text>
        </View>
    </ScrollView>
    );
  }
}

addvoucherScreen.propTypes = {

}

addvoucherScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "addvourcher": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(249, 249, 249, 1)",
    "width": 393,
    "height": 851,
  
  },
  "addvourcher_rectangle22": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(220, 220, 220, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "addvourcher_btnHuy": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 360,
    "height": 36,
    "left": 17,
    "top": 730
  },
  "addvourcher_btnHuy_rectangle1505": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(249, 174, 81, 1)",
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 363,
    "height": 36,
  },
  "addvourcher_btnHuy_luLi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 70,
    "height": 17,
    "left": 160,
    "top": 10
  },
  "addvourcher_form": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 363,
    "height": 600,
    "left": 15,
    "top": 110
  },
  "addvourcher_form_bgdde23b2a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.16,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 363,
    "height": 600,
    "left": 0,
    "top": 0
  },
  "addvourcher_form_titlea5a00643": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 348,
    "height": 65,
    "left": 7,
    "top": 9
  },
  "addvourcher_form_titlea5a00643_input60ff3925": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(243, 243, 243, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 348,
    "height": 43,
    "left": 0,
    "top": 22
  },
  "addvourcher_form_titlea5a00643_label9535316c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 100,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "addvourcher_form_enddate": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 348,
    "height": 65,
    "left": 7,
    "top": 87
  },
  "addvourcher_form_enddate_input": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(243, 243, 243, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 348,
    "height": 43,
    "left": 0,
    "top": 22
  },
  "addvourcher_form_enddate_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 100,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "addvourcher_header": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 393,
    "height": 86,
    "left": 0,
    "top": 0
  },
  "addvourcher_header_bg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "shadowOpacity": 0.16,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 393,
    "height": 86,
    "left": 0,
    "top": 0
  },
  "addvourcher_header_back": {
    "opacity": 1,
    "position": "absolute",
    "width": 20,
    "height": 20,
    "left": 19,
    "top": 45
  },
  "addvourcher_header_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 167,
    "height": 27,
    "left": 113,
    "top": 47
  }
});