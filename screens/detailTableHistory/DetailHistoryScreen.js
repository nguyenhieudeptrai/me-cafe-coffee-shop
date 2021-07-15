import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { RotationGestureHandler } from 'react-native-gesture-handler';

const DetailHistoryScreen = ({navigation}) => {

  const onPressBack = () => {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.detailTableHistory}>
      <View style={styles.detailTableHistory_header}>
          <TouchableOpacity onPress={onPressBack}><ReactImage source={require('./assets/btnBack.png')} style={styles.detailTableHistory_header_btnBack} /></TouchableOpacity>
        <Text style={styles.detailTableHistory_header_title96a58c0f}>LỊCH SỬ ĐẶT BÀN</Text>
      </View>
      <View style={styles.detailTableHistory_tableName}>
        <View style={styles.detailTableHistory_tableName_bgc5fba65b}></View>
        <Text style={styles.detailTableHistory_tableName_title}>Bàn số 1</Text>
      </View>
      <View style={styles.detailTableHistory_filter}>
        <Text style={styles.detailTableHistory_filter_label}>Thời gian:</Text>
        <View style={styles.detailTableHistory_filter_from}>
          <Svg style={styles.detailTableHistory_filter_from_path9} preserveAspectRatio="none" viewBox="-1.5 -1.5 123 3" fill="transparent"><SvgPath d="M 0 0 L 120 0" /></Svg>
          <Text style={styles.detailTableHistory_filter_from_x20122021}>20/12/2021</Text>
          <Svg style={styles.detailTableHistory_filter_from_polygon108eed634} preserveAspectRatio="none" viewBox="0 0 8 3" fill="rgba(84, 71, 65, 1)"><SvgPath d="M 3.999999523162842 0 L 7.999999523162842 3 L 0 3 Z" /></Svg>
        </View>
        <View>
        <ReactImage source={require('./assets/arrow.png')} style={styles.detailTableHistory_filter_arrow} />
        </View>
        <View style={styles.detailTableHistory_filter_to}>
          <Svg style={styles.detailTableHistory_filter_to_line2} preserveAspectRatio="none" viewBox="0 -1 120 2" fill="transparent"><SvgPath d="M 0 0 L 120 0" /></Svg>
          <Text style={styles.detailTableHistory_filter_to_x21122021}>21/12/2021</Text>
          <Svg style={styles.detailTableHistory_filter_to_polygon1} preserveAspectRatio="none" viewBox="0 0 8 3" fill="rgba(84, 71, 65, 1)"><SvgPath d="M 3.999999523162842 0 L 7.999999523162842 3 L 0 3 Z" /></Svg>
        </View>
      </View>
      <View style={styles.detailTableHistory_list}>
        <View style={styles.detailTableHistory_list_item}>      
          <View style={styles.detailTableHistory_list_item_voucher}>
            <Text style={styles.detailTableHistory_list_item_voucher_value46711b42}>Đã sử dụng voucher 5k</Text>
            <ReactImage source={require('./assets/icon7fc8e711.png')} style={styles.detailTableHistory_list_item_voucher_icon7fc8e711} />
          </View>
          <View style={styles.detailTableHistory_list_item_date}>
            <Text style={styles.detailTableHistory_list_item_date_value}>20/12/2021 08:30 → 09:30</Text>
            <ReactImage source={require('./assets/icon.png')} style={styles.detailTableHistory_list_item_date_icon} />
          </View>
          <ReactImage source={require('./assets/checkIcon.png')} style={styles.detailTableHistory_list_item_checkIcon} />
        </View>
        <View>
          <Svg style={styles.login_name_path646} preserveAspectRatio="none" viewBox="2.467628240585327 3.220644235610962 20.33349609375 18.8648681640625" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 22.42739677429199 19.37519454956055 C 22.15896415710449 18.56974983215332 21.67238998413086 17.75729560852051 20.95474433898926 17.28449249267578 C 19.57389068603516 16.36790466308594 17.96502494812012 15.87896156311035 16.40936088562012 15.3555212020874 C 16.03407859802246 15.22404384613037 15.65277671813965 15.08072280883789 15.3098201751709 14.87679481506348 C 15.00363254547119 14.69487762451172 14.88868999481201 14.32176780700684 14.81757164001465 13.99406337738037 C 14.78618335723877 13.82073497772217 14.76693534851074 13.64286518096924 14.75696563720703 13.46790790557861 C 15.88503265380859 11.92477989196777 16.63332748413086 9.40638256072998 16.63332748413086 7.34139347076416 C 16.63332748413086 4.118725776672363 14.81239032745361 3.220644235610962 12.56652069091797 3.220644235610962 C 10.32020854949951 3.220644235610962 8.499666213989258 4.117392539978027 8.499666213989258 7.340061187744141 C 8.499666213989258 9.478931427001953 9.301902770996094 12.10264873504639 10.49792957305908 13.6268253326416 C 10.48702239990234 13.74714756011963 10.47270965576172 13.86747169494629 10.4510440826416 13.9872522354126 C 10.3797779083252 14.31490898132324 10.26498222351074 14.68106079101563 9.958992004394531 14.86292743682861 C 9.615641593933105 15.06690406799316 9.234387397766113 15.1963586807251 8.85905647277832 15.32783508300781 C 7.303392887115479 15.85122680664063 5.694575309753418 16.31277847290039 4.314066410064697 17.22936630249023 C 3.596026420593262 17.70216941833496 3.109699249267578 18.56974983215332 2.841464519500732 19.37519645690918 C 2.565234422683716 20.21113967895508 2.452264785766602 21.24652290344238 2.469291687011719 22.08552742004395 L 12.6339864730835 22.08552742004395 L 22.79947090148926 22.08552742004395 C 22.8166446685791 21.2465705871582 22.70343017578125 20.21118927001953 22.42739677429199 19.37519454956055 Z" /></Svg>
          <Text style={styles.detailTableHistory_list_item_voucher_User}>Huỳnh Văn Nam (098.356.9735)</Text>

        </View>
      </View>
      <View style={styles.detailTableHistory_list2}>
        <View style={styles.detailTableHistory_list_item}>      
          <View style={styles.detailTableHistory_list_item_voucher}>
            <Text style={styles.detailTableHistory_list_item_voucher_value46711b42}>Đã sử dụng voucher 30k</Text>
            <ReactImage source={require('./assets/icon7fc8e711.png')} style={styles.detailTableHistory_list_item_voucher_icon7fc8e711} />
          </View>
          <View style={styles.detailTableHistory_list_item_date}>
            <Text style={styles.detailTableHistory_list_item_date_value}>20/12/2021 13:30 → 14:00</Text>
            <ReactImage source={require('./assets/icon.png')} style={styles.detailTableHistory_list_item_date_icon} />
          </View>
          <ReactImage source={require('./assets/checkIcon.png')} style={styles.detailTableHistory_list_item_checkIcon} />
        </View>
        <View>
          <Svg style={styles.login_name_path646} preserveAspectRatio="none" viewBox="2.467628240585327 3.220644235610962 20.33349609375 18.8648681640625" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 22.42739677429199 19.37519454956055 C 22.15896415710449 18.56974983215332 21.67238998413086 17.75729560852051 20.95474433898926 17.28449249267578 C 19.57389068603516 16.36790466308594 17.96502494812012 15.87896156311035 16.40936088562012 15.3555212020874 C 16.03407859802246 15.22404384613037 15.65277671813965 15.08072280883789 15.3098201751709 14.87679481506348 C 15.00363254547119 14.69487762451172 14.88868999481201 14.32176780700684 14.81757164001465 13.99406337738037 C 14.78618335723877 13.82073497772217 14.76693534851074 13.64286518096924 14.75696563720703 13.46790790557861 C 15.88503265380859 11.92477989196777 16.63332748413086 9.40638256072998 16.63332748413086 7.34139347076416 C 16.63332748413086 4.118725776672363 14.81239032745361 3.220644235610962 12.56652069091797 3.220644235610962 C 10.32020854949951 3.220644235610962 8.499666213989258 4.117392539978027 8.499666213989258 7.340061187744141 C 8.499666213989258 9.478931427001953 9.301902770996094 12.10264873504639 10.49792957305908 13.6268253326416 C 10.48702239990234 13.74714756011963 10.47270965576172 13.86747169494629 10.4510440826416 13.9872522354126 C 10.3797779083252 14.31490898132324 10.26498222351074 14.68106079101563 9.958992004394531 14.86292743682861 C 9.615641593933105 15.06690406799316 9.234387397766113 15.1963586807251 8.85905647277832 15.32783508300781 C 7.303392887115479 15.85122680664063 5.694575309753418 16.31277847290039 4.314066410064697 17.22936630249023 C 3.596026420593262 17.70216941833496 3.109699249267578 18.56974983215332 2.841464519500732 19.37519645690918 C 2.565234422683716 20.21113967895508 2.452264785766602 21.24652290344238 2.469291687011719 22.08552742004395 L 12.6339864730835 22.08552742004395 L 22.79947090148926 22.08552742004395 C 22.8166446685791 21.2465705871582 22.70343017578125 20.21118927001953 22.42739677429199 19.37519454956055 Z" /></Svg>
          <Text style={styles.detailTableHistory_list_item_voucher_User}>Nguyễn Hoàng Thái (098.356.9735)</Text>

        </View>
      </View>
    </ScrollView>
  );
}

export default DetailHistoryScreen;


const styles = StyleSheet.create({
  "detailTableHistory": {
    "flex":1,
    "backgroundColor": "rgba(249, 249, 249, 1)",
  },
  "detailTableHistory_rectangle22": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(220, 220, 220, 1)",
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
    "flex":1,
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": "100%",
    "height": 89,
    "left": 0,
    "top": 0
  },

  "detailTableHistory_header_btnBack": {
    "opacity": 1,
    "position": "absolute",
    "width": 20,
    "height": 20,
    "left": 19,
    "top": 47
  },
  "detailTableHistory_header_title96a58c0f": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "top": 45,
    "alignSelf":'center'
  },
  "detailTableHistory_tableName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 141,
    "height": 32,
    "alignSelf":'center',
    "top": 122
  },
  "detailTableHistory_tableName_bgc5fba65b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 32,
    "top": 4
  },
  "detailTableHistory_filter": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 357.5,
    "height": 20,
    "alignSelf": 'center',
    "top": 189
  },
  "detailTableHistory_filter_label": {
    "position": "absolute",
    "color": "rgba(7, 7, 7, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 0,
    "top": 4
  },
  "detailTableHistory_filter_from": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 120,
    "height": 14,
    "left": 65,
    "top": 4
  },
  "detailTableHistory_filter_from_path9": {
    "opacity": 1,
    "position": "absolute",
    "width": 124,
    "height": 4,
    "left": -2,
    "top": 13.5
  },
  "detailTableHistory_filter_from_x20122021": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 15,
    "top": 0
  },
  "detailTableHistory_filter_from_polygon108eed634": {
    "opacity": 1,
    "transform": [{ rotate: '180deg' }],
    "position": "absolute",
    "width": 8,
    "height": 3,
    "left": 90,
    "top": 7
  },
  "detailTableHistory_filter_arrow": {
    "opacity": 1,
    "position": "absolute",
    "transform": [{ rotate: '180deg' }],
    "width": 20,
    "height": 20,
    "left": 206.25,
    "top": 0
  },
  "detailTableHistory_filter_to": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 120,
    "height": 15.5,
    "left": 237.5,
    "top": 4
  },
  "detailTableHistory_filter_to_line2": {
    "opacity": 1,
    "position": "absolute",
    "width": 120,
    "height": 2,
    "left": 0,
    "top": 14.5
  },
  "detailTableHistory_filter_to_x21122021": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 28.5,
    "top": 0
  },
  "detailTableHistory_filter_to_polygon1": {
    "opacity": 1,
    "position": "absolute",
    "transform": [{ rotate: '180deg' }],
    "width": 8,
    "height": 3,
    "left": 107.5,
    "top": 7
  },
  "detailTableHistory_list": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 90,
    "alignSelf": 'center',
    "top": 250
  },
  "detailTableHistory_list2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 90,
    "alignSelf": 'center',
    "top":350
  },
  "detailTableHistory_list_item": {
    "opacity": 1,
    "flex": 1,
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": "100%",
    "height": 90,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_list_item_space": {
    "opacity": 1,
    "position": "absolute",
    "width": 349.59,
    "height": 1,
    "left": 3.5,
    "top": 77
  },

  "detailTableHistory_list_item_voucher": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 200,
    "height": 21,
    "left": 72,
    "top": 39
  },
  "detailTableHistory_list_item_voucher_value46711b42": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 40,
    "top": 0
  },
  "detailTableHistory_list_item_voucher_User": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 113,
    "bottom": 9
  },
  "detailTableHistory_list_item_voucher_icon7fc8e711": {
    "opacity": 1,
    "position": "absolute",
    "width": 33,
    "height": 21,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_list_item_date": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 200,
    "height": 26,
    "left": 73,
    "top": 9
  },
  "detailTableHistory_list_item_date_value": {
    "position": "absolute",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 40,
    "top": 4
  },
  "detailTableHistory_list_item_date_icon": {
    "opacity": 1,
    "position": "absolute",
    "width": 26,
    "height": 26,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_list_item_checkIcon": {
    "opacity": 1,
    "position": "absolute",
    "width": 38,
    "height": 38,
    "left": 17,
    "top": 25
  },
  "login_name_path646": {
    "opacity": 1,
    "position": "absolute",
    "width": 20.33,
    "height": 18.86,
    "left": 75,
    bottom: 8
  },
});