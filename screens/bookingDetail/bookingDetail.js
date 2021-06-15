import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class BookingDetail extends Component {

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
    <ScrollView data-layer="0d43540c-ac5f-4f88-ba1a-45e95bdc2802" style={styles.bookingDetail}>
        <View data-layer="044d7d1b-5137-406d-9ff7-cfa61f65dcd6" style={styles.bookingDetail_header}>
            <View data-layer="819d81bc-a2d8-4dc4-a63b-e845a912e430" style={styles.bookingDetail_header_bgfc5bc59e}></View>
            <ReactImage data-layer="800370af-9827-4979-96ae-d55598cc1af6" source={require('./assets/back.png')} style={styles.bookingDetail_header_back} />
            <Text data-layer="6f5c7ff6-c3d6-4a21-bf4b-f0afabf9dc03" style={styles.bookingDetail_header_titlefd893f9d}>CHI TIẾT ĐẶT BÀN</Text>
        </View>
        <View data-layer="7efac757-29a7-4f76-9703-340c040a34e0" style={styles.bookingDetail_info}>
            <View data-layer="2cfe7a02-87fd-4887-b24b-762e9c41588a" style={styles.bookingDetail_info_account3183c67e}>
                <View data-layer="351b0285-b885-49f5-94ad-8152ee1b5d4c" style={styles.bookingDetail_info_account3183c67e_bge585de56}></View>
                <View data-layer="3c61cf11-e949-4144-88a0-a9ef959f5bbf" style={styles.bookingDetail_info_account3183c67e_avatar}>
                    <Svg data-layer="a4b393d0-4dbe-4c2f-afba-57a5a111782b" style={styles.bookingDetail_info_account3183c67e_avatar_photo} preserveAspectRatio="none" viewBox="0 0 80 81" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-photo" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/photo.png')} x="0" y="0" width="80.00px" height="81.00px" /></Pattern></Defs><SvgPath d="M 40 0 C 62.09139251708984 0 80 18.13246917724609 80 40.5 C 80 62.86753082275391 62.09139251708984 81 40 81 C 17.90860939025879 81 0 62.86753082275391 0 40.5 C 0 18.13246917724609 17.90860939025879 0 40 0 Z" fill="url(#img-photo)" /></Svg>
                </View>
                <View data-layer="66d15c43-d9aa-4a38-b1f0-6a586fff40c9" style={styles.bookingDetail_info_account3183c67e_account}>
                    <Text data-layer="e980ca34-c164-41f6-9f6e-9529de9878ee" style={styles.bookingDetail_info_account3183c67e_account_x0912345678}>0912345678</Text>
                    <Text data-layer="a9d93aa9-1a82-4cbc-8295-f5a026871f97" style={styles.bookingDetail_info_account3183c67e_account_trnThienQu}>Trần Thiên Quý</Text>
                </View>
            </View>
            <View data-layer="c9b6c343-754e-452e-821d-b3608d1ddf89" style={styles.bookingDetail_info_detail}>
                <View data-layer="a1eb5165-25b4-45c0-a6a8-0af52f7437ae" style={styles.bookingDetail_info_detail_bg}></View>
                <View data-layer="32358d09-9079-4d0e-9513-a78418743bdb" style={styles.bookingDetail_info_detail_date}>
                    <Text data-layer="1cce506d-4160-4f06-887f-74d986c65e67" style={styles.bookingDetail_info_detail_date_title4c79e453}>Ngày đặt:</Text>
                    <Svg data-layer="441b74a9-c268-48b2-8b98-01309f7b4b1d" style={styles.bookingDetail_info_detail_date_calenderIcon} preserveAspectRatio="none" viewBox="0 0 20 23.66668701171875" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 2.5 7.395839691162109 L 2.5 20.70835113525391 L 17.5 20.70835113525391 L 17.5 7.395839691162109 L 2.5 7.395839691162109 Z M 16.25 2.958335876464844 L 18.75 2.958335876464844 C 19.5 2.958335876464844 20 3.55000376701355 20 4.437503814697266 L 20 22.18751907348633 C 20 23.07502174377441 19.5 23.66668701171875 18.75 23.66668701171875 L 1.25 23.66668701171875 C 0.5 23.66668701171875 0 23.07502174377441 0 22.18751907348633 L 0 4.437503814697266 C 0 3.55000376701355 0.5000000596046448 2.958335876464844 1.25 2.958335876464844 L 3.75 2.958335876464844 L 3.75 1.479167938232422 C 3.75 0.5916671752929688 4.25 0 5 0 C 5.75 0 6.25 0.5916672348976135 6.25 1.479167938232422 L 6.25 2.958335876464844 L 13.75 2.958335876464844 L 13.75 1.479167938232422 C 13.75 0.5916671752929688 14.25 0 15 0 C 15.75000095367432 0 16.25 0.5916672348976135 16.25 1.479167938232422 L 16.25 2.958335876464844 Z M 15 17.75001525878906 L 12.5 17.75001525878906 L 12.5 14.79167938232422 L 15 14.79167938232422 L 15 17.75001525878906 Z M 11.25 17.75001525878906 L 8.75 17.75001525878906 L 8.75 14.79167938232422 L 11.25 14.79167938232422 L 11.25 17.75001525878906 Z M 15 13.3125114440918 L 12.5 13.3125114440918 L 12.5 10.35417556762695 L 15 10.35417556762695 L 15 13.3125114440918 Z M 11.25 13.3125114440918 L 8.75 13.3125114440918 L 8.75 10.35417556762695 L 11.25 10.35417556762695 L 11.25 13.3125114440918 Z M 7.5 17.75001525878906 L 5 17.75001525878906 L 5 14.79167938232422 L 7.5 14.79167938232422 L 7.5 17.75001525878906 Z"  /></Svg>
                    <Text data-layer="6bfad068-24d6-4a1e-88c7-075472dc5fa5" style={styles.bookingDetail_info_detail_date_valuee9c548f7}>14/06/2020</Text>
                </View>
                <View data-layer="b5f0d7da-ac22-476f-b1a8-12ad2f1e7030" style={styles.bookingDetail_info_detail_time}>
                    <Svg data-layer="4f4912a1-c19b-460a-9fd3-f77f371edb36" style={styles.bookingDetail_info_detail_time_timeIcon} preserveAspectRatio="none" viewBox="3 3 20.77227783203125 20.77227783203125" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 13.37575149536133 3 C 7.642603397369385 3 3 7.652990341186523 3 13.38613700866699 C 3 19.11928558349609 7.642603397369385 23.77227592468262 13.37575149536133 23.77227592468262 C 19.11928558349609 23.77227592468262 23.77227592468262 19.11928558349609 23.77227592468262 13.38613700866699 C 23.77227592468262 7.652988910675049 19.11928558349609 3 13.37575149536133 3 Z M 13.38613700866699 21.69504737854004 C 8.795464515686035 21.69504737854004 5.07722806930542 17.9768123626709 5.07722806930542 13.38613700866699 C 5.07722806930542 8.795463562011719 8.795464515686035 5.07722806930542 13.38613700866699 5.07722806930542 C 17.9768123626709 5.07722806930542 21.69504737854004 8.795464515686035 21.69504737854004 13.38613700866699 C 21.69504737854004 17.9768123626709 17.9768123626709 21.69504737854004 13.38613700866699 21.69504737854004 Z M 13.90544414520264 8.193069458007813 L 12.3475227355957 8.193069458007813 L 12.3475227355957 14.42475128173828 L 17.80024528503418 17.69638442993164 L 18.5792064666748 16.41888999938965 L 13.90544414520264 13.64579010009766 L 13.90544414520264 8.193069458007813 Z"  /></Svg>
                    <Text data-layer="b1a1ae30-f379-47b1-9c2f-2216b8b4d649" style={styles.bookingDetail_info_detail_time_title454df45b}>Thời gian:</Text>
                    <Text data-layer="e9b320aa-9929-4a96-a452-a085052760ac" style={styles.bookingDetail_info_detail_time_value4c01759a}>07:00 - 08:00</Text>
                </View>
                <View data-layer="df566fc0-d9ad-480f-8680-5610fae74cc7" style={styles.bookingDetail_info_detail_tabled500339c}>
                    <Text data-layer="9cde23af-a3da-4376-bff5-8516a27b2055" style={styles.bookingDetail_info_detail_tabled500339c_titledc72b81e}>Loại bàn:</Text>
                    <Svg data-layer="7e369fbb-a989-49e8-bd17-7bcd4dcf5d57" style={styles.bookingDetail_info_detail_tabled500339c_table} preserveAspectRatio="none" viewBox="0.5789474844932556 1.7266652584075928 22 19.70452880859375" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 12.34686660766602 8.95699405670166 L 12.34686660766602 15.78857231140137 C 12.81744194030762 16.06877326965332 13.11478519439697 16.58010101318359 13.11478519439697 17.16972351074219 C 13.11478519439697 18.06455993652344 12.44551372528076 18.75558853149414 11.57849407196045 18.75558853149414 C 10.73603534698486 18.75558853149414 10.04220294952393 18.06455993652344 10.04220294952393 17.16972351074219 C 10.04220294952393 16.58010101318359 10.34049701690674 16.06877326965332 10.81057548522949 15.78857231140137 L 10.81057548522949 8.95699405670166 C 11.08335876464844 8.981508255004883 11.35573482513428 8.981508255004883 11.62806701660156 8.981508255004883 C 11.87583827972412 8.981508255004883 12.12365531921387 8.981508255004883 12.34686660766602 8.95699405670166 L 12.34686660766602 8.95699405670166 Z M 11.57894706726074 1.726665258407593 C 17.6500244140625 1.726665258407593 22.57894706726074 3.158745765686035 22.57894706726074 4.901151180267334 C 22.57894706726074 6.66436243057251 17.64957237243652 8.073782920837402 11.57894706726074 8.073782920837402 C 5.509271621704102 8.073782920837402 0.5789474844932556 6.664407253265381 0.5789474844932556 4.901151180267334 C 0.5789474844932556 3.1582932472229 5.508820056915283 1.726665377616882 11.57894706726074 1.726665377616882 L 11.57894706726074 1.726665377616882 Z M 13.13930034637451 18.69303512573242 C 12.91699314117432 19.1279239654541 12.2972936630249 19.71614265441895 11.57844924926758 19.71614265441895 C 10.86055469512939 19.71614265441895 10.24085426330566 19.1279239654541 10.01805019378662 18.69303512573242 C 6.425772666931152 18.89729309082031 3.72511887550354 20.05007743835449 3.72511887550354 21.27744674682617 C 3.72511887550354 21.32792282104492 3.72511887550354 21.37980270385742 3.74967885017395 21.43118476867676 L 19.40812492370605 21.43118476867676 C 19.43173599243164 21.37975692749023 19.43173599243164 21.32787895202637 19.43173599243164 21.27744674682617 C 19.43173599243164 20.05007934570313 16.73153305053711 18.89774703979492 13.13930130004883 18.69303512573242 Z"  /></Svg>
                    <Text data-layer="0316dc85-b024-4898-98dd-8e632aaea02c" style={styles.bookingDetail_info_detail_tabled500339c_value807bd948}>4 Khách</Text>
                </View>
                <View data-layer="7bb10221-6916-41ea-a012-5224a8cbed04" style={styles.bookingDetail_info_detail_status}>
                    <Text data-layer="5b9a47e1-274b-4b42-8426-b108d5a9c858" style={styles.bookingDetail_info_detail_status_title}>Tình trạng:</Text>
                    <Svg data-layer="0c5dee37-a48d-4dd0-9b0e-da54a79b0a2e" style={styles.bookingDetail_info_detail_status_statusIccon} preserveAspectRatio="none" viewBox="0.5625 0.5625 22.125 22.125" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 22.6875 11.625 C 22.6875 17.73466682434082 17.73466682434082 22.6875 11.625 22.6875 C 5.515332221984863 22.6875 0.5625 17.73466491699219 0.5625 11.625 C 0.5625 5.51533317565918 5.515332698822021 0.5625 11.625 0.5625 C 17.73466682434082 0.5625 22.6875 5.515332698822021 22.6875 11.625 Z M 10.34540843963623 17.48250389099121 L 18.55306816101074 9.274843215942383 C 18.83177185058594 8.996139526367188 18.83177185058594 8.544227600097656 18.55306816101074 8.265523910522461 L 17.54374885559082 7.256203651428223 C 17.26504707336426 6.977455139160156 16.81313514709473 6.977455139160156 16.53438568115234 7.256203651428223 L 9.840725898742676 13.94982051849365 L 6.715613842010498 10.82470893859863 C 6.436910152435303 10.54600524902344 5.984998226165771 10.54600524902344 5.706250190734863 10.82470893859863 L 4.696930885314941 11.83402824401855 C 4.418227195739746 12.11273193359375 4.418227195739746 12.56464385986328 4.696930885314941 12.84334754943848 L 9.336044311523438 17.48246002197266 C 9.614792823791504 17.76120758056641 10.06665992736816 17.76120758056641 10.34540843963623 17.48250389099121 Z"  /></Svg>
                    <Text data-layer="4cdcc370-cc93-40fd-8a89-fe0a986edfa5" style={styles.bookingDetail_info_detail_status_value}>Đã checkin</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    );
  }
}

BookingDetail.propTypes = {

}

BookingDetail.defaultProps = {

}


const styles = StyleSheet.create({
  "bookingDetail": {
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
  "bookingDetail_header": {
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
    "height": 87,
    "left": 0,
    "top": 0
  },
  "bookingDetail_header_bgfc5bc59e": {
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
    "height": 87,
    "left": 0,
    "top": 0
  },
  "bookingDetail_header_back": {
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
    "left": 19,
    "top": 46
  },
  "bookingDetail_header_titlefd893f9d": {
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
    "width": 183,
    "height": 27,
    "left": 105,
    "top": 43
  },
  "bookingDetail_info": {
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
    "width": 352,
    "height": 388,
    "left": 20,
    "top": 133
  },
  "bookingDetail_info_account3183c67e": {
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
    "width": 350,
    "height": 108,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_account3183c67e_bge585de56": {
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
    "width": 350,
    "height": 108,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_account3183c67e_avatar": {
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
    "width": 80,
    "height": 81,
    "left": 22,
    "top": 12
  },
  "bookingDetail_info_account3183c67e_avatar_photo": {
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
    "width": 80,
    "height": 81,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_account3183c67e_account": {
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
    "width": 141,
    "height": 45,
    "left": 120,
    "top": 29
  },
  "bookingDetail_info_account3183c67e_account_x0912345678": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(164, 162, 162, 0.9803921568627451)",
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
    "width": 79,
    "height": 17,
    "left": 0,
    "top": 28
  },
  "bookingDetail_info_account3183c67e_account_trnThienQu": {
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
    "width": 141,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_detail": {
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
    "height": 266,
    "left": 1,
    "top": 122
  },
  "bookingDetail_info_detail_bg": {
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
    "height": 266,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_detail_date": {
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
    "width": 182.95,
    "height": 23.67,
    "left": 13.05,
    "top": 17.36
  },
  "bookingDetail_info_detail_date_title4c79e453": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
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
    "width": 61,
    "height": 17,
    "left": 31.95,
    "top": 3.5
  },
  "bookingDetail_info_detail_date_calenderIcon": {
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
    "width": 20,
    "height": 23.67,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_detail_date_valuee9c548f7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(116, 113, 112, 1)",
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
    "width": 75,
    "height": 17,
    "left": 107.95,
    "top": 3.33
  },
  "bookingDetail_info_detail_time": {
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
    "width": 193.34,
    "height": 20.77,
    "left": 12.66,
    "top": 74.3
  },
  "bookingDetail_info_detail_time_timeIcon": {
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
    "width": 20.77,
    "height": 20.77,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_detail_time_title454df45b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
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
    "left": 32.34,
    "top": 1.89
  },
  "bookingDetail_info_detail_time_value4c01759a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(116, 113, 112, 1)",
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
    "width": 85,
    "height": 17,
    "left": 108.34,
    "top": 1.89
  },
  "bookingDetail_info_detail_tabled500339c": {
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
    "width": 158,
    "height": 19.7,
    "left": 14,
    "top": 126.15
  },
  "bookingDetail_info_detail_tabled500339c_titledc72b81e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
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
    "width": 57,
    "height": 17,
    "left": 31,
    "top": 1.36
  },
  "bookingDetail_info_detail_tabled500339c_table": {
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
    "width": 22,
    "height": 19.7,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_detail_tabled500339c_value807bd948": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(116, 113, 112, 1)",
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
    "width": 51,
    "height": 17,
    "left": 107,
    "top": 0.86
  },
  "bookingDetail_info_detail_status": {
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
    "width": 177.95,
    "height": 22.13,
    "left": 12.05,
    "top": 179.31
  },
  "bookingDetail_info_detail_status_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
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
    "width": 69,
    "height": 17,
    "left": 32.95,
    "top": 1.69
  },
  "bookingDetail_info_detail_status_statusIccon": {
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
    "width": 22.13,
    "height": 22.13,
    "left": 0,
    "top": 0
  },
  "bookingDetail_info_detail_status_value": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(252, 137, 26, 1)",
    "fontSize": 14,
    "fontWeight": "700",
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
    "width": 68,
    "height": 17,
    "left": 109.95,
    "top": 1.52
  }
});