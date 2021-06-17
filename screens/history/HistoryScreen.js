import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

const HistoryScreen = () => {
    return (
    <ScrollView style={styles.history}>
        <View style={styles.history_rectangle15}></View>
        <Svg style={styles.history_path6} preserveAspectRatio="none" viewBox="0 -0.000003814697265625 393 743.6717529296875" fill="rgba(249, 249, 249, 1)"><SvgPath d="M 60 0 L 333 0 C 366.1370849609375 0 393 25.64466285705566 393 57.27895736694336 L 393 743.6717529296875 L 0 743.6717529296875 L 0 57.27895736694336 C 0 25.64466285705566 26.8629150390625 0 60 0 Z"  /></Svg>
        <View style={styles.history_group59}>
            <View style={styles.history_group59_group58}>
                <Svg style={styles.history_group59_group58_path7} preserveAspectRatio="none" viewBox="0 0 118 118" fill="rgba(249, 174, 81, 1)"><SvgPath d="M 23 0 L 95 0 C 107.7025527954102 0 118 10.29745006561279 118 23 L 118 95 C 118 107.7025527954102 107.7025527954102 118 95 118 L 23 118 C 10.29745006561279 118 0 107.7025527954102 0 95 L 0 23 C 0 10.29745006561279 10.29745006561279 0 23 0 Z"  /></Svg>
                <Text style={styles.history_group59_group58_ban1}>Bàn 1</Text>
                <Text style={styles.history_group59_group58_x2Ngi}>2 người</Text>
            </View>
        </View>
        <Text style={styles.history_lchS}>Lịch sử</Text>
        <Text style={styles.history_sBan6}>Số bàn: 6</Text>
        <Svg style={styles.history_ellipse1} preserveAspectRatio="none" viewBox="0 0 44 44" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse1" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/ellipse1.png')} x="0" y="0" width="44.00px" height="44.00px" /></Pattern></Defs><SvgPath d="M 22 0 C 34.15026473999023 0 44 9.849736213684082 44 22 C 44 34.15026473999023 34.15026473999023 44 22 44 C 9.849736213684082 44 0 34.15026473999023 0 22 C 0 9.849736213684082 9.849736213684082 0 22 0 Z" fill="url(#img-ellipse1)" /></Svg>
        <View style={styles.history_group143}>
            <View style={styles.history_group143_group142}>
                <ReactImage source={require('./assets/logoPng.png')} style={styles.history_group143_group142_logoPng} />
            </View>
            <ReactImage dsource={require('./assets/asset1.png')} style={styles.history_group143_asset1} />
        </View>
    </ScrollView>
    );
}
export default HistoryScreen;

History.propTypes = {

}

History.defaultProps = {

}


const styles = StyleSheet.create({
  "history": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "alignSelf": 'center',
    "width": 393,
    "height": 851,
    "top": 0
  },
  "history_rectangle15": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "history_path6": {
    "opacity": 1,
    "position": "absolute",
    "width": 393,
    "height": 743.67,
    "left": 0,
    "top": 107.33
  },
  "history_group59": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 118,
    "height": 118,
    "left": 51,
    "top": 222
  },
  "history_group59_group58": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 118,
    "height": 118,
    "left": 0,
    "top": 0
  },
  "history_group59_group58_path7": {
    "opacity": 1,
    "position": "absolute",
    "width": 118,
    "height": 118,
    "left": 0,
    "top": 0
  },
  "history_group59_group58_ban1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 64,
    "height": 30,
    "left": 28,
    "top": 24
  },
  "history_group59_group58_x2Ngi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 68,
    "height": 24,
    "left": 25,
    "top": 64
  },
  "history_lchS": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 24,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 79,
    "height": 29,
    "left": 51,
    "top": 130
  },
  "history_sBan6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 62,
    "height": 18,
    "left": 51,
    "top": 162
  },
  "history_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "width": 44,
    "height": 44,
    "left": 329,
    "top": 40
  },
  "history_group143": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 171,
    "height": 100,
    "left": 22,
    "top": 12
  },
  "history_group143_group142": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 140,
    "height": 100,
    "left": 0,
    "top": 0
  },
  "history_group143_group142_logoPng": {
    "opacity": 1,
    "position": "absolute",
    "width": 140,
    "height": 100,
    "left": 0,
    "top": 0
  },
  "history_group143_asset1": {
    "opacity": 1,
    "position": "absolute",
    "width": 63,
    "height": 20,
    "left": 108,
    "top": 57
  }
});