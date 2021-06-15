import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ConfirmRegister extends Component {

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
    <ScrollView data-layer="8290152c-2d4e-4a21-a48e-3ec61b3a1e2b" style={styles.confirmRegister}>
        <View data-layer="4496541b-5486-414d-b4ef-4db7fbe0a9cb" style={styles.confirmRegister_header}>
            <Text data-layer="be0e670b-238d-40da-9529-13e1c3b541fa" style={styles.confirmRegister_header_title}>Quay lại </Text>
            <ReactImage data-layer="214b10f1-29be-469d-92cd-da160961cb34" source={require('./assets/back.png')} style={styles.confirmRegister_header_back} />
        </View>
        <View data-layer="63575b62-c491-47ed-9798-bf21afcc0777" style={styles.confirmRegister_logo}>
            <ReactImage data-layer="89abfaee-f719-4a26-ba9b-6fe88318f1fd" source={require('./assets/logoPng.png')} style={styles.confirmRegister_logo_logoPng} />
            <ReactImage data-layer="063d2eee-d171-4f18-a06b-ac18217baba2" source={require('./assets/asset1.png')} style={styles.confirmRegister_logo_asset1} />
            <Text data-layer="b0c26934-b873-4446-a8da-416ec72bd468" style={styles.confirmRegister_logo_appName}>ADMIN MANAGEMENT</Text>
        </View>
        <Text data-layer="67617edd-0f87-446a-855a-785ae792a852" style={styles.confirmRegister_otpTitle}>Xác nhận Mã OTP</Text>
        <Text data-layer="376381a6-728f-4ece-bebe-f5e23f90be71" style={styles.confirmRegister_description}>Một mã xác thực gồm 6 chữ số đã được gửi 
đến số điện thoại của bạn</Text>
        <View data-layer="a5d02141-f49d-46c5-b6e2-8bb5a0200adc" style={styles.confirmRegister_input}>
            <View data-layer="71d6ac11-3872-4fff-89c5-6e1e8737602e" style={styles.confirmRegister_input_num1}></View>
            <View data-layer="0c6323f5-6edb-4fa0-923d-ad71959d0b7b" style={styles.confirmRegister_input_num2}></View>
            <View data-layer="df64a1b2-2876-48db-a5a7-1db46e86ea6d" style={styles.confirmRegister_input_num3}></View>
            <View data-layer="8a7fe444-537e-4bdf-ac92-4384aade5feb" style={styles.confirmRegister_input_num4}></View>
            <View data-layer="e9033835-9380-416e-b410-bf656db73858" style={styles.confirmRegister_input_num5}></View>
            <View data-layer="4a4c8af6-0715-4a8f-b17c-a23959dfb91c" style={styles.confirmRegister_input_num6}></View>
        </View>
        <Text data-layer="70da4556-fc7b-434e-9031-9bd9fb5421fb" style={styles.confirmRegister_label}>Nhập mã để tiếp tục</Text>
        <Text data-layer="ba384809-85f8-4edf-97bf-3dc104804e11" style={styles.confirmRegister_reSend}>Bạn Không nhân được mã? Gửi lại</Text>
        <View data-layer="ede1e98d-b8d5-4481-b75c-90670d49e8f2" style={styles.confirmRegister_confirmBtn}>
            <Svg data-layer="d8b46e67-ff38-48df-a199-d13a75573227" style={styles.confirmRegister_confirmBtn_path643} preserveAspectRatio="none" viewBox="0 0 128 33" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 1.565749287605286 0 L 126.4342575073242 0 C 127.2989883422852 0 128 1.231216907501221 128 2.75 L 128 30.25 C 128 31.76878356933594 127.2989883422852 33 126.4342575073242 33 L 1.565749287605286 33 C 0.7010097503662109 33 0 31.76878356933594 0 30.25 L 0 2.75 C 0 1.231216907501221 0.7010097503662109 0 1.565749287605286 0 Z"  /></Svg>
            <View style={styles.confirmRegister_confirmBtn_xacThc}><Text data-layer="2a530ddf-8300-4ccd-8f27-ab4ae1931622" style={{"marginTop":-1.5,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>Xác thực</Text></View>
        </View>
    </ScrollView>
    );
  }
}

ConfirmRegister.propTypes = {

}

ConfirmRegister.defaultProps = {

}


const styles = StyleSheet.create({
  "confirmRegister": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
  "confirmRegister_header": {
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
    "width": 88,
    "height": 20,
    "left": 13,
    "top": 37
  },
  "confirmRegister_header_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
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
    "width": 53,
    "height": 17,
    "left": 35,
    "top": 2
  },
  "confirmRegister_header_back": {
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
    "left": 0,
    "top": 0
  },
  "confirmRegister_logo": {
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
    "width": 204,
    "height": 163,
    "left": 95,
    "top": 61
  },
  "confirmRegister_logo_logoPng": {
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
    "width": 204,
    "height": 146,
    "left": 0,
    "top": 0
  },
  "confirmRegister_logo_asset1": {
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
    "width": 76,
    "height": 25,
    "left": 126,
    "top": 101
  },
  "confirmRegister_logo_appName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
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
    "width": 160,
    "height": 18,
    "left": 27,
    "top": 145
  },
  "confirmRegister_otpTitle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
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
    "width": 128,
    "height": 19,
    "left": 121,
    "top": 275
  },
  "confirmRegister_description": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 252,
    "height": 30,
    "left": 58.5,
    "top": 308
  },
  "confirmRegister_input": {
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
    "width": 291,
    "height": 40,
    "left": 39,
    "top": 385
  },
  "confirmRegister_input_num1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(225, 225, 225, 1)",
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
    "width": 39,
    "height": 40,
    "left": 0,
    "top": 0
  },
  "confirmRegister_input_num2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(225, 225, 225, 1)",
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
    "width": 39,
    "height": 40,
    "left": 51,
    "top": 0
  },
  "confirmRegister_input_num3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(225, 225, 225, 1)",
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
    "width": 39,
    "height": 40,
    "left": 101,
    "top": 0
  },
  "confirmRegister_input_num4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(225, 225, 225, 1)",
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
    "width": 39,
    "height": 40,
    "left": 152,
    "top": 0
  },
  "confirmRegister_input_num5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(225, 225, 225, 1)",
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
    "width": 39,
    "height": 40,
    "left": 201,
    "top": 0
  },
  "confirmRegister_input_num6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(225, 225, 225, 1)",
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
    "width": 39,
    "height": 40,
    "left": 252,
    "top": 0
  },
  "confirmRegister_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 114,
    "height": 15,
    "left": 127.5,
    "top": 353
  },
  "confirmRegister_reSend": {
    "opacity": 0.8399999737739563,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 192,
    "height": 15,
    "left": 88.5,
    "top": 450
  },
  "confirmRegister_confirmBtn": {
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
    "width": 128,
    "height": 33,
    "left": 121,
    "top": 481
  },
  "confirmRegister_confirmBtn_path643": {
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
    "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "confirmRegister_confirmBtn_xacThc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
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
    "left": 35,
    "top": 11
  }
});