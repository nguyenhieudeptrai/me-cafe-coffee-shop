import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class DetailTableHistory extends Component {

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
    <ScrollView data-layer="d07dda57-cade-431b-994f-5bc76c8631be" style={styles.detailTableHistory}>
        <View data-layer="f1e787de-9cb5-4502-8480-b034025c228a" style={styles.detailTableHistory_header}>
            <View data-layer="1f5ed825-1662-4cc5-89e8-ee5b153d381b" style={styles.detailTableHistory_header_bg15feb05f}></View>
            <ReactImage data-layer="6903ddfb-49c2-42ee-a69f-b0567c32ca32" source={require('./assets/btnBack.png')} style={styles.detailTableHistory_header_btnBack} />
            <Text data-layer="26a6e993-0251-4b79-a739-5d4c0e094b7d" style={styles.detailTableHistory_header_title96a58c0f}>LỊCH SỬ ĐẶT BÀN</Text>
        </View>
        <View data-layer="46cc1217-2218-445e-8c6e-a55bbd2308e0" style={styles.detailTableHistory_tableName}>
            <View data-layer="9acf1599-312d-426a-8260-eca11e74d6b4" style={styles.detailTableHistory_tableName_bgc5fba65b}></View>
            <Text data-layer="6fd74226-c711-41cc-a619-361f0e781ab4" style={styles.detailTableHistory_tableName_title}>Bàn số 1</Text>
        </View>
        <View data-layer="1bf31466-3324-49f1-8166-4cfca525b8cc" style={styles.detailTableHistory_filter}>
            <Text data-layer="1c717bcc-5636-4a80-a4e2-c7302833951b" style={styles.detailTableHistory_filter_label}>Thời gian:</Text>
            <View data-layer="2f2f6186-4ec0-40f3-bf71-a8bfb48af541" style={styles.detailTableHistory_filter_from}>
                <Svg data-layer="2b0cb989-4e13-423d-a15d-cf440f54de5f" style={styles.detailTableHistory_filter_from_path9} preserveAspectRatio="none" viewBox="-1.5 -1.5 123 3" fill="transparent"><SvgPath d="M 0 0 L 120 0"  /></Svg>
                <Text data-layer="3e23add3-4156-442b-8d31-b6bc90c7195f" style={styles.detailTableHistory_filter_from_x20122021}>20/12/2021</Text>
                <Svg data-layer="3cfe4619-2544-45d1-ab96-476fdd60f56d" style={styles.detailTableHistory_filter_from_polygon108eed634} preserveAspectRatio="none" viewBox="0 0 8 3" fill="rgba(84, 71, 65, 1)"><SvgPath d="M 3.999999523162842 0 L 7.999999523162842 3 L 0 3 Z"  /></Svg>
            </View>
            <ReactImage data-layer="6940f01d-9689-4027-bdc0-66491170b50f" source={require('./assets/arrow.png')} style={styles.detailTableHistory_filter_arrow} />
            <View data-layer="d582485b-d577-4574-9cae-14797b371a32" style={styles.detailTableHistory_filter_to}>
                <Svg data-layer="2fef717f-64e9-4c12-a269-33c92c3a4e34" style={styles.detailTableHistory_filter_to_line2} preserveAspectRatio="none" viewBox="0 -1 120 2" fill="transparent"><SvgPath d="M 0 0 L 120 0"  /></Svg>
                <Text data-layer="bb28113d-18b1-4bfa-ae2b-007e4cba1fc6" style={styles.detailTableHistory_filter_to_x21122021}>21/12/2021</Text>
                <Svg data-layer="ffdc3eb4-01ee-4950-af60-dafdd66d4b5d" style={styles.detailTableHistory_filter_to_polygon1} preserveAspectRatio="none" viewBox="0 0 8 3" fill="rgba(84, 71, 65, 1)"><SvgPath d="M 3.999999523162842 0 L 7.999999523162842 3 L 0 3 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="bb696a73-1d36-47cf-aa12-c3cf8e56dbd7" style={styles.detailTableHistory_list}>
            <View data-layer="0d731d8b-9081-4e25-8f35-eb11f9d4d243" style={styles.detailTableHistory_list_item}>
                <Svg data-layer="66007619-3c92-4374-b011-4ef23c0b605f" style={styles.detailTableHistory_list_item_space} preserveAspectRatio="none" viewBox="0 -0.5 349.593017578125 1" fill="transparent"><SvgPath d="M 0 0 L 349.593017578125 0"  /></Svg>
                <View data-layer="3b3540c1-ae29-479e-941e-c34e779fd512" style={styles.detailTableHistory_list_item_bg}></View>
                <View data-layer="c0e6e195-037f-4566-b341-f8f391163ea0" style={styles.detailTableHistory_list_item_voucher}>
                    <Text data-layer="db98f250-589a-411f-925f-f3edf573aaf8" style={styles.detailTableHistory_list_item_voucher_value46711b42}>Đã sử dụng voucher 5k</Text>
                    <ReactImage data-layer="c7d6ec8c-a9d9-41df-8174-2246d5edb532" source={require('./assets/icon7fc8e711.png')} style={styles.detailTableHistory_list_item_voucher_icon7fc8e711} />
                </View>
                <View data-layer="c2ed6f48-db46-420d-b792-b2d57adc0fc6" style={styles.detailTableHistory_list_item_date}>
                    <Text data-layer="aa9aacf5-164d-4bf8-bc8e-bea3f2c3e86c" style={styles.detailTableHistory_list_item_date_value}>20/12/2021 08:30 → 09:30</Text>
                    <ReactImage data-layer="dc8b7c3d-fb3d-437a-bf57-6f6154f872d2" source={require('./assets/icon.png')} style={styles.detailTableHistory_list_item_date_icon} />
                </View>
                <ReactImage data-layer="cbe94e51-4641-4088-8465-826302a2e5b8" source={require('./assets/checkIcon.png')} style={styles.detailTableHistory_list_item_checkIcon} />
            </View>
        </View>
    </ScrollView>
    );
  }
}

DetailTableHistory.propTypes = {

}

DetailTableHistory.defaultProps = {

}


const styles = StyleSheet.create({
  "detailTableHistory": {
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
  "detailTableHistory_rectangle22": {
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
  "detailTableHistory_header": {
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
    "height": 89,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_header_bg15feb05f": {
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
    "height": 89,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_header_btnBack": {
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
    "left": 19,
    "top": 47
  },
  "detailTableHistory_header_title96a58c0f": {
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
    "width": 179,
    "height": 27,
    "left": 107,
    "top": 45
  },
  "detailTableHistory_tableName": {
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
    "width": 141,
    "height": 32,
    "left": 126,
    "top": 122
  },
  "detailTableHistory_tableName_bgc5fba65b": {
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "width": 141,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_tableName_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 20,
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
    "width": 78,
    "height": 24,
    "left": 32,
    "top": 4
  },
  "detailTableHistory_filter": {
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
    "width": 357.5,
    "height": 20,
    "left": 18,
    "top": 189
  },
  "detailTableHistory_filter_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(7, 7, 7, 1)",
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
    "width": 57,
    "height": 15,
    "left": 0,
    "top": 4
  },
  "detailTableHistory_filter_from": {
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
    "width": 120,
    "height": 15.5,
    "left": 72.5,
    "top": 4
  },
  "detailTableHistory_filter_from_path9": {
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
    "width": 124,
    "height": 4,
    "left": -2,
    "top": 13.5
  },
  "detailTableHistory_filter_from_x20122021": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
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
    "width": 69,
    "height": 15,
    "left": 28.5,
    "top": 0
  },
  "detailTableHistory_filter_from_polygon108eed634": {
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
    "width": 8,
    "height": 3,
    "left": 107.5,
    "top": 7
  },
  "detailTableHistory_filter_arrow": {
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
    "left": 206.25,
    "top": 0
  },
  "detailTableHistory_filter_to": {
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
    "width": 120,
    "height": 15.5,
    "left": 237.5,
    "top": 4
  },
  "detailTableHistory_filter_to_line2": {
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
    "width": 120,
    "height": 2,
    "left": 0,
    "top": 14.5
  },
  "detailTableHistory_filter_to_x21122021": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
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
    "width": 69,
    "height": 15,
    "left": 28.5,
    "top": 0
  },
  "detailTableHistory_filter_to_polygon1": {
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
    "width": 8,
    "height": 3,
    "left": 107.5,
    "top": 7
  },
  "detailTableHistory_list": {
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
    "width": 358,
    "height": 77.5,
    "left": 18,
    "top": 250
  },
  "detailTableHistory_list_item": {
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
    "width": 358,
    "height": 77.5,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_list_item_space": {
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
    "width": 349.59,
    "height": 1,
    "left": 3.5,
    "top": 77
  },
  "detailTableHistory_list_item_bg": {
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
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 6,
    "width": 358,
    "height": 70,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_list_item_voucher": {
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
    "width": 171,
    "height": 21,
    "left": 72,
    "top": 39
  },
  "detailTableHistory_list_item_voucher_value46711b42": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
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
    "width": 132,
    "height": 15,
    "left": 39,
    "top": 3
  },
  "detailTableHistory_list_item_voucher_icon7fc8e711": {
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
    "width": 33,
    "height": 21,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_list_item_date": {
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
    "width": 184,
    "height": 26,
    "left": 73,
    "top": 9
  },
  "detailTableHistory_list_item_date_value": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
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
    "width": 155,
    "height": 17,
    "left": 29,
    "top": 4
  },
  "detailTableHistory_list_item_date_icon": {
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
    "width": 26,
    "height": 26,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_list_item_checkIcon": {
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
    "width": 38,
    "height": 38,
    "left": 17,
    "top": 16
  }
});