import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Login extends Component {

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
    <ScrollView data-layer="aa881be1-6246-4e56-8cc6-73be120b6b25" style={styles.login}>
        <View data-layer="6c00c473-a05a-4351-bbfa-eb990fc2451b" style={styles.login_logo}>
            <ReactImage data-layer="c1c208e9-f132-4194-b101-671bfadbbffc" source={require('./assets/logoPng.png')} style={styles.login_logo_logoPng} />
            <ReactImage data-layer="c78d9d6a-1c41-4e6f-8b57-78174c4fac46" source={require('./assets/asset1.png')} style={styles.login_logo_asset1} />
            <Text data-layer="da46fc16-aceb-4735-8320-ff772e494651" style={styles.login_logo_appName}>ADMIN MANAGEMENT</Text>
        </View>
        <View data-layer="a660ec29-656b-4d43-8b7b-aaaf296487e1" style={styles.login_loginBtn}>
            <Svg data-layer="2da89873-9705-44f2-8840-f0e9a30e8049" style={styles.login_loginBtn_path643} preserveAspectRatio="none" viewBox="0 0 327 48" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 4 0 L 323 0 C 325.2091369628906 0 327 1.790860891342163 327 4 L 327 44 C 327 46.20914077758789 325.2091369628906 48 323 48 L 4 48 C 1.790860891342163 48 0 46.20914077758789 0 44 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z"  /></Svg>
            <View style={styles.login_loginBtn_ngNhp}><Text data-layer="e3ef5702-0f4c-4aba-96b2-50670d7d2ea6" style={{"marginTop":-1.5,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>ĐĂNG  NHẬP</Text></View>
        </View>
        <View data-layer="4c73d897-03ee-46ff-b428-e1f8580051dc" style={styles.login_password}>
            <View data-layer="d3f471f0-3d0f-46e1-98ac-8cd575943187" style={styles.login_password_rectangle116}></View>
            <Text data-layer="b20bd733-1251-4d6c-bd29-79891499d128" style={styles.login_password_mtKhu}>Mật khẩu</Text>
            <Svg data-layer="d569f1d5-88f1-4189-8e4c-9c4029f0bae5" style={styles.login_password_lock2} preserveAspectRatio="none" viewBox="3.874999761581421 0 18.1888427734375 21" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 19.03236770629883 9.1875 L 19.03236770629883 5.25 C 19.03236770629883 2.355855464935303 16.31323051452637 0 12.96942138671875 0 C 9.626369476318359 0 6.906473159790039 2.355855464935303 6.906473159790039 5.25 L 6.906473159790039 9.1875 C 5.23234224319458 9.1875 3.874999761581421 10.36284351348877 3.874999761581421 11.8125 L 3.874999761581421 18.375 C 3.874999761581421 19.82465744018555 5.23234224319458 21 6.906473159790039 21 L 19.03236770629883 21 C 20.70650100708008 21 22.0638427734375 19.82465744018555 22.0638427734375 18.375 L 22.0638427734375 11.8125 C 22.0638427734375 10.36284351348877 20.70650100708008 9.1875 19.03236770629883 9.1875 Z M 13.72729015350342 15.54877758026123 L 13.72729015350342 17.71875 C 13.72729015350342 18.08149337768555 13.38833332061768 18.375 12.96942138671875 18.375 C 12.55050945281982 18.375 12.2115535736084 18.08149337768555 12.2115535736084 17.71875 L 12.2115535736084 15.54877758026123 C 11.76673221588135 15.32060718536377 11.45368576049805 14.91816234588623 11.45368576049805 14.4375 C 11.45368576049805 13.71201610565186 12.13235664367676 13.125 12.96942138671875 13.125 C 13.80648803710938 13.125 14.48515892028809 13.71205711364746 14.48515892028809 14.4375 C 14.48515892028809 14.91816234588623 14.17211151123047 15.32060718536377 13.72729015350342 15.54877758026123 Z M 16.00089454650879 9.1875 L 9.937948226928711 9.1875 L 9.937948226928711 5.25 C 9.937948226928711 3.801615238189697 11.29751682281494 2.625 12.96942138671875 2.625 C 14.64056968688965 2.625 16.00089454650879 3.801656484603882 16.00089454650879 5.25 L 16.00089454650879 9.1875 Z"  /></Svg>
        </View>
        <View data-layer="c599ffa0-1b7c-4723-9c79-8e286f04f708" style={styles.login_name}>
            <View data-layer="c34bd364-58f8-47a6-94c9-b8c60359aede" style={styles.login_name_rectangle114}></View>
            <Text data-layer="b0694e72-d8f2-4ec7-9849-01b2633e788a" style={styles.login_name_tenNgNhpsInThoi}>Tên đăng nhập/Số điện thoại</Text>
            <Svg data-layer="65003e0b-7106-4c48-b608-47c30f926ee7" style={styles.login_name_path646} preserveAspectRatio="none" viewBox="2.467628240585327 3.220644235610962 20.33349609375 18.8648681640625" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 22.42739677429199 19.37519454956055 C 22.15896415710449 18.56974983215332 21.67238998413086 17.75729560852051 20.95474433898926 17.28449249267578 C 19.57389068603516 16.36790466308594 17.96502494812012 15.87896156311035 16.40936088562012 15.3555212020874 C 16.03407859802246 15.22404384613037 15.65277671813965 15.08072280883789 15.3098201751709 14.87679481506348 C 15.00363254547119 14.69487762451172 14.88868999481201 14.32176780700684 14.81757164001465 13.99406337738037 C 14.78618335723877 13.82073497772217 14.76693534851074 13.64286518096924 14.75696563720703 13.46790790557861 C 15.88503265380859 11.92477989196777 16.63332748413086 9.40638256072998 16.63332748413086 7.34139347076416 C 16.63332748413086 4.118725776672363 14.81239032745361 3.220644235610962 12.56652069091797 3.220644235610962 C 10.32020854949951 3.220644235610962 8.499666213989258 4.117392539978027 8.499666213989258 7.340061187744141 C 8.499666213989258 9.478931427001953 9.301902770996094 12.10264873504639 10.49792957305908 13.6268253326416 C 10.48702239990234 13.74714756011963 10.47270965576172 13.86747169494629 10.4510440826416 13.9872522354126 C 10.3797779083252 14.31490898132324 10.26498222351074 14.68106079101563 9.958992004394531 14.86292743682861 C 9.615641593933105 15.06690406799316 9.234387397766113 15.1963586807251 8.85905647277832 15.32783508300781 C 7.303392887115479 15.85122680664063 5.694575309753418 16.31277847290039 4.314066410064697 17.22936630249023 C 3.596026420593262 17.70216941833496 3.109699249267578 18.56974983215332 2.841464519500732 19.37519645690918 C 2.565234422683716 20.21113967895508 2.452264785766602 21.24652290344238 2.469291687011719 22.08552742004395 L 12.6339864730835 22.08552742004395 L 22.79947090148926 22.08552742004395 C 22.8166446685791 21.2465705871582 22.70343017578125 20.21118927001953 22.42739677429199 19.37519454956055 Z"  /></Svg>
        </View>
        <Text data-layer="b107f3df-0fe5-4916-9681-ac522a037b8a" style={styles.login_ngKTaiKhon}>Đăng ký tài khoản</Text>
        <View style={styles.login_hoc}><Text data-layer="804051b3-e539-4dc3-aaf4-09189b869086" style={{"marginTop":-1.5,"color":"rgba(51, 51, 51, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>Hoặc</Text></View>
        <View data-layer="209666d1-9481-40b3-be34-38d9c3f83e05" style={styles.login_social}>
            <View data-layer="13119a9f-4c9d-49f9-a40a-7821a4cd96c8" style={styles.login_social_google}>
                <Svg data-layer="f31f2e06-32f2-43a9-a6f6-a7046228ab4f" style={styles.login_social_google_ellipse41} preserveAspectRatio="none" viewBox="-0.75 -0.75 57.5 57.5" fill="transparent"><SvgPath d="M 28 0 C 43.46397018432617 0 56 12.53602886199951 56 28 C 56 43.46397018432617 43.46397018432617 56 28 56 C 12.53602886199951 56 0 43.46397018432617 0 28 C 0 12.53602886199951 12.53602886199951 0 28 0 Z"  /></Svg>
                <Svg data-layer="1d5aca70-d505-4591-996c-d9ae6d0b2825" style={styles.login_social_google_path51} preserveAspectRatio="none" viewBox="0 0 16 10.199951171875" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 16 4.400000095367432 L 16 5.900000095367432 L 14.5 5.900000095367432 L 14.5 7.400000095367432 L 13 7.400000095367432 L 13 5.800000190734863 L 11.5 5.800000190734863 L 11.5 4.400000095367432 L 13 4.400000095367432 L 13 2.900000095367432 L 14.5 2.900000095367432 L 14.5 4.400000095367432 L 16 4.400000095367432 Z M 5.099999904632568 4.400000095367432 L 9.899999618530273 4.400000095367432 C 9.899999618530273 4.700000286102295 10 4.900000095367432 10 5.200000286102295 C 10 8.100000381469727 8.100000381469727 10.20000076293945 5.099999904632568 10.20000076293945 C 2.299999952316284 10.19999980926514 0 7.900000095367432 0 5.099999904632568 C 0 2.299999952316284 2.299999952316284 0 5.099999904632568 0 C 6.5 0 7.599999904632568 0.5 8.5 1.299999952316284 L 7.099999904632568 2.700000047683716 C 6.699999809265137 2.299999952316284 6.099999904632568 1.900000095367432 5.099999904632568 1.900000095367432 C 3.399999856948853 1.900000095367432 1.899999856948853 3.300000190734863 1.899999856948853 5.100000381469727 C 1.899999856948853 6.90000057220459 3.299999713897705 8.300000190734863 5.099999904632568 8.300000190734863 C 7.099999904632568 8.300000190734863 7.899999618530273 6.900000095367432 8 6.100000381469727 L 5.099999904632568 6.100000381469727 L 5.099999904632568 4.400000095367432 Z"  /></Svg>
            </View>
            <View data-layer="7941537a-7954-482b-badd-5c1b41fd8b1e" style={styles.login_social_facebook}>
                <Svg data-layer="b752ea09-7d5d-40cd-9b10-191b67631e42" style={styles.login_social_facebook_ellipse43} preserveAspectRatio="none" viewBox="-0.75 -0.75 57.5 57.5" fill="transparent"><SvgPath d="M 28 0 C 43.46397018432617 0 56 12.53602886199951 56 28 C 56 43.46397018432617 43.46397018432617 56 28 56 C 12.53602886199951 56 0 43.46397018432617 0 28 C 0 12.53602886199951 12.53602886199951 0 28 0 Z"  /></Svg>
                <Svg data-layer="ae3cf050-51ad-4462-8239-1b29cfba9a11" style={styles.login_social_facebook_path1} preserveAspectRatio="none" viewBox="80 0 8.3555908203125 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 85.42222595214844 16 L 85.42222595214844 8.711111068725586 L 87.91111755371094 8.711111068725586 L 88.26667785644531 5.8666672706604 L 85.42222595214844 5.8666672706604 L 85.42222595214844 4.088889122009277 C 85.42222595214844 3.288889169692993 85.68890380859375 2.666667222976685 86.84445190429688 2.666667222976685 L 88.35556030273438 2.666667222976685 L 88.35556030273438 0.08888889104127884 C 88 0.08888889104127884 87.11111450195313 0 86.13333129882813 0 C 84 0 82.4888916015625 1.333333373069763 82.4888916015625 3.733333110809326 L 82.4888916015625 5.866666793823242 L 80 5.866666793823242 L 80 8.711111068725586 L 82.4888916015625 8.711111068725586 L 82.4888916015625 16 L 85.42222595214844 16 Z"  /></Svg>
            </View>
        </View>
        <Text data-layer="98a6d567-12c7-4cd0-9a48-af7dd091639b" style={styles.login_quenMtKhu}>Quên mật khẩu</Text>
    </ScrollView>
    );
  }
}

Login.propTypes = {

}

Login.defaultProps = {

}


const styles = StyleSheet.create({
  "login": {
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
  "login_logo": {
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
    "top": 88
  },
  "login_logo_logoPng": {
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
  "login_logo_asset1": {
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
  "login_logo_appName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 18,
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
    "width": 192,
    "height": 22,
    "left": 38,
    "top": 169
  },
  "login_loginBtn": {
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
    "top": 505
  },
  "login_loginBtn_path643": {
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
      "height": 3
    },
    "shadowRadius": 6,
    "width": 327,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "login_loginBtn_ngNhp": {
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
    "width": 90,
    "height": 18,
    "left": 119,
    "top": 19
  },
  "login_password": {
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
    "height": 39,
    "left": 33,
    "top": 414
  },
  "login_password_rectangle116": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 87, 0, 1)",
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
    "width": 327,
    "height": 1,
    "left": 0,
    "top": 38
  },
  "login_password_mtKhu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 58,
    "height": 16,
    "left": 36,
    "top": 5
  },
  "login_password_lock2": {
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
    "width": 18.19,
    "height": 21,
    "left": 0.88,
    "top": 0
  },
  "login_name": {
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
    "height": 34.4,
    "left": 33,
    "top": 345.6
  },
  "login_name_rectangle114": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 87, 0, 1)",
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
    "width": 327,
    "height": 1,
    "left": 0,
    "top": 33.4
  },
  "login_name_tenNgNhpsInThoi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
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
    "width": 179,
    "height": 17,
    "left": 36,
    "top": 2.4
  },
  "login_name_path646": {
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
    "width": 20.33,
    "height": 18.86,
    "left": 3.01,
    "top": 0
  },
  "login_ngKTaiKhon": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
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
    "width": 103,
    "height": 15,
    "left": 144,
    "top": 604
  },
  "login_hoc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
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
    "width": 34,
    "height": 18,
    "left": 180,
    "top": 640
  },
  "login_social": {
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
    "width": 134,
    "height": 56,
    "left": 130,
    "top": 672
  },
  "login_social_google": {
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
    "width": 56,
    "height": 56,
    "left": 78,
    "top": 0
  },
  "login_social_google_ellipse41": {
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
    "width": 56,
    "height": 56,
    "left": 0,
    "top": 0
  },
  "login_social_google_path51": {
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
    "width": 16,
    "height": 10.2,
    "left": 20,
    "top": 23
  },
  "login_social_facebook": {
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
    "width": 56,
    "height": 56,
    "left": 0,
    "top": 0
  },
  "login_social_facebook_ellipse43": {
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
    "width": 56,
    "height": 56,
    "left": 0,
    "top": 0
  },
  "login_social_facebook_path1": {
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
    "width": 8.36,
    "height": 16,
    "left": 24,
    "top": 20
  },
  "login_quenMtKhu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
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
    "width": 87,
    "height": 15,
    "left": 159,
    "top": 814
  }
});