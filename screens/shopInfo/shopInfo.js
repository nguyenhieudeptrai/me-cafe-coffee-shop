import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ShopInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="42a4916f-eab5-4a67-8e0b-7f5e38f2d443" style={styles.shopInfo}>
        <View data-layer="83516c8a-d6de-42f8-b408-bce1a15b132b" style={styles.shopInfo_header}>
            <View data-layer="da75567e-c3e5-4efd-aa73-ab068c8946fb" style={styles.shopInfo_header_bgf54e5df8}></View>
            <Text data-layer="3cd0ba87-bca9-4bd7-a195-473c87b396fc" style={styles.shopInfo_header_titlea84bead2}>THÔNG TIN QUÁN</Text>
        </View>
        <View data-layer="6a0b19a0-69ba-4680-be0d-3bfad91737f0" style={styles.shopInfo_form}>
            <View data-layer="7cd75853-e61c-4133-8b3a-9db05cde51e3" style={styles.shopInfo_form_bgdb1f3437}></View>
            <View data-layer="c018ef46-551c-48bb-ba21-12889983249f" style={styles.shopInfo_form_name}>
                <View data-layer="ad8603d1-18f6-40f8-bfbb-4801b48a84d8" style={styles.shopInfo_form_name_input265489f5}></View>
                <Text data-layer="98bffc0b-bd80-433d-903c-35e1eb0a2c29" style={styles.shopInfo_form_name_label88cf526c}>Tên quán</Text>
                <Text data-layer="e640e1e2-3c96-4c4d-8d0a-aceb1946c0e5" style={styles.shopInfo_form_name_giaRoomCofee}>GIA ROOM COFEE</Text>
            </View>
            <View data-layer="c4bf9617-4ea5-4d8e-ab17-9f4394720da3" style={styles.shopInfo_form_address}>
                <View data-layer="07b9cee4-3dab-4ac1-a529-a82689146fd9" style={styles.shopInfo_form_address_inputb3df0a16}></View>
                <Text data-layer="30b05169-3353-46be-ab94-5e7bd114df5c" style={styles.shopInfo_form_address_label0470492c}>Địa chỉ</Text>
                <Text data-layer="54bf3f22-f4df-47c9-b4c9-06058d57492d" style={styles.shopInfo_form_address_x232LeVnVitQun9Tphcm}>232 Lê Văn Việt, Quận 9, TP.HCM</Text>
            </View>
            <View data-layer="c1afb583-3813-4f2f-b95e-851561bf87b1" style={styles.shopInfo_form_phone}>
                <View data-layer="e3b92c0c-0a27-49ba-b493-065861407c2a" style={styles.shopInfo_form_phone_rectangle1504}></View>
                <Text data-layer="c5a42a30-3970-4869-a7e7-c8584cf7e9f4" style={styles.shopInfo_form_phone_labelf38941f3}>Số điện thoại</Text>
                <Text data-layer="6fb78d0e-17f2-4824-8e6a-43ad38886f5b" style={styles.shopInfo_form_phone_x0335657533}>0335.6575.33</Text>
            </View>
            <View data-layer="7a5f3673-7f8b-4e8a-ba21-2d29412502c1" style={styles.shopInfo_form_description}>
                <View data-layer="a451f0d0-9de2-4d7e-8850-ea544e432b0f" style={styles.shopInfo_form_description_input}></View>
                <Text data-layer="b935271b-d3e8-47d7-b217-1461897a0bb6" style={styles.shopInfo_form_description_labelb417a0b6}>Mô tả</Text>
                <Text data-layer="df53cc8b-371d-4461-b9b8-37ebeeaef24d" style={styles.shopInfo_form_description_quanTaLcTiTrcNgChinhCaQun9ViKhongGianThoangAngYenTnhPhuHpHcTpVaLamVic}>Quán tọa lạc tại trục đường chính của quận 9, với không gian thoáng đãng, yên tĩnh, phù hợp để học tập và làm việc. </Text>
            </View>
            <View data-layer="294c7e37-eca5-4bd5-a1a9-67f935d59861" style={styles.shopInfo_form_image}>
                <View data-layer="4713cdf0-2af4-466d-a159-5d92696ab472" style={styles.shopInfo_form_image_example}>
                    <ReactImage data-layer="a29a9e66-f042-424c-a364-e4e14c984cc7" source={require('./assets/i1.png')} style={styles.shopInfo_form_image_example_i1} />
                    <ReactImage data-layer="727983b3-7141-4c90-a0eb-0a66442b6870" source={require('./assets/i2.png')} style={styles.shopInfo_form_image_example_i2} />
                </View>
                <View data-layer="c78f2148-e3ed-4fdf-b31d-a294a244523b" style={styles.shopInfo_form_image_btnAdd620bac46}>
                    <View data-layer="7f9c3a1a-78b1-4f8d-abb0-1d76ab479608" style={styles.shopInfo_form_image_btnAdd620bac46_bgee288635}></View>
                    <Svg data-layer="01229dfb-2590-4f77-b3e1-0ee44c0de06b" style={styles.shopInfo_form_image_btnAdd620bac46_addIcon214e3aa4} preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875" fill="rgba(216, 174, 66, 1)"><SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z"  /></Svg>
                </View>
                <Text data-layer="c76f1afe-4ac3-41a2-b130-f5cf9121c992" style={styles.shopInfo_form_image_labela73d757d}>Hình ảnh quán</Text>
            </View>
            <View data-layer="4de24605-81ff-4db0-bf61-2cb390625fbd" style={styles.shopInfo_form_menu}>
                <View data-layer="5446823c-1ccc-4e67-9ca1-005a3a182475" style={styles.shopInfo_form_menu_btnAdd}>
                    <View data-layer="be5a5298-e9b2-4b68-b1bb-50e7b8e6400c" style={styles.shopInfo_form_menu_btnAdd_bgcd8dfb81}></View>
                    <Svg data-layer="199fe710-50ad-4cea-a8c6-a7c945668768" style={styles.shopInfo_form_menu_btnAdd_addIcon} preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875" fill="rgba(216, 174, 66, 1)"><SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z"  /></Svg>
                </View>
                <Text data-layer="2a89172e-f4f2-46f0-9e62-da5ccdd8ad81" style={styles.shopInfo_form_menu_label}>Menu quán</Text>
            </View>
        </View>
        <View data-layer="9985e83f-cf2b-4bb6-8292-ecbfe848c15f" style={styles.shopInfo_btnEdit}>
            <View data-layer="102fdc0b-5e43-424e-b517-73ad685df187" style={styles.shopInfo_btnEdit_bg}></View>
            <Text data-layer="172aa729-2937-4d47-ba97-35a58ae2c959" style={styles.shopInfo_btnEdit_title}>Chỉnh sửa</Text>
        </View>
    </ScrollView>
    );
  }
}

ShopInfo.propTypes = {

}

ShopInfo.defaultProps = {

}


const styles = StyleSheet.create({
  "shopInfo": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(249, 249, 249, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "shopInfo_rectangle22": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(220, 220, 220, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 393,
    "height": 85,
    "left": 0,
    "top": 0
  },
  "shopInfo_header_bgf54e5df8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 181,
    "height": 27,
    "left": 106,
    "top": 46
  },
  "shopInfo_form": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 351,
    "height": 672,
    "left": 21,
    "top": 109
  },
  "shopInfo_form_bgdb1f3437": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 13
  },
  "shopInfo_form_name_input265489f5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(243, 243, 243, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 62,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 104,
    "height": 15,
    "left": 18,
    "top": 38
  },
  "shopInfo_form_address": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 98
  },
  "shopInfo_form_address_inputb3df0a16": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(243, 243, 243, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 46,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 189,
    "height": 15,
    "left": 18,
    "top": 38
  },
  "shopInfo_form_phone": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 309,
    "height": 65,
    "left": 21,
    "top": 183
  },
  "shopInfo_form_phone_rectangle1504": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(243, 243, 243, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 89,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 80,
    "height": 15,
    "left": 18,
    "top": 38
  },
  "shopInfo_form_description": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 309,
    "height": 98,
    "left": 21,
    "top": 268
  },
  "shopInfo_form_description_input": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(243, 243, 243, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 291,
    "height": 57,
    "left": 11,
    "top": 32.5
  },
  "shopInfo_form_image": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 287,
    "height": 123,
    "left": 21,
    "top": 386
  },
  "shopInfo_form_image_example": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 94,
    "left": 195,
    "top": 29
  },
  "shopInfo_form_image_btnAdd620bac46_bgee288635": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(243, 243, 243, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 97,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "shopInfo_form_menu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 119,
    "left": 22,
    "top": 529
  },
  "shopInfo_form_menu_btnAdd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 94,
    "left": 0,
    "top": 25
  },
  "shopInfo_form_menu_btnAdd_bgcd8dfb81": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(243, 243, 243, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 75,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "shopInfo_btnEdit": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 351,
    "height": 35,
    "left": 21,
    "top": 803
  },
  "shopInfo_btnEdit_bg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(249, 174, 81, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 68,
    "height": 18,
    "left": 142,
    "top": 9
  }
});