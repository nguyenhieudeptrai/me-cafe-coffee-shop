import React, { useState, useReducer } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const ShopInfoTab = () => {

  const [name, onChangeName] = React.useState('GIA ROOM COFEE');
  const [address, onChangeAddress] = React.useState('232 Lê Văn Việt, Quận 9, TP.HCM');
  const [phone, onChangePhone] = React.useState('0335.6575.33');
  const [description, onChangeDescription] = React.useState('Quán tọa lạc tại trục đường chính của quận 9, với không gian thoáng đãng, yên tĩnh, phù hợp để học tập và làm việc.');

  const [isEditShopInfo, onChangeisEditShopInfo] = React.useState(false);

  return (
    <View style={styles.shopInfo}>
      <View style={styles.shopInfo_header}>
        <Text style={styles.shopInfo_header_title}>THÔNG TIN QUÁN</Text>
      </View>
      <ScrollView style={styles.shopInfo_form}>
        <View style={styles.shopInfo_form_textfield}>
          <Text style={styles.shopInfo_form_textfield_label}>Tên quán</Text>
          {
            !isEditShopInfo ?
              <Text style={styles.shopInfo_form_textfield_value}>{name}</Text>
              :
              <TextInput
                style={styles.shopInfo_form_textfield_input}
                value={name}
                onChangeText={(newValue) => onChangeName(newValue)}
              >
              </TextInput>
          }
        </View>
        <View style={styles.shopInfo_form_textfield}>
          <Text style={styles.shopInfo_form_textfield_label}>Địa chỉ</Text>
          {
            !isEditShopInfo ?
              <Text style={styles.shopInfo_form_textfield_value}>{address}</Text>
              :
              <TextInput
                style={styles.shopInfo_form_textfield_input}
                value={address}
                onChangeText={(newValue) => onChangeAddress(newValue)}
              >
              </TextInput>
          }
        </View>
        <View style={styles.shopInfo_form_textfield}>
          <Text style={styles.shopInfo_form_textfield_label}>Số điện thoại</Text>
          {
            !isEditShopInfo ?
              <Text style={styles.shopInfo_form_textfield_value}>{phone}</Text>
              : <TextInput
                style={styles.shopInfo_form_textfield_input}
                value={phone}
                onChangeText={(newValue) => onChangePhone(newValue)}
              >
              </TextInput>

          }
        </View>
        <View style={styles.shopInfo_form_multiline}>
          <Text style={styles.shopInfo_form_multiline_label}>Mô tả</Text>
          {
            !isEditShopInfo ?
              <Text style={styles.shopInfo_form_multiline_value}>{description}</Text>
              : <TextInput
                multiline
                numberOfLines={4}
                style={styles.shopInfo_form_multiline_input}
                value={description}
                onChangeText={(newValue) => onChangeDescription(newValue)}
              >
              </TextInput>

          }
        </View>
        <View style={styles.shopInfo_form_image}>
          <Text style={styles.shopInfo_form_textfield_label}>Hình ảnh quán</Text>
          <ScrollView style={styles.shopInfo_form_image_example} horizontal={true}>
            <ReactImage source={require('../assets/i1.png')} style={styles.shopInfo_form_image_example_i1} />
            <ReactImage source={require('../assets/i2.png')} style={styles.shopInfo_form_image_example_i1} />
            <Svg style={styles.shopInfo_form_image_btnAdd}
              preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875"
              fill="rgba(216, 174, 66, 1)">
              <SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z" />
            </Svg>
          </ScrollView>
          {/* <View style={styles.shopInfo_form_image_btnAdd620bac46}>
            <View style={styles.shopInfo_form_image_btnAdd620bac46_bgee288635}></View>
            <Svg style={styles.shopInfo_form_image_btnAdd620bac46_addIcon214e3aa4}
              preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875"
              fill="rgba(216, 174, 66, 1)">
              <SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z" />
            </Svg>
          </View> */}

        </View>
        <View style={styles.shopInfo_form_menu}>
          <Text style={styles.shopInfo_form_textfield_label}>Menu quán</Text>
          <Svg style={styles.shopInfo_form_image_btnAdd} preserveAspectRatio="none"
            viewBox="0.5625 0.5625 34.875 34.875" fill="rgba(216, 174, 66, 1)">
            <SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z" />
          </Svg>
        </View>
        {
          !isEditShopInfo ?
            <TouchableOpacity style={styles.shopInfo_btnEdit}
              onPress={() => onChangeisEditShopInfo(true)}>
              <View style={styles.shopInfo_btnEdit_bg}></View>
              <Text style={styles.shopInfo_btnEdit_title}>Chỉnh sửa</Text>
            </TouchableOpacity>
            : <TouchableOpacity style={styles.shopInfo_btnEdit}
              onPress={() => onChangeisEditShopInfo(false)}>
              <View style={styles.shopInfo_btnEdit_bg}></View>
              <Text style={styles.shopInfo_btnEdit_title}>Lưu lại</Text>
            </TouchableOpacity>
        }
      </ScrollView>

    </View>
  );

}

export default ShopInfoTab;

ShopInfoTab.propTypes = {

}

ShopInfoTab.defaultProps = {

}


const styles = StyleSheet.create({
  "shopInfo": {
    // "backgroundColor": "rgba(249, 249, 249, 1)",
    backgroundColor: "rgba(220, 220, 220, 1)",
    "width": "100%",
    "height": 851,
    "flex": 1
  },
  "shopInfo_header": {
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
  "shopInfo_header_title": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    alignSelf:"center",
    marginTop:40,
    marginBottom:15
  },
  "shopInfo_form": {
    "backgroundColor": "#FFF",
    "width": "90%",
    "marginTop": 0,
    "marginLeft": "5%",
    "marginBottom": 0,
    borderRadius:15,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 6,
    
  },
  "shopInfo_form_textfield": {
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 65,
    "marginTop": 20,
    "marginLeft": "5%",
  },
  "shopInfo_form_textfield_label": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": "90%",
    "height": 15,
    "marginLeft": 5,

  },
  "shopInfo_form_textfield_value": {
    "backgroundColor": "#FFF",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": '90%',
    "marginLeft": 20,
    "marginTop": 15,
    padding:7,
    borderRadius:4
  },
  "shopInfo_form_textfield_input": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": '90%',
    "height": 40,
    "marginLeft": 5,
    "marginTop": 10,
    "padding": 15,
    "color": "#000000"
  },
  "shopInfo_form_multiline": {
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 'auto',
    "marginTop": 20,
    "marginLeft": "5%",
  },
  "shopInfo_form_description_input": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 309,
    "height": 'fit-content',
    "left": 0,
    "top": 22
  },
  "shopInfo_form_multiline_label": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": "90%",
    "height": 'auto',
    "marginLeft": 5,
  },
  "shopInfo_form_multiline_value": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 16,
    "width": '90%',
    "height": 'auto',
    "marginLeft": 20,
    "marginTop": 15
  },
  "shopInfo_form_multiline_input": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": '90%',
    "height": 70,
    "marginLeft": 5,
    "marginTop": 10,
    "padding": 15,
    "color": "#00000"
  },
  "shopInfo_form_image": {
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 150,
    "marginTop": 20,
    "marginLeft": "5%",
  },
  "shopInfo_form_image_example": {

    "display": "inline",
    "padding": 15,
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 90,
    "marginTop": 15,
    "marginLeft": "5%"
  },
  "shopInfo_form_image_example_i1": {
    "position": "relative",
    "marginTop": 0,
    "marginRight": 10,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 80,
    "height": 80,
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
  "shopInfo_form_image_btnAdd": {
    "marginTop": 15,
    "marginRight": 20,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 50,
    "height": 50,
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
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 150,
    "marginTop": 20,
    "marginLeft": "5%",
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
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 35,
    "marginLeft": "5%",
    "marginBottom": 25
  },
  "shopInfo_btnEdit_bg": {
    "position": "absolute",
    "backgroundColor": "rgba(249, 174, 81, 1)",
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": "100%",
    "height": 35,
  },
  "shopInfo_btnEdit_title": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": "100%",
    "height": 18,
    "top": "20%"
  }
});