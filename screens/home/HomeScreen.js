import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from "./tab/HomeTab";
import HistoryTab from "./tab/HistoryTab";
import VoucherTab from './tab/VoucherTab';
import ShopInfoTab from './tab/ShopInfoTab';
import AccountTab from './tab/AccountTab';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {

  return (
    <View style={{ backgroundColor: "rgba(220, 220, 220, 1)", flex: 1 }}>
      <Tab.Navigator initialRouteName="Trang chủ" tabBar={(props) => {
        const { state, descriptors, navigation } = props;
        return (
          <View style={styles.menu}>
            {state.routes.map((route, index) => {
              const label = route.name;

              const { options } = descriptors[route.key];
              const img = options.img;
              const isFocused = state.index === index;
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };
              return (
                <TouchableOpacity
                  key={index}
                  accessibilityRole="button"
                  accessibilityStates={isFocused ? ['selected'] : []}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  style={{ flex: 1, alignItems: "center" }}
                >
                  <View style={styles.menu_item}>
                    <ReactImage source={img} style={styles.menu_item_icon} />
                    <Text style={styles.menu_item_title}>{label}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        )

      }}>
        <Tab.Screen
          name="Trang chủ"
          options={{
            img: require('./assets/tabHome.png')
          }}
          component={HomeTab} />
        <Tab.Screen
          name="Quán tôi"
          options={{
            img: require('./assets/tabShop.png')
          }}
          component={ShopInfoTab} />
        <Tab.Screen
          name="Khuyến mãi"
          options={{
            img: require('./assets/tabVoucher.png')
          }}
          component={VoucherTab} />
        <Tab.Screen
          name="Lịch sử"
          options={{
            img: require('./assets/tabHistory.png')
          }}
          component={HistoryTab} />
        <Tab.Screen
          name="Tài khoản"
          options={{
            img: require('./assets/tabAccount.png')
          }}
          component={AccountTab} />
      </Tab.Navigator>
    </View>
  );
}

export default HomeScreen;



const styles = StyleSheet.create({

  "menu": {
    "backgroundColor": "#FFF",
    "borderTopLeftRadius": 30,
    "borderTopRightRadius": 30,
    "width": "100%",
    "height": 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  "menu_group57": {
    "position": "absolute",

    "width": 393,
    "height": 79,

  },
  "menu_group57_path5": {
    "position": "absolute",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.3411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": 393,
    "height": 79,


  },
  "menu_item": {
    flex: 1,
    "height": 55,
    alignItems: "center",
  },
  "menu_item_rectangle11": {
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
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
    "top": -10
  },
  "menu_item_icon": {
    "width": 30,
    "height": 30,
    "bottom": 7
  },
  "menu_item_title": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
  },
  "menu_group7_rectangle12": {
    "position": "absolute",
    "width": 100,
    "height": 89,
    "left": -29,
    "top": -11
  },
  "menu_group8_rectangle13": {
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
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
  "menu_group8_group12": {
    "position": "absolute",

    "width": 50,
    "height": 51,


  },
  "menu_group9_rectangle14": {
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
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
    "left": -30,
    "top": -14
  },
  "menu_group9_group11": {
    "position": "absolute",

    "width": 36,
    "height": 51,


  },
});