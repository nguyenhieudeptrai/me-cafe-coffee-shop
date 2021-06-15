import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Vouchermain extends Component {

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
    <ScrollView data-layer="14a7c635-9a26-4851-ad10-1e8e3abbbad8" style={styles.vouchermain}>
        <View data-layer="f2089ac6-92ea-4100-af21-67a94308dac8" style={styles.vouchermain_group61}>
            <View data-layer="66d67c93-a003-4643-95ef-0dc46a15ad03" style={styles.vouchermain_group61_rectangle15}></View>
            <Text data-layer="b3993e8a-b3a6-4ccc-b005-353c5d71a45c" style={styles.vouchermain_group61_voucher}>VOUCHER</Text>
        </View>
        <View data-layer="9200cbaa-b098-4a86-9ddb-732051cdc8d2" style={styles.vouchermain_list}>
            <View data-layer="b6a8cc10-a4f7-4fb6-a6f0-e0855db6f733" style={styles.vouchermain_list_item}>
                <View data-layer="592db96f-31f7-492b-a9b6-840f2cdb5164" style={styles.vouchermain_list_item_rectangle32}></View>
                <View data-layer="d68f63e7-8387-437d-8d8d-ef9dffec17a5" style={styles.vouchermain_list_item_right}>
                    <Text data-layer="95cd930f-c5b7-4b9b-b4d6-2eb5eb31db85" style={styles.vouchermain_list_item_right_title77d99b77}>Ưu đãi 20% toàn menu</Text>
                    <View data-layer="618d2acb-ba84-436c-8686-469f71d32f10" style={styles.vouchermain_list_item_right_status}>
                        <Text data-layer="5867ede9-3a06-4241-bfa7-cd22ed4fbe88" style={styles.vouchermain_list_item_right_status_labelad302698}>Tình trạng:</Text>
                        <Text data-layer="2140b34d-58eb-428d-a6ed-a1104b8d515c" style={styles.vouchermain_list_item_right_status_value48e335f3}>Đang hoạt động</Text>
                    </View>
                    <View data-layer="2a7e19eb-7441-407a-b2b5-8a472be68a8f" style={styles.vouchermain_list_item_right_enddate}>
                        <Text data-layer="4d2ff4a7-7744-470d-a842-f256da222d70" style={styles.vouchermain_list_item_right_enddate_label}>Hết hạn:</Text>
                        <Text data-layer="a6497d5f-87df-4c81-82e6-ec84921b6c82" style={styles.vouchermain_list_item_right_enddate_value}>30/07/2021</Text>
                    </View>
                </View>
                <View data-layer="11ad9adf-cac4-4784-9461-eeebb9d531f9" style={styles.vouchermain_list_item_left}>
                    <View data-layer="2af9399c-33e0-48d6-ab0b-010030c4c9c5" style={styles.vouchermain_list_item_left_bga7e620a4}></View>
                    <Text data-layer="84e91d67-273b-477a-bee4-4d94cac9316f" style={styles.vouchermain_list_item_left_head}>20%</Text>
                    <View data-layer="d1f3254e-48aa-4de0-b6c3-f0e533b9429d" style={styles.vouchermain_list_item_left_type}>
                        <View data-layer="9ff5ec19-ed59-41b9-9727-3daac3e1207f" style={styles.vouchermain_list_item_left_type_bgfc50470f}>
                            <View data-layer="4138b8ed-43a1-4d82-8659-3bd787fe1ff7" style={styles.vouchermain_list_item_left_type_bgfc50470f_rectangle1481}></View>
                            <View data-layer="db575e4d-2dca-4f25-99b8-f0e6647cd53d" style={styles.vouchermain_list_item_left_type_bgfc50470f_rectangle1482}></View>
                            <View data-layer="770a6655-d0a3-4659-bc6b-552406459acc" style={styles.vouchermain_list_item_left_type_bgfc50470f_rectangle1483}></View>
                        </View>
                        <Text data-layer="ae4ac4bb-d5c0-492b-8338-04f81867bd15" style={styles.vouchermain_list_item_left_type_name}>Delivery</Text>
                    </View>
                </View>
            </View>
            <View data-layer="bdbe919e-7a77-4e65-8cd5-88badf7e1989" style={styles.vouchermain_list_btnAdd}>
                <View data-layer="dbf0fc30-a966-4f26-a963-37f91b28e03c" style={styles.vouchermain_list_btnAdd_bg}></View>
                <Text data-layer="9397a8a2-989f-4b0d-9ea3-f85ff727030b" style={styles.vouchermain_list_btnAdd_title}>Thêm Vourcher</Text>
                <Svg data-layer="353738f0-7232-4693-9f64-1fd818fe2cf6" style={styles.vouchermain_list_btnAdd_addIcon} preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875" fill="rgba(216, 174, 66, 1)"><SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z"  /></Svg>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Vouchermain.propTypes = {

}

Vouchermain.defaultProps = {

}


const styles = StyleSheet.create({
  "vouchermain": {
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
  "vouchermain_rectangle22": {
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
  "vouchermain_group61": {
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
    "height": 87,
    "left": 0,
    "top": 0
  },
  "vouchermain_group61_rectangle15": {
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
    "height": 87,
    "left": 0,
    "top": 0
  },
  "vouchermain_group61_voucher": {
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
    "width": 100,
    "height": 27,
    "left": 147,
    "top": 49
  },
  "vouchermain_list": {
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
    "width": 361,
    "height": 212,
    "left": 16,
    "top": 105
  },
  "vouchermain_list_item": {
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
    "width": 361,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "vouchermain_list_item_rectangle32": {
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
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 361,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "vouchermain_list_item_right": {
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
    "width": 181,
    "height": 79,
    "left": 109,
    "top": 10
  },
  "vouchermain_list_item_right_title77d99b77": {
    "opacity": 0.7400000095367432,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 18,
    "fontWeight": "500",
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
    "height": 24,
    "left": 0,
    "top": 0
  },
  "vouchermain_list_item_right_status": {
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
    "width": 156,
    "height": 18,
    "left": 0,
    "top": 31
  },
  "vouchermain_list_item_right_status_labelad302698": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "italic",
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
    "width": 60,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "vouchermain_list_item_right_status_value48e335f3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(201, 140, 17, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "italic",
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
    "left": 67,
    "top": 0
  },
  "vouchermain_list_item_right_enddate": {
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
    "width": 119,
    "height": 18,
    "left": 0,
    "top": 61
  },
  "vouchermain_list_item_right_enddate_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "italic",
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
    "left": 0,
    "top": 0
  },
  "vouchermain_list_item_right_enddate_value": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "italic",
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
    "width": 67,
    "height": 18,
    "left": 52,
    "top": 0
  },
  "vouchermain_list_item_left": {
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
    "width": 80,
    "height": 79,
    "left": 12,
    "top": 10
  },
  "vouchermain_list_item_left_bga7e620a4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
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
    "width": 80,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "vouchermain_list_item_left_head": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 170, 0, 1)",
    "fontSize": 35,
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
    "width": 66,
    "height": 42,
    "left": 9,
    "top": 28
  },
  "vouchermain_list_item_left_type": {
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
    "width": 75,
    "height": 15,
    "left": 3,
    "top": 6
  },
  "vouchermain_list_item_left_type_bgfc50470f": {
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
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "vouchermain_list_item_left_type_bgfc50470f_rectangle1481": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 170, 0, 1)",
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
    "width": 68,
    "height": 15,
    "left": 3,
    "top": 0
  },
  "vouchermain_list_item_left_type_bgfc50470f_rectangle1482": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 68,
    "top": 4
  },
  "vouchermain_list_item_left_type_bgfc50470f_rectangle1483": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 0,
    "top": 4
  },
  "vouchermain_list_item_left_type_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 10,
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
    "width": 36,
    "height": 13,
    "left": 20,
    "top": 1
  },
  "vouchermain_list_btnAdd": {
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
    "width": 361,
    "height": 97,
    "left": 0,
    "top": 115
  },
  "vouchermain_list_btnAdd_bg": {
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
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 361,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "vouchermain_list_btnAdd_title": {
    "opacity": 0.7400000095367432,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "500",
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
    "width": 111,
    "height": 24,
    "left": 125,
    "top": 69
  },
  "vouchermain_list_btnAdd_addIcon": {
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
    "left": 163.02,
    "top": 25.63
  }
});