import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const AccountTab = () => {

  return (
    <View style={styles.account}>
      <View style={styles.account_header}>
        <Text style={styles.account_header_title}>THÔNG TIN TÀI KHOẢN</Text>
      </View>
      <ScrollView style={styles.account_form}>
        {/* <View style={styles.account_form_bgfec2c280}></View> */}
        <View style={styles.account_info_bg}>
          <View style={styles.account_info}>
            <View style={styles.account_info_left}>
              <Svg style={styles.account_info_left_avatar} preserveAspectRatio="none" viewBox="0 0 60 60" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-avatar" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../assets/avatar.png')} x="0" y="0" width="60.00px" height="60.00px" /></Pattern></Defs><SvgPath d="M 30 0 C 46.56854248046875 0 60 13.43145942687988 60 30 C 60 46.56854248046875 46.56854248046875 60 30 60 C 13.43145942687988 60 0 46.56854248046875 0 30 C 0 13.43145942687988 13.43145942687988 0 30 0 Z" fill="url(#img-avatar)" /></Svg>
              <Text style={styles.account_info_left_name}>Nguyễn Minh Anh</Text>
              <Text style={styles.account_info_left_job}>Quản lý</Text>
            </View>
            <View style={styles.account_info_right}>
              <Text style={styles.account_info_right_shopName}>GIA ROOM COFFEE</Text>
              <Text style={styles.account_info_right_phone}>Số điện thoại: 0335.6575.33</Text>
              <Text style={styles.account_info_right_address}>232 Lê Văn Việt, quận 9, TP.HCM</Text>
            </View>
          </View>
        </View>
        <View style={styles.account_form_textfield}>
          <Text style={styles.account_form_textfield_label}>Họ và tên</Text>
          <Text style={styles.account_form_textfield_value}>Nguyễn Minh Anh</Text>
        </View>
        <View style={styles.account_form_textfield}>
          <Text style={styles.account_form_textfield_label}>Địa chỉ</Text>
          <Text style={styles.account_form_textfield_value}>232 Lê Văn Việt, Quận 9, TP.HCM</Text>
        </View>
        <View style={styles.account_form_textfield}>
          <Text style={styles.account_form_textfield_label}>Số điện thoại</Text>
          <Text style={styles.account_form_textfield_value}>0335.6575.33</Text>
        </View>
        <View style={styles.account_form_textfield}>
          <Text style={styles.account_form_textfield_label}>Email</Text>
          <Text style={styles.account_form_textfield_value}>Nguyenminhanh@gmail.com</Text>
        </View>
        <View style={styles.account_form_textfield}>
          <Text style={styles.account_form_textfield_label}>Chức vụ</Text>
          <Text style={styles.account_form_textfield_value}>Quản lý </Text>
        </View>
        <View style={styles.account_btnEdit}>
          <View style={styles.account_btnEdit_bg88e5874f}>
            <Text style={styles.account_btnEdit_title}>Chỉnh sửa</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AccountTab;
AccountTab.propTypes = {

}

AccountTab.defaultProps = {

}


const styles = StyleSheet.create({
  "account": {
    "backgroundColor": "rgba(249, 249, 249, 1)",
    "width": "100%",
    "height": 851,
    "flex": 1
  },
  "account_header": {
    
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": "100%",
    marginBottom:10
  },
  "account_header_title": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    alignSelf:"center",
    marginTop:40,
    marginBottom:15
  },
  "account_form": {
    "backgroundColor": "transparent",
    "width": "100%",
  },
  "account_form_bgfec2c280": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "left": 0,
    "top": 0
  },
  "account_form_textfield": {
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 65,
    "marginTop": 20,
    "marginLeft": "5%",
  },
  "account_form_name11525854_input316c160e": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": "90%",
    "height": 43,
    "marginTop": 20,
    "marginLeft": "5%"
  },
  "account_form_textfield_label": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": "90%",
    "height": 15,
    "marginLeft": "5%",
  },
  "account_form_textfield_value": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": '90%',
    "height": 20,
    "marginLeft": 20,
    "marginTop": 15
  },
  "account_form_addressf9fa9f46": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 128
  },
  "account_form_addressf9fa9f46_input42df5c7e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 309,
    "height": 43,
    "left": 0,
    "top": 22
  },
  "account_form_addressf9fa9f46_label2b6f35e8": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 3,
    "top": 0
  },
  "account_form_addressf9fa9f46_x232LeVnVitQun9Tphcm": {
    "position": "absolute",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 18,
    "top": 38
  },
  "account_form_phonedbf082b5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 207
  },
  "account_form_phonedbf082b5_inputaba49172": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 309,
    "height": 43,
    "left": 0,
    "top": 22
  },
  "account_form_phonedbf082b5_label318bf2ec": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 3,
    "top": 0
  },
  "account_form_phonedbf082b5_x0335657533": {
    "position": "absolute",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 18,
    "top": 38
  },
  "account_form_mail": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 67,
    "left": 24,
    "top": 367
  },
  "account_form_mail_inputa77003a1": {
    "position": "absolute",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "left": 0,
    "top": 24
  },
  "account_form_mail_labelf92dd575": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 4,
    "top": 0
  },
  "account_form_mail_nguyenminhanh": {
    "position": "absolute",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 16,
    "left": 15,
    "top": 37.5
  },
  "account_form_job7c17c74a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 66,
    "left": 24,
    "top": 286
  },
  "account_form_job7c17c74a_input": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 309,
    "height": 43,
    "left": 0,
    "top": 23
  },
  "account_form_job7c17c74a_label": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 0,
    "top": 0
  },
  "account_form_job7c17c74a_qunL": {
    "position": "absolute",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 16,
    "left": 15,
    "top": 36.5
  },
  "account_btnEdit": {
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 35,
    "alignSelf": "center",
    "marginBottom": 20
  },
  "account_btnEdit_bg88e5874f": {
    "backgroundColor": "rgba(249, 174, 81, 1)",
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": "100%",
    "height": 35,
  },
  "account_btnEdit_title": {
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 10
  },
  "account_info": {
    "display": "flex",
    // "gap": 10,
    "flexWrap": "wrap",
    "width": "100%",
    "height": 139,
  },
  "account_info_bg": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 28,
    "borderTopRightRadius": 28,
    "borderBottomLeftRadius": 28,
    "borderBottomRightRadius": 28,
    "width": "90%",
    "height": 139,
    "alignSelf": 'center',
    "marginTop": 20
  },
  "account_info_left": {
    "backgroundColor": "transparent",
    "width": "30%",
    "height": "80%",
    "marginLeft": "5%",
    "marginTop": "2%"
  },
  "account_info_left_avatar": {
    "width": 70,
    "height": 70,
    "marginTop": 0,
    "alignSelf": "center"
  },
  "account_info_left_job": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 5
  },
  "account_info_left_name": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 5
  },
  "account_info_right": {
    "backgroundColor": "transparent",
    "width": "60%",
    "height": 64,
    "marginRight": "5%",
    "marginTop": "5%"
  },
  "account_info_right_address": {
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "marginTop": 5,
    "textAlign": "center",
  },
  "account_info_right_phone": {
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "marginTop": 5,
    "textAlign": "center",
  },
  "account_info_right_shopName": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "marginTop": 5,
    "textAlign": "center",
  }
});