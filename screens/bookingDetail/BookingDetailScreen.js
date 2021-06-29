import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const BookingDetailScreen = ({ navigation, route }) => {
  const { booking } = route.params;
  const onPressBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.bookingDetail}>
      <View style={styles.bookingDetail_header}>
        <TouchableOpacity onPress={onPressBack} styles={styles.bookingDetail_header_back_btn}>
          <ReactImage source={require('./assets/back.png')} style={styles.bookingDetail_header_back} />
        </TouchableOpacity>
        <Text style={styles.bookingDetail_header_title}>CHI TIẾT ĐẶT BÀN SỐ {booking.tableNum}</Text>
      </View>
      <View style={styles.bookingDetail_info}>
        <View style={styles.bookingDetail_info_account}>
          <ReactImage style={styles.bookingDetail_info_account_avatar} source={require('./assets/photo.png')} />
          <View style={styles.bookingDetail_info_account_account}>
            <Text style={styles.bookingDetail_info_account_account_name}>{booking.cusName}</Text>
            <Text style={styles.bookingDetail_info_account_account_phone}>{booking.phone}</Text>
          </View>
        </View>
        <View style={styles.bookingDetail_info_detail}>
          <View style={styles.bookingDetail_info_detail_field}>
            <Svg style={styles.bookingDetail_info_detail_date_calenderIcon} preserveAspectRatio="none" viewBox="0 0 20 23.66668701171875" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 2.5 7.395839691162109 L 2.5 20.70835113525391 L 17.5 20.70835113525391 L 17.5 7.395839691162109 L 2.5 7.395839691162109 Z M 16.25 2.958335876464844 L 18.75 2.958335876464844 C 19.5 2.958335876464844 20 3.55000376701355 20 4.437503814697266 L 20 22.18751907348633 C 20 23.07502174377441 19.5 23.66668701171875 18.75 23.66668701171875 L 1.25 23.66668701171875 C 0.5 23.66668701171875 0 23.07502174377441 0 22.18751907348633 L 0 4.437503814697266 C 0 3.55000376701355 0.5000000596046448 2.958335876464844 1.25 2.958335876464844 L 3.75 2.958335876464844 L 3.75 1.479167938232422 C 3.75 0.5916671752929688 4.25 0 5 0 C 5.75 0 6.25 0.5916672348976135 6.25 1.479167938232422 L 6.25 2.958335876464844 L 13.75 2.958335876464844 L 13.75 1.479167938232422 C 13.75 0.5916671752929688 14.25 0 15 0 C 15.75000095367432 0 16.25 0.5916672348976135 16.25 1.479167938232422 L 16.25 2.958335876464844 Z M 15 17.75001525878906 L 12.5 17.75001525878906 L 12.5 14.79167938232422 L 15 14.79167938232422 L 15 17.75001525878906 Z M 11.25 17.75001525878906 L 8.75 17.75001525878906 L 8.75 14.79167938232422 L 11.25 14.79167938232422 L 11.25 17.75001525878906 Z M 15 13.3125114440918 L 12.5 13.3125114440918 L 12.5 10.35417556762695 L 15 10.35417556762695 L 15 13.3125114440918 Z M 11.25 13.3125114440918 L 8.75 13.3125114440918 L 8.75 10.35417556762695 L 11.25 10.35417556762695 L 11.25 13.3125114440918 Z M 7.5 17.75001525878906 L 5 17.75001525878906 L 5 14.79167938232422 L 7.5 14.79167938232422 L 7.5 17.75001525878906 Z" /></Svg>
            <Text style={styles.bookingDetail_info_detail_title}>Ngày đặt:</Text>
            <Text style={styles.bookingDetail_info_detail_value}>{booking.date}</Text>
          </View>
          <View style={styles.bookingDetail_info_detail_field}>
            <Svg style={styles.bookingDetail_info_detail_time_timeIcon} preserveAspectRatio="none" viewBox="3 3 20.77227783203125 20.77227783203125" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 13.37575149536133 3 C 7.642603397369385 3 3 7.652990341186523 3 13.38613700866699 C 3 19.11928558349609 7.642603397369385 23.77227592468262 13.37575149536133 23.77227592468262 C 19.11928558349609 23.77227592468262 23.77227592468262 19.11928558349609 23.77227592468262 13.38613700866699 C 23.77227592468262 7.652988910675049 19.11928558349609 3 13.37575149536133 3 Z M 13.38613700866699 21.69504737854004 C 8.795464515686035 21.69504737854004 5.07722806930542 17.9768123626709 5.07722806930542 13.38613700866699 C 5.07722806930542 8.795463562011719 8.795464515686035 5.07722806930542 13.38613700866699 5.07722806930542 C 17.9768123626709 5.07722806930542 21.69504737854004 8.795464515686035 21.69504737854004 13.38613700866699 C 21.69504737854004 17.9768123626709 17.9768123626709 21.69504737854004 13.38613700866699 21.69504737854004 Z M 13.90544414520264 8.193069458007813 L 12.3475227355957 8.193069458007813 L 12.3475227355957 14.42475128173828 L 17.80024528503418 17.69638442993164 L 18.5792064666748 16.41888999938965 L 13.90544414520264 13.64579010009766 L 13.90544414520264 8.193069458007813 Z" /></Svg>
            <Text style={styles.bookingDetail_info_detail_title}>Thời gian:</Text>
            <Text style={styles.bookingDetail_info_detail_value}>{booking.startTime} - {booking.duringTo}</Text>
          </View>
          <View style={styles.bookingDetail_info_detail_field}>
            <Svg style={styles.bookingDetail_info_detail_table_tableIcon} preserveAspectRatio="none" viewBox="0.5789474844932556 1.7266652584075928 22 19.70452880859375" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 12.34686660766602 8.95699405670166 L 12.34686660766602 15.78857231140137 C 12.81744194030762 16.06877326965332 13.11478519439697 16.58010101318359 13.11478519439697 17.16972351074219 C 13.11478519439697 18.06455993652344 12.44551372528076 18.75558853149414 11.57849407196045 18.75558853149414 C 10.73603534698486 18.75558853149414 10.04220294952393 18.06455993652344 10.04220294952393 17.16972351074219 C 10.04220294952393 16.58010101318359 10.34049701690674 16.06877326965332 10.81057548522949 15.78857231140137 L 10.81057548522949 8.95699405670166 C 11.08335876464844 8.981508255004883 11.35573482513428 8.981508255004883 11.62806701660156 8.981508255004883 C 11.87583827972412 8.981508255004883 12.12365531921387 8.981508255004883 12.34686660766602 8.95699405670166 L 12.34686660766602 8.95699405670166 Z M 11.57894706726074 1.726665258407593 C 17.6500244140625 1.726665258407593 22.57894706726074 3.158745765686035 22.57894706726074 4.901151180267334 C 22.57894706726074 6.66436243057251 17.64957237243652 8.073782920837402 11.57894706726074 8.073782920837402 C 5.509271621704102 8.073782920837402 0.5789474844932556 6.664407253265381 0.5789474844932556 4.901151180267334 C 0.5789474844932556 3.1582932472229 5.508820056915283 1.726665377616882 11.57894706726074 1.726665377616882 L 11.57894706726074 1.726665377616882 Z M 13.13930034637451 18.69303512573242 C 12.91699314117432 19.1279239654541 12.2972936630249 19.71614265441895 11.57844924926758 19.71614265441895 C 10.86055469512939 19.71614265441895 10.24085426330566 19.1279239654541 10.01805019378662 18.69303512573242 C 6.425772666931152 18.89729309082031 3.72511887550354 20.05007743835449 3.72511887550354 21.27744674682617 C 3.72511887550354 21.32792282104492 3.72511887550354 21.37980270385742 3.74967885017395 21.43118476867676 L 19.40812492370605 21.43118476867676 C 19.43173599243164 21.37975692749023 19.43173599243164 21.32787895202637 19.43173599243164 21.27744674682617 C 19.43173599243164 20.05007934570313 16.73153305053711 18.89774703979492 13.13930130004883 18.69303512573242 Z" /></Svg>
            <Text style={styles.bookingDetail_info_detail_title}>Loại bàn:</Text>
            <Text style={styles.bookingDetail_info_detail_value}>{booking.personNum} khách</Text>
          </View>
          <View style={styles.bookingDetail_info_detail_field}>
            <Svg style={styles.bookingDetail_info_detail_status_statusIccon} preserveAspectRatio="none" viewBox="0.5625 0.5625 22.125 22.125" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 22.6875 11.625 C 22.6875 17.73466682434082 17.73466682434082 22.6875 11.625 22.6875 C 5.515332221984863 22.6875 0.5625 17.73466491699219 0.5625 11.625 C 0.5625 5.51533317565918 5.515332698822021 0.5625 11.625 0.5625 C 17.73466682434082 0.5625 22.6875 5.515332698822021 22.6875 11.625 Z M 10.34540843963623 17.48250389099121 L 18.55306816101074 9.274843215942383 C 18.83177185058594 8.996139526367188 18.83177185058594 8.544227600097656 18.55306816101074 8.265523910522461 L 17.54374885559082 7.256203651428223 C 17.26504707336426 6.977455139160156 16.81313514709473 6.977455139160156 16.53438568115234 7.256203651428223 L 9.840725898742676 13.94982051849365 L 6.715613842010498 10.82470893859863 C 6.436910152435303 10.54600524902344 5.984998226165771 10.54600524902344 5.706250190734863 10.82470893859863 L 4.696930885314941 11.83402824401855 C 4.418227195739746 12.11273193359375 4.418227195739746 12.56464385986328 4.696930885314941 12.84334754943848 L 9.336044311523438 17.48246002197266 C 9.614792823791504 17.76120758056641 10.06665992736816 17.76120758056641 10.34540843963623 17.48250389099121 Z" /></Svg>
            <Text style={styles.bookingDetail_info_detail_title}>Tình trạng:</Text>
            <Text
              style={booking.status == "Sắp tới" ?
                styles.bookingDetail_info_detail_value_comming :
                styles.bookingDetail_info_detail_value_checkin}
            >
              {booking.status}
            </Text>
          </View>
        </View>
        {booking.status == "Sắp tới" ?
          <TouchableOpacity style={{ borderRadius: 10, paddingVertical: 10, width:"90%", alignItems:"center", backgroundColor: "rgba(241, 211, 126, 1)" }} >
            <Text style={{ color: "rgba(84, 71, 65, 1)", fontFamily: "Roboto", fontWeight: "700" }}>Quét mã QR để xác nhận</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={{ borderRadius: 10, paddingVertical: 10, width:"90%", alignItems:"center", backgroundColor: "rgba(241, 211, 126, 1)" }} >
            <Text style={{ color: "rgba(84, 71, 65, 1)", fontFamily: "Roboto", fontWeight: "700" }}>Khách đã về</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}
export default BookingDetailScreen;


const styles = StyleSheet.create({
  "bookingDetail": {
    "backgroundColor": "rgba(249, 249, 249, 1)",
    flex: 1
  },
  "bookingDetail_header": {
    "width": "100%",
    "height": 87,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "backgroundColor": "rgba(241, 211, 126, 1)",
  },
  "bookingDetail_header_back_btn": {
  },
  "bookingDetail_header_back": {
    "position": "absolute",
    "width": 20,
    "height": 20,
    "left": 19,
    "top": 46,
  },
  "bookingDetail_header_title": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    marginTop: 40,
    alignSelf: "center"
  },
  "bookingDetail_info": {
    flex: 1,
    alignItems: "center"
  },
  "bookingDetail_info_account": {
    "borderRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": "90%",
    margin: 10,
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },
  "bookingDetail_info_account_avatar": {
    "width": 80,
    "height": 80,
    borderRadius: 40,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 6,
  },
  "bookingDetail_info_account_account": {
    "width": 141,
    "height": 45,
    marginLeft: 10
  },
  "bookingDetail_info_account_account_phone": {
    "color": "rgba(164, 162, 162,1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontFamily": "Roboto",
  },
  "bookingDetail_info_account_account_name": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontFamily": "Roboto",
  },
  "bookingDetail_info_detail": {
    "margin": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "borderRadius": 10,
    "width": "90%",
    marginBottom: 10
  },
  "bookingDetail_info_detail_field": {
    "margin": 20,
    flexDirection: "row",
    alignItems: "center",
  },
  "bookingDetail_info_detail_title": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    marginLeft: 10
  },
  "bookingDetail_info_detail_value": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(116, 113, 112, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 110,
  },
  bookingDetail_info_detail_value_checkin: {
    "opacity": 1,
    "position": "absolute",
    "color": "#FC891A",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "left": 110,
  },
  bookingDetail_info_detail_value_comming: {
    "opacity": 1,
    "position": "absolute",
    "color": "#13B713",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "left": 110,
  },
  "bookingDetail_info_detail_date_calenderIcon": {
    "width": 20,
    "height": 23.67,
  },
  "bookingDetail_info_detail_time_timeIcon": {
    "width": 20.77,
    "height": 20.77,
  },
  "bookingDetail_info_detail_table_tableIcon": {
    "width": 22,
    "height": 19.7,
  },
  "bookingDetail_info_detail_status_statusIccon": {
    "width": 22.13,
    "height": 22.13,
  },
});