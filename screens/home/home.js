import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Home extends Component {

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
    <ScrollView data-layer="9b61f79e-9bcf-482b-8627-01fb8d89f800" style={styles.home}>
        <View data-layer="29bf60be-865b-4c62-9b3a-c1ced2710e11" style={styles.home_header31ac1837}>
            <Svg data-layer="a76f716f-2241-4251-8d8c-ee7ba01dbae7" style={styles.home_header31ac1837_headerBg} preserveAspectRatio="none" viewBox="0 0 393 144.60594177246094" fill="rgba(241, 211, 126, 1)"><SvgPath d="M 0 0 L 393 0 L 393 116.5110778808594 C 393 132.0274505615234 377.7776794433594 144.6059417724609 359 144.6059417724609 L 34 144.6059417724609 C 15.22231674194336 144.6059417724609 0 132.0274505615234 0 116.5110778808594 L 0 0 Z"  /></Svg>
            <View data-layer="2d40ce6d-f895-4b4a-9f31-4504c8d186e3" style={styles.home_header31ac1837_logo}>
                <ReactImage data-layer="5ea2c378-1ea3-44a2-901d-ea2bb26be45b" source={require('./assets/logoPng.png')} style={styles.home_header31ac1837_logo_logoPng} />
                <ReactImage data-layer="7bbbadc4-aec7-45d3-a576-6456dd96f9ed" source={require('./assets/asset1.png')} style={styles.home_header31ac1837_logo_asset1} />
            </View>
            <Text data-layer="78676819-6034-4f31-a2c7-1610c4a964ef" style={styles.home_header31ac1837_hello}>Hello,</Text>
            <Text data-layer="923d4642-7ba9-4cd8-8dc6-bdf092fa9fac" style={styles.home_header31ac1837_nameAccount}>Ms. Minh Anh</Text>
            <ReactImage data-layer="5982173d-8048-498b-b5c8-749a73de0cf5" source={require('./assets/qrBtn.png')} style={styles.home_header31ac1837_qrBtn} />
        </View>
        <View data-layer="9204311f-2f4e-46d2-ad0a-c02a2a2eb279" style={styles.home_info46474805}>
            <View data-layer="37e2dcc7-f95f-4bed-85b0-7971e9ea79ca" style={styles.home_info46474805_rectangle1492}></View>
            <View data-layer="7362ff72-d1fb-4204-a7d1-70c7248fccdc" style={styles.home_info46474805_left}>
                <Svg data-layer="86b136bd-18ef-4eef-a679-da05b0008fb5" style={styles.home_info46474805_left_photo} preserveAspectRatio="none" viewBox="0 0 60 60" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-photo" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/photo.png')} x="0" y="0" width="60.00px" height="60.00px" /></Pattern></Defs><SvgPath d="M 30 0 C 46.56854248046875 0 60 13.43145942687988 60 30 C 60 46.56854248046875 46.56854248046875 60 30 60 C 13.43145942687988 60 0 46.56854248046875 0 30 C 0 13.43145942687988 13.43145942687988 0 30 0 Z" fill="url(#img-photo)" /></Svg>
                <Text data-layer="59fbd5f6-9784-4969-889b-720bdf4db526" style={styles.home_info46474805_left_descriptionAccount}>Quản lý</Text>
                <Text data-layer="6bbf9712-81ba-41e3-b85a-bf09bb8cd46b" style={styles.home_info46474805_left_fullname}>Nguyễn Minh Anh</Text>
            </View>
            <View data-layer="073dac8e-421b-495f-9588-d86c019e058f" style={styles.home_info46474805_right}>
                <Text data-layer="04ef7007-2f85-4c62-a620-d5cd7d4bcb51" style={styles.home_info46474805_right_address}>232 Lê Văn Việt, quận 9, TP.HCM</Text>
                <Text data-layer="914ca91b-e8de-41ad-85fa-12f0872aced9" style={styles.home_info46474805_right_phone}>Số điện thoại: 0335.6575.33</Text>
                <Text data-layer="aef416b7-937f-44bf-bd5b-e4943aefd1b6" style={styles.home_info46474805_right_shopName}>GIA ROOM COFFEE</Text>
            </View>
        </View>
        <View data-layer="47b3e673-556b-4987-8a7e-d5b225d9dd3c" style={styles.home_listBooking}>
            <View data-layer="1c72aaad-b093-4bd0-b15f-de844f8f5769" style={styles.home_listBooking_bg948a58d1}></View>
            <View data-layer="0a986dcf-65d9-4188-9273-b68b222d2197" style={styles.home_listBooking_table}>
                <View data-layer="a9bbdbf9-d9d0-42e9-86b9-09e4005c7138" style={styles.home_listBooking_table_bg660f4e5f}></View>
                <View data-layer="2d0d0ad5-bb79-4ea3-b41c-892cbad1798f" style={styles.home_listBooking_table_info}>
                    <View data-layer="2b15c89e-1a73-4f10-9ca9-4670a8e60c60" style={styles.home_listBooking_table_info_customer}>
                        <Text data-layer="2faa5f19-e35b-4fb3-bfde-81669f423dac" style={styles.home_listBooking_table_info_customer_khachHang}>Khách hàng:</Text>
                        <Text data-layer="36d729e9-be45-4b4a-8f5b-8258085b3767" style={styles.home_listBooking_table_info_customer_trnThienQu}>Trần Thiên Quý</Text>
                    </View>
                    <View data-layer="7012da13-6f4f-4b74-993f-c361e4dbc2eb" style={styles.home_listBooking_table_info_time}>
                        <Text data-layer="2a7a0282-703d-42fe-80dd-dfc71a9a2587" style={styles.home_listBooking_table_info_time_x0700080014062021}>07:00 - 08:00 (14/06/2021)</Text>
                        <Text data-layer="b0435b16-a3c2-49cc-948f-20c14a900b86" style={styles.home_listBooking_table_info_time_thiGian}>Thời gian:</Text>
                    </View>
                    <View data-layer="bb3585e4-7d29-4294-bd7d-bdaaa2d74652" style={styles.home_listBooking_table_info_status}>
                        <Text data-layer="93bf66f9-4be6-4f91-bc15-e527b07cb6fb" style={styles.home_listBooking_table_info_status_angTiQuan}>Đang tại quán</Text>
                        <Text data-layer="469dac22-7000-46dc-b777-8922004da5c4" style={styles.home_listBooking_table_info_status_tinhTrng}>Tình trạng:</Text>
                    </View>
                </View>
                <View data-layer="116813f8-cd3e-432e-a8bd-b1876b8e30fa" style={styles.home_listBooking_table_headLeft}>
                    <Svg data-layer="8ac14852-5b0c-4618-b87b-3310671a60c9" style={styles.home_listBooking_table_headLeft_tableNumBg} preserveAspectRatio="none" viewBox="0 0 78 81" fill="rgba(249, 174, 81, 1)"><SvgPath d="M 13 0 L 65 0 C 72.17970275878906 0 78 5.820297718048096 78 13 L 78 68 C 78 75.17970275878906 72.17970275878906 81 65 81 L 13 81 C 5.820297718048096 81 0 75.17970275878906 0 68 L 0 13 C 0 5.820297718048096 5.820297718048096 0 13 0 Z"  /></Svg>
                    <Text data-layer="d6efa577-8105-4e75-84b4-73023c49b00d" style={styles.home_listBooking_table_headLeft_tableNum}>Bàn 1</Text>
                </View>
            </View>
            <View data-layer="6b5a2f19-2848-432d-bf5c-1220ce3ddf47" style={styles.home_listBooking_header}>
                <View data-layer="4e7160e9-8b2a-4d76-9121-a643db5ec4e8" style={styles.home_listBooking_header_boder}></View>
                <Text data-layer="750ee7bb-1c48-4faa-b08d-4a00e50fa7d9" style={styles.home_listBooking_header_title}>Booking hiện tại</Text>
            </View>
        </View>
        <View data-layer="8d5b1669-3545-4140-9bb3-f5e392848804" style={styles.home_menu}>
            <Svg data-layer="34b0e395-b8f4-4843-8912-4746894cfc08" style={styles.home_menu_bg} preserveAspectRatio="none" viewBox="0 0 393 79" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 16 0 L 377 0 C 385.8365478515625 0 393 7.160732746124268 393 15.99394512176514 L 393 78.73075103759766 L 0 79 L 0 15.99394512176514 C 0 7.160732746124268 7.163443565368652 0 16 0 Z"  /></Svg>
            <View data-layer="d7cd889f-dcaa-471a-b5a1-22dd832064b3" style={styles.home_menu_account}>
                <Text data-layer="dd055c14-5f76-46ae-8331-4609a9790246" style={styles.home_menu_account_taiKhon}>Tài khoản</Text>
                <ReactImage data-layer="8b585f7b-aa91-414b-887b-a1b178076690" source={require('./assets/tabAccount.png')} style={styles.home_menu_account_tabAccount} />
            </View>
            <View data-layer="3e5d4978-2eaf-48ea-94cf-d3b0a625e43b" style={styles.home_menu_history}>
                <Text data-layer="d47d86a1-c5ba-412f-8e7e-d8c67c6ed982" style={styles.home_menu_history_lchS}>Lịch sử</Text>
                <ReactImage data-layer="0d256c8c-568f-46a3-ac91-4010962f9a97" source={require('./assets/tabHistory.png')} style={styles.home_menu_history_tabHistory} />
            </View>
            <View data-layer="262a803f-5ff1-4b95-927a-8a5a9c27a554" style={styles.home_menu_voucher}>
                <ReactImage data-layer="ff5e7177-3c03-4e05-88a0-f3449258ac64" source={require('./assets/tabVoucher.png')} style={styles.home_menu_voucher_tabVoucher} />
                <Text data-layer="ff5f35d9-78b5-4f5a-9bea-c50da2d3f645" style={styles.home_menu_voucher_vourcher}>Vourcher</Text>
            </View>
            <View data-layer="ebd77c76-8676-4eb8-83de-fa61bccc4892" style={styles.home_menu_shop}>
                <Text data-layer="0b9435f6-3a45-4db3-b69a-69a9c584e9c5" style={styles.home_menu_shop_thongTinQuan}>Thông tin quán</Text>
                <ReactImage data-layer="6c3f264a-844f-4583-b470-9f4c540d4d35" source={require('./assets/tabShop.png')} style={styles.home_menu_shop_tabShop} />
            </View>
            <View data-layer="b96af4ba-0ebf-480f-96ef-b68e33d4f7b6" style={styles.home_menu_home69dcc555}>
                <ReactImage data-layer="2d612c04-49ba-4fbf-995a-928afa56928d" source={require('./assets/tabHome.png')} style={styles.home_menu_home69dcc555_tabHome} />
                <Text data-layer="f2f46152-7106-4f33-86e6-a57d1b3b1bf9" style={styles.home_menu_home69dcc555_trangCh}>Trang chủ</Text>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Home.propTypes = {

}

Home.defaultProps = {

}


const styles = StyleSheet.create({
  "home": {
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
  "home_header31ac1837": {
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
    "height": 144.61,
    "left": 0,
    "top": 0
  },
  "home_header31ac1837_headerBg": {
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
      "height": 6
    },
    "shadowRadius": 6,
    "width": 393,
    "height": 144.61,
    "left": 0,
    "top": 0
  },
  "home_header31ac1837_logo": {
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
    "width": 144,
    "height": 90,
    "left": 25,
    "top": 19
  },
  "home_header31ac1837_logo_logoPng": {
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
    "width": 126,
    "height": 90,
    "left": 0,
    "top": 0
  },
  "home_header31ac1837_logo_asset1": {
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
    "width": 61,
    "height": 20,
    "left": 83,
    "top": 54
  },
  "home_header31ac1837_hello": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 24,
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
    "width": 61,
    "height": 32,
    "left": 194,
    "top": 39
  },
  "home_header31ac1837_nameAccount": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 17,
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
    "width": 102,
    "height": 20,
    "left": 194,
    "top": 73
  },
  "home_header31ac1837_qrBtn": {
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
    "width": 34,
    "height": 34,
    "left": 341,
    "top": 43
  },
  "home_info46474805": {
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
    "width": 340,
    "height": 139,
    "left": 27,
    "top": 109
  },
  "home_info46474805_rectangle1492": {
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
    "width": 340,
    "height": 139,
    "left": 0,
    "top": 0
  },
  "home_info46474805_left": {
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
    "left": 21,
    "top": 21
  },
  "home_info46474805_left_photo": {
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
  "home_info46474805_left_descriptionAccount": {
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
  "home_info46474805_left_fullname": {
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
  "home_info46474805_right": {
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
    "left": 128,
    "top": 21
  },
  "home_info46474805_right_address": {
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
  "home_info46474805_right_phone": {
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
  "home_info46474805_right_shopName": {
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
  },
  "home_listBooking": {
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
    "width": 365,
    "height": 484,
    "left": 14,
    "top": 268
  },
  "home_listBooking_bg948a58d1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 248, 242, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 9,
    "borderTopRightRadius": 9,
    "borderBottomLeftRadius": 9,
    "borderBottomRightRadius": 9,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 365,
    "height": 484,
    "left": 0,
    "top": 0
  },
  "home_listBooking_table": {
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
    "width": 349.7,
    "height": 81,
    "left": 8.3,
    "top": 51
  },
  "home_listBooking_table_bg660f4e5f": {
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
      "height": 6
    },
    "shadowRadius": 6,
    "width": 349,
    "height": 81,
    "left": 0.7,
    "top": 0
  },
  "home_listBooking_table_info": {
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
    "width": 237,
    "height": 60,
    "left": 92.7,
    "top": 9
  },
  "home_listBooking_table_info_customer": {
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
    "width": 178,
    "height": 17,
    "left": 0,
    "top": 0
  },
  "home_listBooking_table_info_customer_khachHang": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "700",
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
    "width": 78,
    "height": 19,
    "left": 0,
    "top": 0.5
  },
  "home_listBooking_table_info_customer_trnThienQu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
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
    "width": 93,
    "height": 19,
    "left": 85,
    "top": 0.5
  },
  "home_listBooking_table_info_time": {
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
    "width": 237,
    "height": 17,
    "left": 0,
    "top": 21
  },
  "home_listBooking_table_info_time_x0700080014062021": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
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
    "width": 168,
    "height": 19,
    "left": 69,
    "top": 0.5
  },
  "home_listBooking_table_info_time_thiGian": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "700",
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
    "width": 63,
    "height": 19,
    "left": 0,
    "top": 0.5
  },
  "home_listBooking_table_info_status": {
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
    "width": 163,
    "height": 17,
    "left": 0,
    "top": 43
  },
  "home_listBooking_table_info_status_angTiQuan": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(183, 137, 0, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "italic",
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
    "width": 84,
    "height": 19,
    "left": 79,
    "top": 0.5
  },
  "home_listBooking_table_info_status_tinhTrng": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "700",
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
    "width": 69,
    "height": 19,
    "left": 0,
    "top": 0.5
  },
  "home_listBooking_table_headLeft": {
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
    "width": 78,
    "height": 81,
    "left": 0,
    "top": 0
  },
  "home_listBooking_table_headLeft_tableNumBg": {
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
    "width": 78,
    "height": 81,
    "left": 0,
    "top": 0
  },
  "home_listBooking_table_headLeft_tableNum": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
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
    "width": 51,
    "height": 26,
    "left": 14.7,
    "top": 27
  },
  "home_listBooking_header": {
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
    "width": 365,
    "height": 37,
    "left": 0,
    "top": 0
  },
  "home_listBooking_header_boder": {
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
    "borderTopLeftRadius": 9,
    "borderTopRightRadius": 9,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 365,
    "height": 37,
    "left": 0,
    "top": 0
  },
  "home_listBooking_header_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(212, 174, 57, 1)",
    "fontSize": 17,
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
    "width": 123,
    "height": 20,
    "left": 15,
    "top": 10
  },
  "home_menu": {
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
    "height": 79,
    "left": 0,
    "top": 772
  },
  "home_menu_bg": {
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
    "shadowOpacity": 0.3411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "home_menu_account": {
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
    "width": 48,
    "height": 51.5,
    "left": 326,
    "top": 11
  },
  "home_menu_account_taiKhon": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 11,
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
    "width": 48,
    "height": 13,
    "left": 0,
    "top": 38.5
  },
  "home_menu_account_tabAccount": {
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
    "height": 33,
    "left": 7,
    "top": 0
  },
  "home_menu_history": {
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
    "width": 36,
    "height": 51.5,
    "left": 168,
    "top": 11
  },
  "home_menu_history_rectangle17": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 77,
    "height": 79,
    "left": -8,
    "top": -18
  },
  "home_menu_history_lchS": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 11,
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
    "width": 36,
    "height": 13,
    "left": 0,
    "top": 38.5
  },
  "home_menu_history_tabHistory": {
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
    "height": 33,
    "left": 2,
    "top": 0
  },
  "home_menu_voucher": {
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
    "width": 46,
    "height": 51,
    "left": 97,
    "top": 11
  },
  "home_menu_voucher_rectangle13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -25,
    "top": -14
  },
  "home_menu_voucher_tabVoucher": {
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
    "height": 33,
    "left": 7,
    "top": 0
  },
  "home_menu_voucher_vourcher": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
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
    "width": 46,
    "height": 13,
    "left": 0,
    "top": 38
  },
  "home_menu_shop": {
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
    "width": 74,
    "height": 51.75,
    "left": 228,
    "top": 11
  },
  "home_menu_shop_thongTinQuan": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 11,
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
    "width": 74,
    "height": 13,
    "left": 0,
    "top": 38.75
  },
  "home_menu_shop_tabShop": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 17,
    "borderTopRightRadius": 17,
    "borderBottomLeftRadius": 17,
    "borderBottomRightRadius": 17,
    "width": 33,
    "height": 33,
    "left": 21,
    "top": 0
  },
  "home_menu_home69dcc555": {
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
    "width": 50,
    "height": 51,
    "left": 23,
    "top": 11
  },
  "home_menu_home69dcc555_rectangle11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "home_menu_home69dcc555_tabHome": {
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
    "height": 33,
    "left": 9,
    "top": 0
  },
  "home_menu_home69dcc555_trangCh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
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
    "width": 50,
    "height": 13,
    "left": 0,
    "top": 38
  }
});