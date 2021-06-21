import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

const ShopInfoTab = () => {

    
    return (
    <ScrollView style={styles.shopInfo}>
        <View style={styles.shopInfo_header}>
            <View style={styles.shopInfo_header_bgf54e5df8}></View>
            <Text style={styles.shopInfo_header_titlea84bead2}>THÔNG TIN QUÁN</Text>
        </View>
        <View style={styles.shopInfo_form}>
            <View style={styles.shopInfo_form_bgdb1f3437}></View>
            <View style={styles.shopInfo_form_name}>
                <View style={styles.shopInfo_form_name_input265489f5}></View>
                <Text style={styles.shopInfo_form_name_label88cf526c}>Tên quán</Text>
                <Text style={styles.shopInfo_form_name_giaRoomCofee}>GIA ROOM COFEE</Text>
            </View>
            <View style={styles.shopInfo_form_address}>
                <View style={styles.shopInfo_form_address_inputb3df0a16}></View>
                <Text style={styles.shopInfo_form_address_label0470492c}>Địa chỉ</Text>
                <Text style={styles.shopInfo_form_address_x232LeVnVitQun9Tphcm}>232 Lê Văn Việt, Quận 9, TP.HCM</Text>
            </View>
            <View style={styles.shopInfo_form_phone}>
                <View style={styles.shopInfo_form_phone_rectangle1504}></View>
                <Text style={styles.shopInfo_form_phone_labelf38941f3}>Số điện thoại</Text>
                <Text style={styles.shopInfo_form_phone_x0335657533}>0335.6575.33</Text>
            </View>
            <View style={styles.shopInfo_form_description}>
                <View style={styles.shopInfo_form_description_input}></View>
                <Text style={styles.shopInfo_form_description_labelb417a0b6}>Mô tả</Text>
                <Text style={styles.shopInfo_form_description_quanTaLcTiTrcNgChinhCaQun9ViKhongGianThoangAngYenTnhPhuHpHcTpVaLamVic}>Quán tọa lạc tại trục đường chính của quận 9, với không gian thoáng đãng, yên tĩnh, phù hợp để học tập và làm việc. </Text>
            </View>
            <View style={styles.shopInfo_form_image}>
                <View style={styles.shopInfo_form_image_example}>
                    <ReactImage source={require('../assets/i1.png')} style={styles.shopInfo_form_image_example_i1} />
                    <ReactImage source={require('../assets/i2.png')} style={styles.shopInfo_form_image_example_i2} />
                </View>
                <View style={styles.shopInfo_form_image_btnAdd620bac46}>
                    <View style={styles.shopInfo_form_image_btnAdd620bac46_bgee288635}></View>
                    <Svg style={styles.shopInfo_form_image_btnAdd620bac46_addIcon214e3aa4} preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875" fill="rgba(216, 174, 66, 1)"><SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z"  /></Svg>
                </View>
                <Text style={styles.shopInfo_form_image_labela73d757d}>Hình ảnh quán</Text>
            </View>
            <View style={styles.shopInfo_form_menu}>
                <View style={styles.shopInfo_form_menu_btnAdd}>
                    <View style={styles.shopInfo_form_menu_btnAdd_bgcd8dfb81}></View>
                    <Svg style={styles.shopInfo_form_menu_btnAdd_addIcon} preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875" fill="rgba(216, 174, 66, 1)"><SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z"  /></Svg>
                </View>
                <Text style={styles.shopInfo_form_menu_label}>Menu quán</Text>
            </View>
        </View>
        <View style={styles.shopInfo_btnEdit}>
            <View style={styles.shopInfo_btnEdit_bg}></View>
            <Text style={styles.shopInfo_btnEdit_title}>Chỉnh sửa</Text>
        </View>
    </ScrollView>
    );
  
}

export default ShopInfoTab;

ShopInfoTab.propTypes = {

}

ShopInfoTab.defaultProps = {

}


const styles = StyleSheet.create({
  "shopInfo": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(249, 249, 249, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "shopInfo_rectangle22": {
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
  "shopInfo_header": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 393,
    "height": 85,
    "left": 0,
    "top": 0
  },
  "shopInfo_header_bgf54e5df8": {
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
    "height": 85,
    "left": 0,
    "top": 0
  },
  "shopInfo_header_titlea84bead2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 181,
    "height": 27,
    "left": 106,
    "top": 46
  },
  "shopInfo_form": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 351,
    "height": 672,
    "left": 21,
    "top": 109
  },
  "shopInfo_form_bgdb1f3437": {
    "opacity": 1,
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
    "width": 351,
    "height": 672,
    "left": 0,
    "top": 0
  },
  "shopInfo_form_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 13
  },
  "shopInfo_form_name_input265489f5": {
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
  "shopInfo_form_name_label88cf526c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 70,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "shopInfo_form_name_giaRoomCofee": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 104,
    "height": 15,
    "left": 18,
    "top": 38
  },
  "shopInfo_form_address": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 98
  },
  "shopInfo_form_address_inputb3df0a16": {
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
  "shopInfo_form_address_label0470492c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 70,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "shopInfo_form_address_x232LeVnVitQun9Tphcm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 189,
    "height": 15,
    "left": 18,
    "top": 38
  },
  "shopInfo_form_phone": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 183
  },
  "shopInfo_form_phone_rectangle1504": {
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
  "shopInfo_form_phone_labelf38941f3": {
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
  "shopInfo_form_phone_x0335657533": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 80,
    "height": 15,
    "left": 18,
    "top": 38
  },
  "shopInfo_form_description": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 309,
    "height": 98,
    "left": 21,
    "top": 268
  },
  "shopInfo_form_description_input": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 309,
    "height": 76,
    "left": 0,
    "top": 22
  },
  "shopInfo_form_description_labelb417a0b6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 70,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "shopInfo_form_description_quanTaLcTiTrcNgChinhCaQun9ViKhongGianThoangAngYenTnhPhuHpHcTpVaLamVic": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 16,
    "width": 291,
    "height": 57,
    "left": 11,
    "top": 32.5
  },
  "shopInfo_form_image": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 287,
    "height": 123,
    "left": 21,
    "top": 386
  },
  "shopInfo_form_image_example": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 189,
    "height": 94,
    "left": 0,
    "top": 29
  },
  "shopInfo_form_image_example_i1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 92,
    "height": 94,
    "left": 0,
    "top": 0
  },
  "shopInfo_form_image_example_i2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 92,
    "height": 94,
    "left": 97,
    "top": 0
  },
  "shopInfo_form_image_btnAdd620bac46": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 92,
    "height": 94,
    "left": 195,
    "top": 29
  },
  "shopInfo_form_image_btnAdd620bac46_bgee288635": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 92,
    "height": 94,
    "left": 0,
    "top": 0
  },
  "shopInfo_form_image_btnAdd620bac46_addIcon214e3aa4": {
    "opacity": 1,
    "position": "absolute",
    "width": 34.88,
    "height": 34.88,
    "left": 26,
    "top": 31.55
  },
  "shopInfo_form_image_labela73d757d": {
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
  "shopInfo_form_menu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 92,
    "height": 119,
    "left": 22,
    "top": 529
  },
  "shopInfo_form_menu_btnAdd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 92,
    "height": 94,
    "left": 0,
    "top": 25
  },
  "shopInfo_form_menu_btnAdd_bgcd8dfb81": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 92,
    "height": 94,
    "left": 0,
    "top": 0
  },
  "shopInfo_form_menu_btnAdd_addIcon": {
    "opacity": 1,
    "position": "absolute",
    "width": 34.88,
    "height": 34.88,
    "left": 26,
    "top": 31.55
  },
  "shopInfo_form_menu_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 90,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "shopInfo_btnEdit": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 351,
    "height": 35,
    "left": 21,
    "top": 803
  },
  "shopInfo_btnEdit_bg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(249, 174, 81, 1)",
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 351,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "shopInfo_btnEdit_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 68,
    "height": 18,
    "left": 142,
    "top": 9
  }
});