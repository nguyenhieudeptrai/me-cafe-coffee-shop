import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Registry extends Component {

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
    <ScrollView data-layer="45db043d-2d5f-4ae6-89ba-e71717a82c23" style={styles.registry}>
        <View data-layer="346ff33b-6ee1-4a06-8bc1-9da990b46ed8" style={styles.registry_header}>
            <ReactImage data-layer="808a6731-8219-4ccb-8710-fb8013153617" source={require('./assets/back.png')} style={styles.registry_header_back} />
            <Text data-layer="81754602-cdf4-4ec1-a7a0-5d64e668b25a" style={styles.registry_header_title}>Quay lại </Text>
        </View>
        <View data-layer="43352d6d-38c2-4721-8614-8fb50f68c123" style={styles.registry_logo}>
            <ReactImage data-layer="a9d694ba-5f44-430c-910e-0f3a6a2c1149" source={require('./assets/logoPng.png')} style={styles.registry_logo_logoPng} />
            <ReactImage data-layer="9efcb7cd-d4d9-4341-8de8-862fe32f056f" source={require('./assets/asset1.png')} style={styles.registry_logo_asset1} />
            <Text data-layer="cbea2bc6-ed8f-450f-8d3a-016028e663ef" style={styles.registry_logo_appName}>ADMIN MANAGEMENT</Text>
        </View>
        <View data-layer="ae7b4039-4d0a-42ea-ba54-cac680aedbbc" style={styles.registry_inputPhone}>
            <Svg data-layer="50d3f36f-2893-4e06-90bc-acfc8d14ed8a" style={styles.registry_inputPhone_line7} preserveAspectRatio="none" viewBox="-0.5 0 1 36" fill="transparent"><SvgPath d="M 0 0 L 0 36"  /></Svg>
            <Svg data-layer="5fd2fd45-49e7-41c9-aa00-d8ecf4238886" style={styles.registry_inputPhone_path6435c7fa1c5} preserveAspectRatio="none" viewBox="-1.5 -1.5 330 51" fill="transparent"><SvgPath d="M 4 0 L 323 0 C 325.2091369628906 0 327 1.790860891342163 327 4 L 327 44 C 327 46.20914077758789 325.2091369628906 48 323 48 L 4 48 C 1.790860891342163 48 0 46.20914077758789 0 44 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z"  /></Svg>
            <View style={styles.registry_inputPhone_x84}><Text data-layer="03b7eade-0a97-42de-8374-b9dfe1c6718b" style={{"marginTop":-1.5,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>+84</Text></View>
            <Svg data-layer="cbdfec5f-0174-4dd7-b8bf-f7c014d9012f" style={styles.registry_inputPhone_countryLogo} preserveAspectRatio="none" viewBox="0 0 26 26" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-countryLogo" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/countryLogo.png')} x="0" y="0" width="26.00px" height="26.00px" /></Pattern></Defs><SvgPath d="M 13 0 C 20.17970085144043 0 26 5.820298671722412 26 13 C 26 20.17970085144043 20.17970085144043 26 13 26 C 5.820298671722412 26 0 20.17970085144043 0 13 C 0 5.820298671722412 5.820298671722412 0 13 0 Z" fill="url(#img-countryLogo)" /></Svg>
            <Text data-layer="6098efbd-11b2-4511-8a27-d81be955593d" style={styles.registry_inputPhone_input}>Nhập số điện thoại...</Text>
        </View>
        <View data-layer="e3b8aa79-fc1e-4144-b046-eb0dd884ae64" style={styles.registry_continue}>
            <Svg data-layer="e595aa23-e06f-4a8c-b1dc-717863afa1a4" style={styles.registry_continue_path643} preserveAspectRatio="none" viewBox="0 0 128 33" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 1.565749287605286 0 L 126.4342575073242 0 C 127.2989883422852 0 128 1.231216907501221 128 2.75 L 128 30.25 C 128 31.76878356933594 127.2989883422852 33 126.4342575073242 33 L 1.565749287605286 33 C 0.7010097503662109 33 0 31.76878356933594 0 30.25 L 0 2.75 C 0 1.231216907501221 0.7010097503662109 0 1.565749287605286 0 Z"  /></Svg>
            <View style={styles.registry_continue_ngK}><Text data-layer="b533fea4-e55d-4802-8aa4-71d0260bd854" style={{"marginTop":-1.5,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>ĐĂNG  KÝ</Text></View>
        </View>
        <ReactImage data-layer="f310021d-b61e-41d4-a0ce-5bbbf4605b2d" source={require('./assets/bg.png')} style={styles.registry_bg} />
    </ScrollView>
    );
  }
}

Registry.propTypes = {

}

Registry.defaultProps = {

}


const styles = StyleSheet.create({
  "registry": {
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
  "registry_header": {
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
  "registry_header_back": {
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
  "registry_header_title": {
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
  "registry_logo": {
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
    "width": 268,
    "height": 191,
    "left": 63,
    "top": 93
  },
  "registry_logo_logoPng": {
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
    "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "registry_logo_asset1": {
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
    "width": 118,
    "height": 38,
    "left": 134,
    "top": 121
  },
  "registry_logo_appName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    "fontWeight": "700",
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
    "width": 170,
    "height": 19,
    "left": 49,
    "top": 172
  },
  "registry_inputPhone": {
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
    "width": 327,
    "height": 48,
    "left": 33,
    "top": 375
  },
  "registry_inputPhone_line7": {
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
    "width": 1,
    "height": 36,
    "left": 73,
    "top": 6
  },
  "registry_inputPhone_path6435c7fa1c5": {
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
    "width": 327,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "registry_inputPhone_x84": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
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
    "width": 26,
    "height": 18,
    "left": 37,
    "top": 19
  },
  "registry_inputPhone_countryLogo": {
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
    "width": 26,
    "height": 26,
    "left": 7,
    "top": 12
  },
  "registry_inputPhone_input": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(204, 204, 204, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 14,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 1.4000000000000001,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 128,
    "height": 17,
    "left": 91,
    "top": 17.5
  },
  "registry_continue": {
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
    "left": 133,
    "top": 444
  },
  "registry_continue_path643": {
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
  "registry_continue_ngK": {
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
    "width": 67,
    "height": 18,
    "left": 31,
    "top": 11
  },
  "registry_bg": {
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
    "width": 393,
    "height": 236,
    "left": 0,
    "top": 615
  }
});