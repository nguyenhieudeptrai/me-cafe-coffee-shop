import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';


const AddVoucherScreen = ({ navigation }) => {
  const onPressBack = () => {
    navigation.goBack();
  }
  const onPressSave = () => {
    navigation.reset({
      index: 0,
      navigate: ["Home"]
    });
  }

  return (
    <View style={styles.addvourcher}>
      <TouchableOpacity onPress={onPressBack} style={styles.addvourcher_header}>
        <ReactImage source={require('./assets/back.png')} style={styles.addvourcher_header_back} />
        <Text style={styles.addvourcher_header_title}>THÊM VOUCHER</Text>
      </TouchableOpacity>
      <View style={styles.addvourcher_form}>
        <View style={styles.addvourcher_form_title}>
          <Text style={styles.addvourcher_form_title_label}>Tên ưu đãi</Text>
          <TextInput style={styles.addvourcher_form_title_input} placeholder="Nhập tên"/>
        </View>
        <View style={styles.addvourcher_form_enddate}>
          <View style={styles.addvourcher_form_enddate_input}></View>
          <Text style={styles.addvourcher_form_enddate_label}>Ngày hết hạn</Text>
        </View>
        <View style={styles.addvourcher_form_sotiengiamgia}>
          <View style={styles.addvourcher_form_sotiengiamgia_input}></View>
          <Text style={styles.addvourcher_form_sotiengiamgia_label}>Số tiền giảm giá</Text>
        </View>
        <View style={styles.addvourcher_form_gioihanphieu}>
          <View style={styles.addvourcher_form_gioihanphieu_input}></View>
          <Text style={styles.addvourcher_form_gioihanphieu_label}>Số lượng mã ưu đãi</Text>
        </View>
        <View style={styles.addvourcher_form_mota}>
          <View style={styles.addvourcher_form_mota_input}></View>
          <Text style={styles.addvourcher_form_mota_label}>Mô tả</Text>
        </View>

      </View>
      <TouchableOpacity onPress={onPressSave} style={styles.addvourcher_btnHuy}>
        <View style={styles.addvourcher_btnHuy_rectangle1505}></View>
        <Text style={styles.addvourcher_btnHuy_luLi}>LƯU LẠI</Text>
      </TouchableOpacity>

    </View>
  );

}
export default AddVoucherScreen;


const styles = StyleSheet.create({
  "addvourcher": {
    "backgroundColor": "rgba(249, 249, 249, 1)",
    flex: 1
  },
  "addvourcher_rectangle22": {
    "opacity": 1,
    "backgroundColor": "rgba(220, 220, 220, 1)",
    "width": 393,
    "height": 851,
  },
  "addvourcher_btnHuy": {
    alignSelf:"center"
  },
  "addvourcher_btnHuy_rectangle1505": {
    "opacity": 1,
    "backgroundColor": "rgba(249, 174, 81, 1)",
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 320,
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
    "left": 120,
    "top": 10
  },
  "addvourcher_form": {
    flex:1,
    width:"90%",
    alignSelf:"center"
  },
  "addvourcher_form_bgdde23b2a": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "width": 363,
    "height": 600,
  },
  "addvourcher_form_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": "100%",
    "height": 65,
    "left": 7,
    "top": 9
  },
  "addvourcher_form_title_input": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderRadius": 7,
    "height": 43,
    flex:1
  },
  "addvourcher_form_title_label": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "addvourcher_form_enddate": {
    "flex": 1,
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
    "backgroundColor": "rgba(217, 217, 217, 1)",
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
    "left": 3,
    "top": 0
  },
  "addvourcher_form_sotiengiamgia": {
    "flex": 1,
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 348,
    "height": 65,
    "left": 7,
    "top": 167
  },
  "addvourcher_form_sotiengiamgia_input": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 348,
    "height": 43,
    "left": 0,
    "top": 22
  },
  "addvourcher_form_sotiengiamgia_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "left": 3,
    "top": 0
  },
  "addvourcher_form_gioihanphieu": {
    "flex": 1,
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 348,
    "height": 65,
    "left": 7,
    "top": 240
  },
  "addvourcher_form_gioihanphieu_input": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 348,
    "height": 43,
    "left": 0,
    "top": 22
  },
  "addvourcher_form_gioihanphieu_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "left": 3,
    "top": 0
  },
  "addvourcher_form_mota": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 348,
    "height": 65,
    "left": 7,
    "top": 310
  },
  "addvourcher_form_mota_input": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 348,
    "height": 83,
    "left": 0,
    "top": 22
  },
  "addvourcher_form_mota_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "left": 3,
    "top": 0
  },
  "addvourcher_header": {
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "shadowOpacity": 0.16,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": "100%",
    "height": 86,
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
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    alignSelf:"center"
  },
});