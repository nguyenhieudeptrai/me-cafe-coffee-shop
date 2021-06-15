import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class History extends Component {

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
    <ScrollView data-layer="d368e74e-2e60-4a69-917d-78e0b6de2f6a" style={styles.history}>
        <View data-layer="e8886d84-fdb0-46db-85e9-e5a639301b7c" style={styles.history_rectangle15}></View>
        <Svg data-layer="ac962bcc-7b0f-42db-8061-ec8f6cc60627" style={styles.history_path6} preserveAspectRatio="none" viewBox="0 -0.000003814697265625 393 743.6717529296875" fill="rgba(249, 249, 249, 1)"><SvgPath d="M 60 0 L 333 0 C 366.1370849609375 0 393 25.64466285705566 393 57.27895736694336 L 393 743.6717529296875 L 0 743.6717529296875 L 0 57.27895736694336 C 0 25.64466285705566 26.8629150390625 0 60 0 Z"  /></Svg>
        <View data-layer="80999bc1-3480-40e7-b31d-550c67814393" style={styles.history_group59}>
            <View data-layer="9e823a80-f1a3-484f-adc7-5d3546a3bb68" style={styles.history_group59_group58}>
                <Svg data-layer="e97ad917-9f9e-4188-8b40-8b8a1a97fd72" style={styles.history_group59_group58_path7} preserveAspectRatio="none" viewBox="0 0 118 118" fill="rgba(249, 174, 81, 1)"><SvgPath d="M 23 0 L 95 0 C 107.7025527954102 0 118 10.29745006561279 118 23 L 118 95 C 118 107.7025527954102 107.7025527954102 118 95 118 L 23 118 C 10.29745006561279 118 0 107.7025527954102 0 95 L 0 23 C 0 10.29745006561279 10.29745006561279 0 23 0 Z"  /></Svg>
                <Text data-layer="102c2937-e1ca-4054-aa71-048e7bd02e2f" style={styles.history_group59_group58_ban1}>Bàn 1</Text>
                <Text data-layer="ad002396-0179-427a-ad9b-28d0441550d9" style={styles.history_group59_group58_x2Ngi}>2 người</Text>
            </View>
        </View>
        <Text data-layer="f3293278-aa71-4ac9-95b9-e94a8fcf15ae" style={styles.history_lchS}>Lịch sử</Text>
        <Text data-layer="6877539a-5c25-41f7-8a89-a81491eeb924" style={styles.history_sBan6}>Số bàn: 6</Text>
        <Svg data-layer="94817944-a5ac-408b-97b3-c1c4e3f4d8d8" style={styles.history_ellipse1} preserveAspectRatio="none" viewBox="0 0 44 44" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse1" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/ellipse1.png')} x="0" y="0" width="44.00px" height="44.00px" /></Pattern></Defs><SvgPath d="M 22 0 C 34.15026473999023 0 44 9.849736213684082 44 22 C 44 34.15026473999023 34.15026473999023 44 22 44 C 9.849736213684082 44 0 34.15026473999023 0 22 C 0 9.849736213684082 9.849736213684082 0 22 0 Z" fill="url(#img-ellipse1)" /></Svg>
        <View data-layer="9c28fc58-8fc4-4437-a057-b66c929afcea" style={styles.history_group143}>
            <View data-layer="969089aa-5254-4f68-b379-69bc0e13fcd0" style={styles.history_group143_group142}>
                <ReactImage data-layer="01693fc5-9049-4553-b28b-40b3f920718d" source={require('./assets/logoPng.png')} style={styles.history_group143_group142_logoPng} />
            </View>
            <ReactImage data-layer="bb60c2e5-9a19-45e4-8316-811573165899" source={require('./assets/asset1.png')} style={styles.history_group143_asset1} />
        </View>
    </ScrollView>
    );
  }
}

History.propTypes = {

}

History.defaultProps = {

}


const styles = StyleSheet.create({
  "history": {
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
  "history_rectangle15": {
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
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "history_path6": {
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
    "width": 393,
    "height": 743.67,
    "left": 0,
    "top": 107.33
  },
  "history_group59": {
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
    "width": 118,
    "height": 118,
    "left": 51,
    "top": 222
  },
  "history_group59_group58": {
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
    "width": 118,
    "height": 118,
    "left": 0,
    "top": 0
  },
  "history_group59_group58_path7": {
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
    "shadowOpacity": 0.18823529411764706,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 62,
    "height": 18,
    "left": 51,
    "top": 162
  },
  "history_ellipse1": {
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
    "width": 44,
    "height": 44,
    "left": 329,
    "top": 40
  },
  "history_group143": {
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
    "width": 171,
    "height": 100,
    "left": 22,
    "top": 12
  },
  "history_group143_group142": {
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
    "width": 140,
    "height": 100,
    "left": 0,
    "top": 0
  },
  "history_group143_group142_logoPng": {
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
    "width": 140,
    "height": 100,
    "left": 0,
    "top": 0
  },
  "history_group143_asset1": {
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
    "width": 63,
    "height": 20,
    "left": 108,
    "top": 57
  }
});