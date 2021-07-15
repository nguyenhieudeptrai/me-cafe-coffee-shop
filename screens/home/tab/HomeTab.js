import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const dataBooking = [
  {
    tableNum: 4,
    cusName: "Nguyễn Hiếu",
    startTime: "08:30",
    duringTo: "09:30",
    date: "16/05/2021",
    personNum: 4,
    phone: "098123405",
    status: "Sắp tới",
  },
  {
    tableNum: 1,
    cusName: "Nguyễn Dũng",
    startTime: "07:30",
    duringTo: "08:30",
    date: "16/05/2021",
    personNum: 6,
    phone: "098123405",
    status: "Sắp tới",
  },
  {
    tableNum: 2,
    cusName: "Nguyễn Văn A",
    startTime: "07:00",
    duringTo: "08:00",
    date: "16/05/2021",
    personNum: 4,
    phone: "098123405",
    status: "Đang tại quán",
  },
  {
    tableNum: 3,
    cusName: "Nguyễn Văn B",
    startTime: "07:15",
    duringTo: "08:15",
    date: "16/05/2021",
    personNum: 4,
    phone: "098123405",
    status: "Đang tại quán",
  },
  {
    tableNum: 4,
    cusName: "Trần Thị C",
    startTime: "07:00",
    duringTo: "08:00",
    date: "16/05/2021",
    personNum: 4,
    phone: "098123405",
    status: "Đang tại quán",
  }
]
const HomeTab = ({ navigation }) => {

  const onPressBooking = (item) => {
    navigation.navigate("BookingDetail", { booking: item });
  }
  return (
    <View style={styles.home}>
      <View style={styles.home_header}>
        <View style={styles.home_header_logo}>
          <ReactImage source={require('../assets/logoPng.png')} style={styles.home_header_logo_logoPng} />
          <ReactImage source={require('../assets/asset1.png')} style={styles.home_header_logo_asset1} />
        </View>
        <View style={styles.home_header_nameAccount}>
          <Text style={styles.home_header_hello}>Xin chào,</Text>
          <Text style={styles.home_header_name}>Nguyễn Minh Anh</Text>
        </View>
        <ReactImage source={require('../assets/qrBtn.png')} style={styles.home_header_qrBtn} />
      </View>

      <View style={styles.home_listBooking}>
        <View style={styles.home_listBooking_header}>
          <Text style={styles.home_listBooking_header_title}>Đặt bàn hôm nay</Text>
        </View>
        <FlatList
          data={dataBooking}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} onPress={() => onPressBooking(item)} style={styles.home_listBooking_table}>
              <View style={styles.home_listBooking_table_headLeft}>
                <Text style={styles.home_listBooking_table_headLeft_tableNum}>Bàn {item.tableNum}</Text>
              </View>
              <View style={styles.home_listBooking_table_info}>
                <View style={styles.home_listBooking_table_info_customer}>
                  <Text style={styles.home_listBooking_table_info_customer_khachHang}>Khách hàng:</Text>
                  <Text style={styles.home_listBooking_table_info_customer_trnThienQu}>{item.cusName}</Text>
                </View>
                <View style={styles.home_listBooking_table_info_time}>
                  <Text style={styles.home_listBooking_table_info_time_thiGian}>Thời gian:</Text>
                  <Text style={styles.home_listBooking_table_info_time_x0700080014062021}>{item.startTime} - {item.duringTo}</Text>
                </View>
                <View style={styles.home_listBooking_table_info_status}>
                  <Text style={styles.home_listBooking_table_info_status_tinhTrng}>Tình trạng:</Text>
                  <Text style={item.status === "Sắp tới" ?
                    styles.home_listBooking_table_info_status_angTiQuan_green :
                    styles.home_listBooking_table_info_status_angTiQuan}>{item.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
export default HomeTab;

const styles = StyleSheet.create({
  "home": {
    backgroundColor: "rgba(220, 220, 220, 1)",
    flex: 1,
    alignItems: "center"
  },
  "home_header": {
    "height": 120,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    marginBottom: 10,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "rgba(241, 211, 126, 1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  "home_header_logo": {
    "width": 155,
    "height": 90,
    "marginLeft": 25,
    "marginTop": 19
  },
  "home_header_logo_logoPng": {
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
  "home_header_logo_asset1": {
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
  "home_header_nameAccount": {
    marginTop: 15,
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  "home_header_hello": {
    "color": "#EC6D18",
    "fontSize": 23,
    "fontWeight": "500",
    "fontFamily": "Roboto",
    "marginLeft":10
  },
  "home_header_name": {
    marginLeft: 10,
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  },
  "home_header_qrBtn": {
    "width": 28,
    "height": 28,
    marginRight: 27,
    marginTop: 0,
  },
  "home_info": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 28,
    "borderTopRightRadius": 28,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    "width": "70%",
    "marginTop": -30,
    alignSelf: "center"
  },
  "home_info_left": {
    "marginTop": 21,
    "marginLeft": 40,
    "width": 99,
    "height": 99,
  },
  "home_info_left_photo": {
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 6,
    "width": 60,
    "height": 60,
  },
  "home_info_left_descriptionAccount": {
    "opacity": 1,
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
    alignSelf: "center"
    // "width": 40,
    // "height": 14,
    // "left": 23,
    // "top": 84
  },
  "home_info_left_fullname": {
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
  "home_info_right": {
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
  "home_info_right_address": {
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
  "home_info_right_phone": {
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
  "home_info_right_shopName": {
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
    "backgroundColor": "rgba(255, 248, 242, 1)",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    flex: 1,
    width: "90%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  "home_listBooking_table": {
    "borderRadius": 8,
    backgroundColor:"#FFF7DF",
    marginTop: 10,
    marginHorizontal: 10,
    "padding": 10,
    flexDirection: "row",
    flex: 1,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
  },
  "home_listBooking_table_info": {
    "marginTop": 9,
    "marginLeft": 15,
    "borderRadius": 13,
  },
  "home_listBooking_table_info_customer": {
    flexDirection: "row"
  },
  "home_listBooking_table_info_customer_khachHang": {
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "home_listBooking_table_info_customer_trnThienQu": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    marginLeft: 5,
  },
  "home_listBooking_table_info_time": {
    flexDirection: "row"
  },
  "home_listBooking_table_info_time_x0700080014062021": {
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    marginLeft: 5,
  },
  "home_listBooking_table_info_time_thiGian": {
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "home_listBooking_table_info_status": {
    flexDirection: "row"
  },
  "home_listBooking_table_info_status_angTiQuan": {
    "color": "rgba(183, 137, 0, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    marginLeft: 5,
  },
  "home_listBooking_table_info_status_angTiQuan_green": {
    "color": "#26B42A",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    marginLeft: 5,
  },
  "home_listBooking_table_info_status_tinhTrng": {
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "home_listBooking_table_headLeft": {
    "height": 75,
    "width": 75,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 3,
      "height": 3
    },
    "shadowRadius": 6,
    backgroundColor: "rgba(249, 174, 81, 1)",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1%"
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
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "home_listBooking_header": {
    "width": "100%",
    "height": 37,
    borderBottomColor: "rgba(212, 174, 57, 1)",
    borderBottomWidth: 2,
    paddingLeft: 15,
    paddingTop: 5
  },
  "home_listBooking_header_boder": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "color": "rgba(212, 174, 57, 1)",
    "fontSize": 17,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "marginTop":5
  },
});