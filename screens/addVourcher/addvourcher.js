import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Addvourcher extends Component {

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
    <ScrollView data-layer="ce19360b-f6d2-4d32-a470-f4628eed2f33" style={styles.addvourcher}>
        <View data-layer="c562e64a-4749-46ab-9c40-d45f1f59ac44" style={styles.addvourcher_btnHuy}>
            <View data-layer="4bd91fd9-3aae-4a5c-b979-9c5304eaca6b" style={styles.addvourcher_btnHuy_rectangle1505}></View>
            <Text data-layer="99fb55e5-fb3f-4aa6-9d99-f056973a00b8" style={styles.addvourcher_btnHuy_luLi}>LƯU LẠI</Text>
        </View>
        <View data-layer="fbc6fe03-24b0-4c9f-9940-949e0428c844" style={styles.addvourcher_form}>
            <View data-layer="0954c045-c03a-453e-947d-d736aead71dc" style={styles.addvourcher_form_bgdde23b2a}></View>
            <View data-layer="178395a8-8932-456c-933d-41ecca24a0b1" style={styles.addvourcher_form_titlea5a00643}>
                <View data-layer="588e33a7-8790-4164-9552-834003f2fe3c" style={styles.addvourcher_form_titlea5a00643_input60ff3925}></View>
                <Text data-layer="cca21244-75c7-427f-a7eb-ea59a12c59e9" style={styles.addvourcher_form_titlea5a00643_label9535316c}>Tên ưu đãi</Text>
            </View>
            <View data-layer="73f7d7cc-b4f6-48a2-9fe8-9c527e3baedd" style={styles.addvourcher_form_enddate}>
                <View data-layer="811b5cb7-b177-4471-bbf0-64fe2fae0929" style={styles.addvourcher_form_enddate_input}></View>
                <Text data-layer="a6cd55d2-c3fc-4241-8008-c9de2ac78efc" style={styles.addvourcher_form_enddate_label}>Ngày hết hạn</Text>
            </View>
        </View>
        <View data-layer="1d768d7b-8350-447e-bbc2-45320bf33a6f" style={styles.addvourcher_header}>
            <View data-layer="cc00d7c9-eaa3-4e1d-aaff-38243b60633d" style={styles.addvourcher_header_bg}></View>
            <ReactImage data-layer="2b3e0cea-58d0-4ed2-a9bf-54c6346210dd" source={require('./assets/back.png')} style={styles.addvourcher_header_back} />
            <Text data-layer="cceaf10e-6553-4f84-a3d0-420d196e210a" style={styles.addvourcher_header_title}>THÊM VOUCHER</Text>
        </View>
    </ScrollView>
    );
  }
}

Addvourcher.propTypes = {

}

Addvourcher.defaultProps = {

}


const styles = StyleSheet.create({
  "addvourcher": {
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
  "addvourcher_rectangle22": {
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
  "addvourcher_btnHuy": {
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
    "width": 363,
    "height": 36,
    "left": 17,
    "top": 794
  },
  "addvourcher_btnHuy_rectangle1505": {
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
    "width": 363,
    "height": 36,
    "left": 0,
    "top": 0
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 51,
    "height": 17,
    "left": 160,
    "top": 10
  },
  "addvourcher_form": {
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
    "width": 363,
    "height": 665,
    "left": 15,
    "top": 110
  },
  "addvourcher_form_bgdde23b2a": {
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
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 363,
    "height": 665,
    "left": 0,
    "top": 0
  },
  "addvourcher_form_titlea5a00643": {
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
    "width": 348,
    "height": 65,
    "left": 7,
    "top": 9
  },
  "addvourcher_form_titlea5a00643_input60ff3925": {
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 72,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "addvourcher_form_enddate": {
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
    "width": 348,
    "height": 65,
    "left": 7,
    "top": 87
  },
  "addvourcher_form_enddate_input": {
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 88,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "addvourcher_header": {
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
    "height": 86,
    "left": 0,
    "top": 0
  },
  "addvourcher_header_bg": {
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
    "height": 86,
    "left": 0,
    "top": 0
  },
  "addvourcher_header_back": {
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 167,
    "height": 27,
    "left": 113,
    "top": 47
  }
});