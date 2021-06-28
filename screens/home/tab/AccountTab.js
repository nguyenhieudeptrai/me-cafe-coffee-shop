import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

const AccountTab = () => {

    return (
    <ScrollView style={styles.account}>
        <View style={styles.account_header}>
            <View style={styles.account_header_bg860642ed}></View>
            <Text style={styles.account_header_title1103c87d}>THÔNG TIN TÀI KHOẢN</Text>
        </View>
        <View style={styles.account_form}>
            <View style={styles.account_form_bgfec2c280}></View>
            <View style={styles.account_form_name11525854}>
                <View style={styles.account_form_name11525854_input316c160e}></View>
                <Text style={styles.account_form_name11525854_labelc743add8}>Họ và tên</Text>
                <Text style={styles.account_form_name11525854_nguynMinhAnh}>Nguyễn Minh Anh</Text>
            </View>
            <View style={styles.account_form_addressf9fa9f46}>
                <View style={styles.account_form_addressf9fa9f46_input42df5c7e}></View>
                <Text style={styles.account_form_addressf9fa9f46_label2b6f35e8}>Địa chỉ</Text>
                <Text style={styles.account_form_addressf9fa9f46_x232LeVnVitQun9Tphcm}>232 Lê Văn Việt, Quận 9, TP.HCM</Text>
            </View>
            <View style={styles.account_form_phonedbf082b5}>
                <View style={styles.account_form_phonedbf082b5_inputaba49172}></View>
                <Text style={styles.account_form_phonedbf082b5_label318bf2ec}>Số điện thoại</Text>
                <Text style={styles.account_form_phonedbf082b5_x0335657533}>0335.6575.33</Text>
            </View>
            <View style={styles.account_form_mail}>
                <View style={styles.account_form_mail_inputa77003a1}></View>
                <Text style={styles.account_form_mail_labelf92dd575}>Email</Text>
                <Text style={styles.account_form_mail_nguyenminhanh}>Nguyenminhanh@gmail.com</Text>
            </View>
            <View style={styles.account_form_job7c17c74a}>
                <View style={styles.account_form_job7c17c74a_input}></View>
                <Text style={styles.account_form_job7c17c74a_label}>Chức vụ</Text>
                <Text style={styles.account_form_job7c17c74a_qunL}>Quản lý </Text>
            </View>
        </View>
        <View style={styles.account_btnEdit}>
            <View style={styles.account_btnEdit_bg88e5874f}></View>
            <Text style={styles.account_btnEdit_title}>Chỉnh sửa</Text>
        </View>
        <View style={styles.account_info}>
            <View style={styles.account_info_bg}></View>
            <View style={styles.account_info_left}>
                <Svg style={styles.account_info_left_avatar} preserveAspectRatio="none" viewBox="0 0 60 60" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-avatar" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../assets/avatar.png')} x="0" y="0" width="60.00px" height="60.00px" /></Pattern></Defs><SvgPath d="M 30 0 C 46.56854248046875 0 60 13.43145942687988 60 30 C 60 46.56854248046875 46.56854248046875 60 30 60 C 13.43145942687988 60 0 46.56854248046875 0 30 C 0 13.43145942687988 13.43145942687988 0 30 0 Z" fill="url(#img-avatar)" /></Svg>
                <Text style={styles.account_info_left_job}>Quản lý</Text>
                <Text style={styles.account_info_left_name}>Nguyễn Minh Anh</Text>
            </View>
            <View style={styles.account_info_right}>
                <Text style={styles.account_info_right_address}>232 Lê Văn Việt, quận 9, TP.HCM</Text>
                <Text style={styles.account_info_right_phone}>Số điện thoại: 0335.6575.33</Text>
                <Text style={styles.account_info_right_shopName}>GIA ROOM COFFEE</Text>
            </View>
        </View>
    </ScrollView>
    );
}

export default AccountTab;
AccountTab.propTypes = {

}

AccountTab.defaultProps = {

}


const styles = StyleSheet.create({
  "account": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(249, 249, 249, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "account_rectangle22": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(220, 220, 220, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "account_header": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 393,
    "height": 58,
    "left": 0,
    "top": 0
  },
  "account_header_bg860642ed": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 393,
    "height": 58,
    "left": 0,
    "top": 0
  },
  "account_header_title1103c87d": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 80,
    "top": 23
  },
  "account_form": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 351,
    "height": 604,
    "top": 179,
    "alignSelf":'center'
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
  "account_form_name11525854": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 49
  },
  "account_form_name11525854_input316c160e": {
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
  "account_form_name11525854_labelc743add8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 64,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "account_form_name11525854_nguynMinhAnh": {
    "position": "absolute",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 18,
    "top": 38
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
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 318,
    "height": 35,
    "left": 36,
    "top": 650
  },
  "account_btnEdit_bg88e5874f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(249, 174, 81, 1)",
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 318,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "account_btnEdit_title": {
    "position": "absolute",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 126,
    "top": 10
  },
  "account_info": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 313,
    "height": 139,
    "left": 40,
    "top": 76
  },
  "account_info_bg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 28,
    "borderTopRightRadius": 28,
    "borderBottomLeftRadius": 28,
    "borderBottomRightRadius": 28,
    "width": 350,
    "height": 139,
    "alignSelf": 'center',
    "top": 0
  },
  "account_info_left": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 99,
    "height": 98,
    "left": 10,
    "top": 21
  },
  "account_info_left_avatar": {
    "opacity": 1,
    "position": "absolute",
    "width": 60,
    "height": 60,
    "left": 19,
    "top": 0
  },
  "account_info_left_job": {
    "position": "absolute",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "left": 23,
    "top": 84
  },
  "account_info_left_name": {
    "position": "absolute",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 0,
    "top": 70
  },
  "account_info_right": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 189,
    "height": 64,
    "left": 118,
    "top": 21
  },
  "account_info_right_address": {
    "position": "absolute",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 0,
    "top": 28
  },
  "account_info_right_phone": {
    "position": "absolute",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 0,
    "top": 49
  },
  "account_info_right_shopName": {
    "position": "absolute",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 0,
    "top": 0
  }
});