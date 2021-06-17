import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { RotationGestureHandler } from 'react-native-gesture-handler';

const HistoryScreen = () => {

  const onPressBack = () => {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.detailTableHistory}>
      <View style={styles.detailTableHistory_header}>
        <View style={styles.detailTableHistory_header_bg15feb05f}></View>

        <TouchableOpacity onPress={onPressBack}>
          <ReactImage source={require('./assets/btnBack.png')} style={styles.detailTableHistory_header_btnBack} />
        </TouchableOpacity>
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
        <ReactImage source={require('./assets/arrow.png')} style={styles.detailTableHistory_filter_arrow} />
        <View style={styles.detailTableHistory_filter_to}>
          <Svg style={styles.detailTableHistory_filter_to_line2} preserveAspectRatio="none" viewBox="0 -1 120 2" fill="transparent"><SvgPath d="M 0 0 L 120 0" /></Svg>
          <Text style={styles.detailTableHistory_filter_to_x21122021}>21/12/2021</Text>
          <Svg style={styles.detailTableHistory_filter_to_polygon1} preserveAspectRatio="none" viewBox="0 0 8 3" fill="rgba(84, 71, 65, 1)"><SvgPath d="M 3.999999523162842 0 L 7.999999523162842 3 L 0 3 Z" /></Svg>
        </View>
      </View>
      <View style={styles.detailTableHistory_list}>
        <View style={styles.detailTableHistory_list_item}>
          <Svg style={styles.detailTableHistory_list_item_space} preserveAspectRatio="none" viewBox="0 -0.5 349.593017578125 1" fill="transparent"><SvgPath d="M 0 0 L 349.593017578125 0" /></Svg>
          <View style={styles.detailTableHistory_list_item_bg}></View>
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
      </View>
    </ScrollView>
  );
}

export default HistoryScreen;

DetailTableHistory.propTypes = {

}

DetailTableHistory.defaultProps = {

}


const styles = StyleSheet.create({
  "detailTableHistory": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(249, 249, 249, 1)",
    "width": 393,
    "height": 851,
    "alignSelf": 'center',
    "top": 0
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
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 393,
    "height": 89,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_header_bg15feb05f": {
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
    "width": 393,
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
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 200,
    "height": 27,
    "left": 110,
    "top": 45
  },
  "detailTableHistory_tableName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 141,
    "height": 32,
    "left": 126,
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
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 78,
    "height": 24,
    "left": 32,
    "top": 4
  },
  "detailTableHistory_filter": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
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
    "width": 57,
    "height": 15,
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
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 70,
    "height": 20,
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
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 70,
    "height": 15,
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
    "width": 358,
    "height": 77.5,
    "left": 18,
    "top": 250
  },
  "detailTableHistory_list_item": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 358,
    "height": 77.5,
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
  "detailTableHistory_list_item_bg": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 358,
    "height": 70,
    "left": 0,
    "top": 0
  },
  "detailTableHistory_list_item_voucher": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
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
    "width": 140,
    "height": 15,
    "left": 40,
    "top": 3
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
    "width": 200,
    "height": 17,
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
    "top": 16
  }
});