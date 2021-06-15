import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Account extends Component {

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
    <ScrollView data-layer="fce8bbbf-0d66-4f70-94fa-fc3d02db1b8b" style={styles.account}>
        <View data-layer="0244a329-ad28-4127-8c8e-59dbfa404d3f" style={styles.account_header}>
            <View data-layer="30873db7-d467-464e-8fdc-418f3e42a1a1" style={styles.account_header_bg860642ed}></View>
            <Text data-layer="ffb5ceca-850f-4300-9d98-266ecfe21f82" style={styles.account_header_title1103c87d}>THÔNG TIN TÀI KHOẢN</Text>
        </View>
        <View data-layer="e51d9dcb-4ca0-45bf-a777-950333bdf91f" style={styles.account_form}>
            <View data-layer="7242ddbe-0706-48af-98fa-fac82ed2b2ef" style={styles.account_form_bgfec2c280}></View>
            <View data-layer="82b6d02f-add8-4365-a087-e4ecc174f9a9" style={styles.account_form_name11525854}>
                <View data-layer="098dbe55-eed2-44ab-993d-bf0bd116eee1" style={styles.account_form_name11525854_input316c160e}></View>
                <Text data-layer="8d753aca-9ec3-4a87-bee1-48bd64f8d235" style={styles.account_form_name11525854_labelc743add8}>Họ và tên</Text>
                <Text data-layer="31b63e6b-13ed-4f43-b9b2-858c718c45de" style={styles.account_form_name11525854_nguynMinhAnh}>Nguyễn Minh Anh</Text>
            </View>
            <View data-layer="3a16f0fc-8e93-4552-be14-2b474e643a8a" style={styles.account_form_addressf9fa9f46}>
                <View data-layer="9b8eb972-e3f0-4417-957d-2232939a647e" style={styles.account_form_addressf9fa9f46_input42df5c7e}></View>
                <Text data-layer="b16162e3-12ec-4356-977b-986bb6e6a25f" style={styles.account_form_addressf9fa9f46_label2b6f35e8}>Địa chỉ</Text>
                <Text data-layer="3a74699b-6bbd-48b9-809a-8ec9a93ede4b" style={styles.account_form_addressf9fa9f46_x232LeVnVitQun9Tphcm}>232 Lê Văn Việt, Quận 9, TP.HCM</Text>
            </View>
            <View data-layer="bb0c28af-ae5a-493c-86cb-648271ca298f" style={styles.account_form_phonedbf082b5}>
                <View data-layer="37f040b9-90c6-4e67-96e6-8f4c728caa21" style={styles.account_form_phonedbf082b5_inputaba49172}></View>
                <Text data-layer="ac2cff7f-40bd-443e-8c81-36df4a75a8d7" style={styles.account_form_phonedbf082b5_label318bf2ec}>Số điện thoại</Text>
                <Text data-layer="c851fb65-3f2c-41ff-9ab1-dd412de12b3d" style={styles.account_form_phonedbf082b5_x0335657533}>0335.6575.33</Text>
            </View>
            <View data-layer="62494cb6-7efe-445c-b4ff-ad6441c2e120" style={styles.account_form_mail}>
                <View data-layer="b4bdb80b-69be-44cb-99f2-e21e10bcd162" style={styles.account_form_mail_inputa77003a1}></View>
                <Text data-layer="c0ad8c4d-10ba-4826-82bc-ac5acfe11175" style={styles.account_form_mail_labelf92dd575}>Email</Text>
                <Text data-layer="49eeec97-b978-4eab-ae4b-839f9218ea31" style={styles.account_form_mail_nguyenminhanh}>Nguyenminhanh@gmail.com</Text>
            </View>
            <View data-layer="241b87fd-d33e-4c43-abdb-62299df8c8e4" style={styles.account_form_job7c17c74a}>
                <View data-layer="2b3cf33d-f43c-4ad1-b906-114d67313448" style={styles.account_form_job7c17c74a_input}></View>
                <Text data-layer="ced73ada-848d-488b-8390-fcdc7c8f3cb3" style={styles.account_form_job7c17c74a_label}>Chức vụ</Text>
                <Text data-layer="9b7de1d0-cb35-4caf-91a7-1fba362fded6" style={styles.account_form_job7c17c74a_qunL}>Quản lý </Text>
            </View>
        </View>
        <View data-layer="c7c859fd-0e2a-4bcb-b32b-61d58541165c" style={styles.account_btnEdit}>
            <View data-layer="03bc4cf1-d68a-4605-8418-60baa43fb52e" style={styles.account_btnEdit_bg88e5874f}></View>
            <Text data-layer="a9f1017d-1d8c-442f-9160-f77131b8ed5e" style={styles.account_btnEdit_title}>Chỉnh sửa</Text>
        </View>
        <View data-layer="42d8a7aa-9b89-4624-94c6-58fd99f1c19a" style={styles.account_info}>
            <View data-layer="854e38d1-3ef9-4408-9af1-27313753feeb" style={styles.account_info_bg}></View>
            <View data-layer="82d64a85-81ab-4183-8cce-9f65defaccb1" style={styles.account_info_left}>
                <Svg data-layer="1d42dadd-8b05-48ba-9d57-8b8c0171f1b6" style={styles.account_info_left_avatar} preserveAspectRatio="none" viewBox="0 0 60 60" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-avatar" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/avatar.png')} x="0" y="0" width="60.00px" height="60.00px" /></Pattern></Defs><SvgPath d="M 30 0 C 46.56854248046875 0 60 13.43145942687988 60 30 C 60 46.56854248046875 46.56854248046875 60 30 60 C 13.43145942687988 60 0 46.56854248046875 0 30 C 0 13.43145942687988 13.43145942687988 0 30 0 Z" fill="url(#img-avatar)" /></Svg>
                <Text data-layer="ebd2f88e-6428-4c4f-a784-c3682b1448f5" style={styles.account_info_left_job}>Quản lý</Text>
                <Text data-layer="89f9da9f-9ff8-4f19-8a1d-c766b966d3bf" style={styles.account_info_left_name}>Nguyễn Minh Anh</Text>
            </View>
            <View data-layer="17a3d48c-8254-4619-ab15-07d24f85fe33" style={styles.account_info_right}>
                <Text data-layer="a5751073-9728-402e-9dc2-d88d74711754" style={styles.account_info_right_address}>232 Lê Văn Việt, quận 9, TP.HCM</Text>
                <Text data-layer="5002d32d-5dc2-4bf4-abc2-089721f37697" style={styles.account_info_right_phone}>Số điện thoại: 0335.6575.33</Text>
                <Text data-layer="a026fc86-0b22-4835-8c27-ee12236d1ec0" style={styles.account_info_right_shopName}>GIA ROOM COFFEE</Text>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Account.propTypes = {

}

Account.defaultProps = {

}


const styles = StyleSheet.create({
  "account": {
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
  "account_rectangle22": {
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
  "account_header": {
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
    "height": 58,
    "left": 0,
    "top": 0
  },
  "account_header_bg860642ed": {
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
    "height": 58,
    "left": 0,
    "top": 0
  },
  "account_header_title1103c87d": {
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
    "width": 234,
    "height": 27,
    "left": 80,
    "top": 23
  },
  "account_form": {
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
    "height": 604,
    "left": 21,
    "top": 179
  },
  "account_form_bgfec2c280": {
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
    "height": 604,
    "left": 0,
    "top": 0
  },
  "account_form_name11525854": {
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
    "top": 49
  },
  "account_form_name11525854_input316c160e": {
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 64,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "account_form_name11525854_nguynMinhAnh": {
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
    "width": 102,
    "height": 15,
    "left": 18,
    "top": 38
  },
  "account_form_addressf9fa9f46": {
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
    "top": 128
  },
  "account_form_addressf9fa9f46_input42df5c7e": {
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
  "account_form_addressf9fa9f46_label2b6f35e8": {
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
  "account_form_addressf9fa9f46_x232LeVnVitQun9Tphcm": {
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
  "account_form_phonedbf082b5": {
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
    "top": 207
  },
  "account_form_phonedbf082b5_inputaba49172": {
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
  "account_form_phonedbf082b5_label318bf2ec": {
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
  "account_form_phonedbf082b5_x0335657533": {
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
  "account_form_mail": {
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
    "height": 67,
    "left": 24,
    "top": 367
  },
  "account_form_mail_inputa77003a1": {
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
    "top": 24
  },
  "account_form_mail_labelf92dd575": {
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
    "width": 37,
    "height": 18,
    "left": 4,
    "top": 0
  },
  "account_form_mail_nguyenminhanh": {
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
    "height": 27,
    "left": 15,
    "top": 37.5
  },
  "account_form_job7c17c74a": {
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
    "height": 66,
    "left": 24,
    "top": 286
  },
  "account_form_job7c17c74a_input": {
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
    "top": 23
  },
  "account_form_job7c17c74a_label": {
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
    "width": 55,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "account_form_job7c17c74a_qunL": {
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
    "height": 27,
    "left": 15,
    "top": 36.5
  },
  "account_btnEdit": {
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
    "width": 318,
    "height": 35,
    "left": 36,
    "top": 729
  },
  "account_btnEdit_bg88e5874f": {
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
    "width": 318,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "account_btnEdit_title": {
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
    "width": 63,
    "height": 17,
    "left": 126,
    "top": 10
  },
  "account_info": {
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
    "width": 313,
    "height": 139,
    "left": 40,
    "top": 76
  },
  "account_info_bg": {
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
    "borderTopLeftRadius": 28,
    "borderTopRightRadius": 28,
    "borderBottomLeftRadius": 28,
    "borderBottomRightRadius": 28,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    "width": 313,
    "height": 139,
    "left": 0,
    "top": 0
  },
  "account_info_left": {
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
    "width": 99,
    "height": 98,
    "left": 19,
    "top": 21
  },
  "account_info_left_avatar": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 6,
    "width": 60,
    "height": 60,
    "left": 19,
    "top": 0
  },
  "account_info_left_job": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    "fontWeight": "400",
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
    "width": 40,
    "height": 14,
    "left": 23,
    "top": 84
  },
  "account_info_left_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
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
    "width": 99,
    "height": 14,
    "left": 0,
    "top": 70
  },
  "account_info_right": {
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
    "height": 64,
    "left": 118,
    "top": 21
  },
  "account_info_right_address": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(164, 162, 162, 0.9803921568627451)",
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
    "left": 0,
    "top": 32
  },
  "account_info_right_phone": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(164, 162, 162, 0.9803921568627451)",
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
    "width": 166,
    "height": 15,
    "left": 0,
    "top": 49
  },
  "account_info_right_shopName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
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
    "width": 178,
    "height": 24,
    "left": 0,
    "top": 0
  }
});