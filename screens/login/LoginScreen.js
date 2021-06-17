import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const LoginScreen = ({navigation}) => {

  const onPressLogin=()=>{
    navigation.navigate("Home");
  }
  const onPressRegister=()=>{
    navigation.navigate("Registry");
  }


  return (
    <View style={styles.login}>
      <View style={styles.login_logo}>
        <ReactImage source={require('./assets/logoPng.png')} style={styles.login_logo_logoPng} />
        <ReactImage source={require('./assets/asset1.png')} style={styles.login_logo_asset1} />
        <Text style={styles.login_logo_appName}>ADMIN MANAGEMENT</Text>
      </View>
      <View style={styles.login_name}>
        <TextInput style={styles.login_name_tenNgNhpsInThoi} placeholder="Tên đăng nhập/Số điện thoại" />
        <Svg style={styles.login_name_path646} preserveAspectRatio="none" viewBox="2.467628240585327 3.220644235610962 20.33349609375 18.8648681640625" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 22.42739677429199 19.37519454956055 C 22.15896415710449 18.56974983215332 21.67238998413086 17.75729560852051 20.95474433898926 17.28449249267578 C 19.57389068603516 16.36790466308594 17.96502494812012 15.87896156311035 16.40936088562012 15.3555212020874 C 16.03407859802246 15.22404384613037 15.65277671813965 15.08072280883789 15.3098201751709 14.87679481506348 C 15.00363254547119 14.69487762451172 14.88868999481201 14.32176780700684 14.81757164001465 13.99406337738037 C 14.78618335723877 13.82073497772217 14.76693534851074 13.64286518096924 14.75696563720703 13.46790790557861 C 15.88503265380859 11.92477989196777 16.63332748413086 9.40638256072998 16.63332748413086 7.34139347076416 C 16.63332748413086 4.118725776672363 14.81239032745361 3.220644235610962 12.56652069091797 3.220644235610962 C 10.32020854949951 3.220644235610962 8.499666213989258 4.117392539978027 8.499666213989258 7.340061187744141 C 8.499666213989258 9.478931427001953 9.301902770996094 12.10264873504639 10.49792957305908 13.6268253326416 C 10.48702239990234 13.74714756011963 10.47270965576172 13.86747169494629 10.4510440826416 13.9872522354126 C 10.3797779083252 14.31490898132324 10.26498222351074 14.68106079101563 9.958992004394531 14.86292743682861 C 9.615641593933105 15.06690406799316 9.234387397766113 15.1963586807251 8.85905647277832 15.32783508300781 C 7.303392887115479 15.85122680664063 5.694575309753418 16.31277847290039 4.314066410064697 17.22936630249023 C 3.596026420593262 17.70216941833496 3.109699249267578 18.56974983215332 2.841464519500732 19.37519645690918 C 2.565234422683716 20.21113967895508 2.452264785766602 21.24652290344238 2.469291687011719 22.08552742004395 L 12.6339864730835 22.08552742004395 L 22.79947090148926 22.08552742004395 C 22.8166446685791 21.2465705871582 22.70343017578125 20.21118927001953 22.42739677429199 19.37519454956055 Z" /></Svg>
      </View>
      <View style={styles.login_password}>
        <TextInput style={styles.login_password_mtKhu} placeholder="Mật khẩu" />
        <Svg style={styles.login_password_lock2} preserveAspectRatio="none" viewBox="3.874999761581421 0 18.1888427734375 21" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 19.03236770629883 9.1875 L 19.03236770629883 5.25 C 19.03236770629883 2.355855464935303 16.31323051452637 0 12.96942138671875 0 C 9.626369476318359 0 6.906473159790039 2.355855464935303 6.906473159790039 5.25 L 6.906473159790039 9.1875 C 5.23234224319458 9.1875 3.874999761581421 10.36284351348877 3.874999761581421 11.8125 L 3.874999761581421 18.375 C 3.874999761581421 19.82465744018555 5.23234224319458 21 6.906473159790039 21 L 19.03236770629883 21 C 20.70650100708008 21 22.0638427734375 19.82465744018555 22.0638427734375 18.375 L 22.0638427734375 11.8125 C 22.0638427734375 10.36284351348877 20.70650100708008 9.1875 19.03236770629883 9.1875 Z M 13.72729015350342 15.54877758026123 L 13.72729015350342 17.71875 C 13.72729015350342 18.08149337768555 13.38833332061768 18.375 12.96942138671875 18.375 C 12.55050945281982 18.375 12.2115535736084 18.08149337768555 12.2115535736084 17.71875 L 12.2115535736084 15.54877758026123 C 11.76673221588135 15.32060718536377 11.45368576049805 14.91816234588623 11.45368576049805 14.4375 C 11.45368576049805 13.71201610565186 12.13235664367676 13.125 12.96942138671875 13.125 C 13.80648803710938 13.125 14.48515892028809 13.71205711364746 14.48515892028809 14.4375 C 14.48515892028809 14.91816234588623 14.17211151123047 15.32060718536377 13.72729015350342 15.54877758026123 Z M 16.00089454650879 9.1875 L 9.937948226928711 9.1875 L 9.937948226928711 5.25 C 9.937948226928711 3.801615238189697 11.29751682281494 2.625 12.96942138671875 2.625 C 14.64056968688965 2.625 16.00089454650879 3.801656484603882 16.00089454650879 5.25 L 16.00089454650879 9.1875 Z" /></Svg>
      </View>
      <TouchableHighlight onPress={onPressLogin} style={styles.login_loginBtn}>
        <View style={styles.login_loginBtn_ngNhp}><Text style={{ "marginTop": -1.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>ĐĂNG  NHẬP</Text></View>
      </TouchableHighlight>
      <TouchableHighlight onPress={onPressRegister}  style={styles.login_btnCreate}>
        <Text style={styles.login_ngKTaiKhon}>Đăng ký tài khoản</Text>
      </TouchableHighlight>
      <View style={styles.login_hoc}><Text style={{ "marginTop": -1.5, "color": "rgba(51, 51, 51, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>Hoặc</Text></View>
      <View style={styles.login_social}>
        <TouchableHighlight style={styles.login_social_google}>
          <Svg style={styles.login_social_google_path51} preserveAspectRatio="none" viewBox="0 0 16 10.199951171875" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 16 4.400000095367432 L 16 5.900000095367432 L 14.5 5.900000095367432 L 14.5 7.400000095367432 L 13 7.400000095367432 L 13 5.800000190734863 L 11.5 5.800000190734863 L 11.5 4.400000095367432 L 13 4.400000095367432 L 13 2.900000095367432 L 14.5 2.900000095367432 L 14.5 4.400000095367432 L 16 4.400000095367432 Z M 5.099999904632568 4.400000095367432 L 9.899999618530273 4.400000095367432 C 9.899999618530273 4.700000286102295 10 4.900000095367432 10 5.200000286102295 C 10 8.100000381469727 8.100000381469727 10.20000076293945 5.099999904632568 10.20000076293945 C 2.299999952316284 10.19999980926514 0 7.900000095367432 0 5.099999904632568 C 0 2.299999952316284 2.299999952316284 0 5.099999904632568 0 C 6.5 0 7.599999904632568 0.5 8.5 1.299999952316284 L 7.099999904632568 2.700000047683716 C 6.699999809265137 2.299999952316284 6.099999904632568 1.900000095367432 5.099999904632568 1.900000095367432 C 3.399999856948853 1.900000095367432 1.899999856948853 3.300000190734863 1.899999856948853 5.100000381469727 C 1.899999856948853 6.90000057220459 3.299999713897705 8.300000190734863 5.099999904632568 8.300000190734863 C 7.099999904632568 8.300000190734863 7.899999618530273 6.900000095367432 8 6.100000381469727 L 5.099999904632568 6.100000381469727 L 5.099999904632568 4.400000095367432 Z" /></Svg>
        </TouchableHighlight>
        <TouchableHighlight style={styles.login_social_facebook}>
          <Svg style={styles.login_social_facebook_path1} preserveAspectRatio="none" viewBox="80 0 8.3555908203125 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 85.42222595214844 16 L 85.42222595214844 8.711111068725586 L 87.91111755371094 8.711111068725586 L 88.26667785644531 5.8666672706604 L 85.42222595214844 5.8666672706604 L 85.42222595214844 4.088889122009277 C 85.42222595214844 3.288889169692993 85.68890380859375 2.666667222976685 86.84445190429688 2.666667222976685 L 88.35556030273438 2.666667222976685 L 88.35556030273438 0.08888889104127884 C 88 0.08888889104127884 87.11111450195313 0 86.13333129882813 0 C 84 0 82.4888916015625 1.333333373069763 82.4888916015625 3.733333110809326 L 82.4888916015625 5.866666793823242 L 80 5.866666793823242 L 80 8.711111068725586 L 82.4888916015625 8.711111068725586 L 82.4888916015625 16 L 85.42222595214844 16 Z" /></Svg>
        </TouchableHighlight>
      </View>
      <TouchableHighlight style={styles.login_btnForgot}><Text style={styles.login_quenMtKhu}>Quên mật khẩu</Text></TouchableHighlight>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  "login": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    flex: 1,
    alignItems: "center"
  },
  "login_logo": {
    "width": 268,
    "height": 191,
    "marginTop": "5%"
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
    "backgroundColor": "rgba(212, 174, 57, 1)",
    "marginTop": 25,
    "width": "70%",
    "height": 48,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    borderRadius: 10
  },
  "login_loginBtn_ngNhp": {
    "position": "absolute",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    "top": 19,
    alignSelf: "center"
  },
  "login_password": {
    "backgroundColor": "transparent",
    borderBottomWidth: 2,
    "borderColor": "rgba(246, 87, 0, 1)",
    "marginTop": 30,
    "width": "80%",
    "height": 34.4,
  },
  "login_password_mtKhu": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontFamily": "Roboto",
    "marginLeft": 36,
    "height": 17,
    flex: 1
  },
  "login_password_lock2": {
    "opacity": 1,
    "position": "absolute",
    "left": 3.01,
    bottom: 10,
    "width": 18.19,
    "height": 21,
  },
  "login_name": {
    "backgroundColor": "transparent",
    borderBottomWidth: 2,
    "borderColor": "rgba(246, 87, 0, 1)",
    "marginTop": "5%",
    "width": "80%",
    "height": 40,
  },
  "login_name_tenNgNhpsInThoi": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontFamily": "Roboto",
    "marginLeft": 36,
    "height": 17,
    flex: 1
  },
  "login_name_path646": {
    "opacity": 1,
    "position": "absolute",
    "width": 20.33,
    "height": 18.86,
    "left": 3.01,
    bottom: 10
  },
  "login_btnCreate": {
    "marginTop": 30
  },
  "login_ngKTaiKhon": {
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontFamily": "Roboto",
  },
  "login_hoc": {
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    "marginTop": 35
  },
  "login_social": {
    "marginTop": 30,
    "width": 134,
    "height": 56,
  },
  "login_social_google": {
    "position": "absolute",
    "width": 56,
    "height": 56,
    "left": 78,
    "top": 0,
    borderRadius: "100%",
    borderWidth: 2,
    borderColor: "rgba(83, 71, 65, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  "login_social_google_path51": {
    "width": 16,
    "height": 10.2,
  },
  "login_social_facebook": {
    "position": "absolute",
    "width": 56,
    "height": 56,
    "left": 0,
    "top": 0,
    borderRadius: "100%",
    borderWidth: 2,
    borderColor: "rgba(83, 71, 65, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  "login_social_facebook_path1": {
    "width": 8.36,
    "height": 16,
  },
  "login_btnForgot": {
    "position": "absolute",
    "bottom": 30
  },
  "login_quenMtKhu": {
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontFamily": "Roboto",
  }
});