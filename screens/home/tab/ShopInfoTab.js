import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { Div, Button, Radio, Checkbox, Input, Text as MText, Icon, Overlay } from "react-native-magnus";

const ShopInfoTab = () => {

  const [name, onChangeName] = React.useState('GIA ROOM COFEE');
  const [address, onChangeAddress] = React.useState('232 Lê Văn Việt, Quận 9, TP.HCM');
  const [phone, onChangePhone] = React.useState('0335.6575.33');
  const [description, onChangeDescription] = React.useState('Quán tọa lạc tại trục đường chính của quận 9, với không gian thoáng đãng, yên tĩnh, phù hợp để học tập và làm việc.');

  const [editMode, setEditMode] = useState(false);

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [typeTable, setTypeTable] = useState(0);
  const [quantityPerson, setQuantityPerson] = useState(10);
  const [quantityRoom, setQuantityRoom] = useState(1);
  const [price, setPrice] = useState("0");

  const footerButtons = [
    {
      text: "Hủy",
      style: "cancel"
    },
    {
      text: "Xác nhận"
    }
  ]

  return (
    <View style={styles.shopInfo}>
      <View style={styles.shopInfo_header}>
        <Text style={styles.shopInfo_header_title}>THÔNG TIN QUÁN</Text>
      </View>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.shopInfo_form}>
        <View style={styles.shopInfo_form_textfield}>
          <Text style={styles.shopInfo_form_textfield_label}>Tên quán</Text>
          {
            !editMode ?
              <Text style={styles.shopInfo_form_textfield_value}>{name}</Text>
              :
              <TextInput
                style={styles.shopInfo_form_textfield_input}
                value={name}
                onChangeText={(newValue) => onChangeName(newValue)}
              >
              </TextInput>
          }
        </View>
        <View style={styles.shopInfo_form_textfield}>
          <Text style={styles.shopInfo_form_textfield_label}>Địa chỉ</Text>
          {
            !editMode ?
              <Text style={styles.shopInfo_form_textfield_value}>{address}</Text>
              :
              <TextInput
                style={styles.shopInfo_form_textfield_input}
                value={address}
                onChangeText={(newValue) => onChangeAddress(newValue)}
              >
              </TextInput>
          }
        </View>
        <View style={styles.shopInfo_form_textfield}>
          <Text style={styles.shopInfo_form_textfield_label}>Số điện thoại</Text>
          {
            !editMode ?
              <Text style={styles.shopInfo_form_textfield_value}>{phone}</Text>
              : <TextInput
                style={styles.shopInfo_form_textfield_input}
                value={phone}
                onChangeText={(newValue) => onChangePhone(newValue)}
              >
              </TextInput>

          }
        </View>
        <View style={styles.shopInfo_form_multiline}>
          <Text style={styles.shopInfo_form_multiline_label}>Mô tả</Text>
          {
            !editMode ?
              <Text style={styles.shopInfo_form_multiline_value}>{description}</Text>
              : <TextInput
                multiline
                numberOfLines={4}
                style={styles.shopInfo_form_multiline_input}
                value={description}
                onChangeText={(newValue) => onChangeDescription(newValue)}
              >
              </TextInput>

          }
        </View>
        <View style={styles.shopInfo_form_image}>
          <Text style={styles.shopInfo_form_textfield_label}>Hình ảnh quán</Text>
          <ScrollView contentContainerStyle={styles.shopInfo_form_image_example} horizontal={true}>
            <ReactImage source={require('../assets/i1.png')} style={styles.shopInfo_form_image_example_i1} />
            <ReactImage source={require('../assets/i2.png')} style={styles.shopInfo_form_image_example_i1} />
            {editMode &&
              <Svg style={styles.shopInfo_form_image_btnAdd}
                preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875"
                fill="rgba(216, 174, 66, 1)">
                <SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z" />
              </Svg>
            }
          </ScrollView>
          {/* <View style={styles.shopInfo_form_image_btnAdd620bac46}>
            <View style={styles.shopInfo_form_image_btnAdd620bac46_bgee288635}></View>
            <Svg style={styles.shopInfo_form_image_btnAdd620bac46_addIcon214e3aa4}
              preserveAspectRatio="none" viewBox="0.5625 0.5625 34.875 34.875"
              fill="rgba(216, 174, 66, 1)">
              <SvgPath d="M 18 0.5625 C 8.3671875 0.5625 0.5625 8.3671875 0.5625 18 C 0.5625 27.6328125 8.3671875 35.4375 18 35.4375 C 27.6328125 35.4375 35.4375 27.6328125 35.4375 18 C 35.4375 8.3671875 27.6328125 0.5625 18 0.5625 Z M 28.125 19.96875 C 28.125 20.43281173706055 27.74531173706055 20.8125 27.28125 20.8125 L 20.8125 20.8125 L 20.8125 27.28125 C 20.8125 27.74531173706055 20.43281173706055 28.125 19.96875 28.125 L 16.03125 28.125 C 15.56718730926514 28.125 15.1875 27.74531173706055 15.1875 27.28125 L 15.1875 20.8125 L 8.71875 20.8125 C 8.254687309265137 20.8125 7.875 20.43281173706055 7.875 19.96875 L 7.875 16.03125 C 7.875 15.56718730926514 8.254687309265137 15.1875 8.71875 15.1875 L 15.1875 15.1875 L 15.1875 8.71875 C 15.1875 8.254687309265137 15.56718730926514 7.875 16.03125 7.875 L 19.96875 7.875 C 20.43281173706055 7.875 20.8125 8.254687309265137 20.8125 8.71875 L 20.8125 15.1875 L 27.28125 15.1875 C 27.74531173706055 15.1875 28.125 15.56718730926514 28.125 16.03125 L 28.125 19.96875 Z" />
            </Svg>
          </View> */}

        </View>
        <View style={styles.shopInfo_form_menu}>
          <Text style={styles.shopInfo_form_textfield_label}>Menu quán</Text>
          <ScrollView contentContainerStyle={styles.shopInfo_form_image_example} horizontal={true}>
            <ReactImage source={require('../assets/i1.png')} style={styles.shopInfo_form_image_example_i1} />
          </ScrollView>
        </View>
        <View style={{
          "backgroundColor": "transparent",
          "marginTop": 5
        }}>
          <Div row alignItems="center">
            <Text style={styles.shopInfo_form_textfield_label}>Thông tin phòng</Text>
            {editMode && <Button bg="#D4AE39" py="sm" px="md" row mr="lg" onPress={() => setOverlayVisible(true)}>
              <Icon name="plus" fontFamily="Entypo" fontSize="2xl" color="#FFF" />
              <MText fontWeight="700" fontFamily="Roboto" color="#FFF">Thêm</MText>
            </Button>
            }
          </Div>
          <Div mb={10} px="lg">
            <Div mt={10} shadow="lg" rounded="md" bg="#FFF7DF" px="lg" py="sm" >
              <Div row>
                <MText flex={1} mt={5} fontWeight="700" fontSize="2xl" fontFamily="Roboto" color="#EC6D18">Bàn: 2 chỗ ngồi</MText>
                {editMode && <>
                  <Icon mt={5} name="edit" fontFamily="Entypo" fontSize="4xl" color="#EC6D18" mr={10}
                    onTouchStart={() => { setOverlayVisible(true); }} />
                  <Icon mt={5} name="trash" fontFamily="Entypo" fontSize="4xl" color="#EC6D18"
                    onTouchStart={() => { Alert.alert('Xác nhận', 'Bạn có chắc muốn xóa phòng đã chọn?', footerButtons) }} />
                </>}
              </Div>
              <MText fontSize={"md"} fontFamily="Roboto" color="#707070">Số lượng: 2</MText>
            </Div>
            <Div mt={10} shadow="lg" rounded="md" bg="#FFF7DF" px="lg" py="sm" >
              <Div row>
                <MText flex={1} mt={5} fontWeight="700" fontSize="2xl" fontFamily="Roboto" color="#EC6D18">Bàn: 4 chỗ ngồi</MText>
                {editMode && <>
                  <Icon mt={5} name="edit" fontFamily="Entypo" fontSize="4xl" color="#EC6D18" mr={10}
                    onTouchStart={() => { setOverlayVisible(true); }} />
                  <Icon mt={5} name="trash" fontFamily="Entypo" fontSize="4xl" color="#EC6D18"
                    onTouchStart={() => { Alert.alert('Xác nhận', 'Bạn có chắc muốn xóa phòng đã chọn?', footerButtons) }} />
                </>}
              </Div>
              <MText fontSize={"md"} fontFamily="Roboto" color="#707070">Số lượng: 3</MText>
            </Div>
            <Div mt={10} shadow="lg" rounded="md" bg="#FFF7DF" px="lg" py="sm">
              <Div row width="100%">
                <MText flex={1} mt={5} fontWeight="700" fontSize="2xl" fontFamily="Roboto" color="#EC6D18">Phòng họp: 10 người</MText>
                {editMode && <>
                  <Icon mt={5} name="edit" fontFamily="Entypo" fontSize="4xl" color="#EC6D18" mr={10}
                    onTouchStart={() => { setOverlayVisible(true); }} />
                  <Icon mt={5} name="trash" fontFamily="Entypo" fontSize="4xl" color="#EC6D18"
                    onTouchStart={() => { Alert.alert('Xác nhận', 'Bạn có chắc muốn xóa phòng đã chọn?', footerButtons) }} />
                </>}
              </Div>
              <MText fontSize={"md"} fontFamily="Roboto" color="#707070">Số lượng: 2 </MText>
              <Div row justifyContent="center" my={10}>
                <MText fontSize={"md"} fontFamily="Roboto" color="#707070">Tiện ích</MText>
                <View style={{ flex: 1, flexDirection: "row", marginLeft: 10, }}>
                  <ReactImage source={require('../../../assets/wifiicon.png')} style={{ "width": 17, "height": 17, }} />
                  <View style={{ alignItems: "center" }}>
                    <ReactImage source={require('../../../assets/roomicon.png')} style={{ "width": 22, "height": 17 }} />
                    <Text style={{ fontSize: 11 }}>10 người</Text>
                  </View>
                  <ReactImage source={require('../../../assets/projectericon.png')} style={{ "width": 20, "height": 20, }} />
                  <ReactImage source={require('../../../assets/acicon.png')} style={{ "width": 27, "height": 26, }} />
                </View>
              </Div>
              <MText fontSize={"md"} fontFamily="Roboto" color="#707070">Giá phòng: 300k/giờ</MText>
            </Div>
          </Div>

        </View>
        <Button w="100%" bg="#D4AE39" onPress={() => setEditMode(!editMode)}>
          {!editMode ? "Chỉnh sửa thông tin cơ bản" : "Hoàn tất"}
        </Button>
      </ScrollView>
      <Div>

        <Overlay visible={overlayVisible} p="xl">
          <MText textAlign="center" fontWeight="bold" fontSize={20} mb="sm">THÊM</MText>
          <Div row>
            <Button flex={1} bg={typeTable == 0 ? "#D5AE37" : "#DADADA"}
              color={typeTable == 0 ? "#FFF" : "#000"}
              rounded={0} onPress={() => setTypeTable(0)}>
              Phòng
            </Button>
            <Button flex={1} bg={typeTable == 1 ? "#D5AE37" : "#DADADA"}
              color={typeTable == 1 ? "#FFF" : "#000"}
              rounded={0} onPress={() => setTypeTable(1)}>
              Bàn
            </Button>
          </Div>
          <Div borderWidth={1} borderColor="#B0B0B0" p={10}>
            <Div>
              <MText>Số lượng người trong {typeTable == 0 ? "phòng" : "bàn"} </MText>
              <Div row borderColor="#9C9C9C" borderWidth={2} rounded="md" mx="2xl" mt="md">
                <Button bg={null} p="md" onPress={() => { if (quantityPerson > 1) setQuantityPerson(quantityPerson - 1) }}>
                  <Icon name="minussquare" fontFamily="AntDesign" fontSize="xl" color="#D5AE37" />
                </Button>
                <TextInput style={{
                  borderColor: "#6E6E6E",
                  textAlign: "center",
                  fontSize: 13,
                  flex: 1,
                }}
                  keyboardType="phone-pad"
                  onChangeText={(text) => { if (parseInt(text) > 0) setQuantityPerson(parseInt(text)) }}
                  value={`${quantityPerson}`}
                />
                <Button bg={null} p="md" onPress={() => setQuantityPerson(quantityPerson + 1)}>
                  <Icon name="plussquare" fontFamily="AntDesign" fontSize="xl" color="#D5AE37" />
                </Button>
              </Div>
            </Div>
            <Div mt={20}>
              <MText>Số lượng {typeTable == 0 ? "phòng" : "bàn"}:</MText>
              <Div row borderColor="#9C9C9C" borderWidth={2} rounded="md" mx="2xl" mt="md">
                <Button bg={null} p="md" onPress={() => { if (quantityRoom > 1) setQuantityRoom(quantityRoom - 1); }}>
                  <Icon name="minussquare" fontFamily="AntDesign" fontSize="xl" color="#D5AE37" />
                </Button>
                <TextInput style={{
                  borderColor: "#6E6E6E",
                  textAlign: "center",
                  fontSize: 13,
                  flex: 1,
                }}
                  keyboardType="phone-pad"
                  onChangeText={(text) => { if (parseInt(text) > 0) setQuantityRoom(parseInt(text)) }}
                  value={`${quantityRoom}`}
                />
                <Button bg={null} p="md" onPress={() => { setQuantityRoom(quantityRoom + 1) }}>
                  <Icon name="plussquare" fontFamily="AntDesign" fontSize="xl" color="#D5AE37" />
                </Button>
              </Div>

            </Div>
            {typeTable == 0 && <>
              <Div mt={20}>
                <MText>Giá mỗi giờ:</MText>
                <Div borderColor="#9C9C9C" borderWidth={2} rounded="md" mx="2xl" mt="md">
                  <TextInput style={{
                    borderColor: "#6E6E6E",
                    textAlign: "center",
                    fontSize: 13,
                    height: 30,
                  }}
                    keyboardType="phone-pad"
                    onChangeText={(text) => { if (parseInt(text) > 0) setPrice(parseInt(text)); else setPrice(0) }}
                    value={`${price}`}
                  />
                </Div>
              </Div>
              <Div mt={20}>
                <MText>Tiện ích</MText>
                <Checkbox ml="10%" value={1} activeColor="#D5AE37" suffix={<MText>Máy chiếu</MText>}></Checkbox>
                <Checkbox ml="10%" value={1} activeColor="#D5AE37" suffix={<MText>Máy lạnh</MText>}></Checkbox>
                <Checkbox ml="10%" value={1} activeColor="#D5AE37" suffix={<MText>Wifi</MText>}></Checkbox>
              </Div>
            </>}
          </Div>
          <Div row mt="lg">
            <Button flex={1} mb={10} h={40} bg='#424242'
              onPress={() => { setOverlayVisible(false); setQuantityPerson(10); setQuantityRoom(1); setPrice(0) }} >
              Hủy
            </Button>
            <Button flex={1} mb={10} h={40} bg='#D4AE39'
              onPress={() => { setOverlayVisible(false); setQuantityPerson(10); setQuantityRoom(1); setPrice(0) }} >
              Hoàn tất
            </Button>
          </Div>
        </Overlay>
      </Div>


    </View>
  );

}

export default ShopInfoTab;



const styles = StyleSheet.create({
  "shopInfo": {
    // "backgroundColor": "rgba(249, 249, 249, 1)",
    backgroundColor: "rgba(220, 220, 220, 1)",
    "width": "100%",
    "height": "100%",
  },
  "shopInfo_header": {
    "backgroundColor": "rgba(241, 211, 126, 1)",
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
    "width": "100%",
    marginBottom: 10
  },
  "shopInfo_header_title": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 15
  },
  "shopInfo_form": {
    "backgroundColor": "#FFF",
    "marginHorizontal": "5%",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 6,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  "shopInfo_form_textfield": {
    "backgroundColor": "transparent",
  },
  "shopInfo_form_textfield_label": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    flex: 1,
  },
  "shopInfo_form_textfield_value": {
    "backgroundColor": "#FFF",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginLeft": 20,
    padding: 7,
    borderRadius: 4
  },
  "shopInfo_form_textfield_input": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 10,
    "paddingHorizontal": 10,
    paddingVertical:5,
    "color": "#000000"
  },
  "shopInfo_form_multiline": {
    "backgroundColor": "transparent",
  },
  "shopInfo_form_description_input": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 309,
    "height": 'fit-content',
    "left": 0,
    "top": 22
  },
  "shopInfo_form_multiline_label": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
  },
  "shopInfo_form_multiline_value": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(142, 142, 142, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "marginLeft": 20,
  },
  "shopInfo_form_multiline_input": {
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "color": "#000",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 10,
    "paddingHorizontal": 10,
    "paddingVertical": 5,
    // "color": "#00000"
  },
  "shopInfo_form_image": {
    "backgroundColor": "transparent",
    "width": "100%",
    marginVertical: 10,
  },
  "shopInfo_form_image_example": {
    "marginVertical": 5,
  },
  "shopInfo_form_image_example_i1": {
    "position": "relative",
    "marginTop": 0,
    "marginRight": 10,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 80,
    "height": 80,
    "marginLeft": 20,
  },

  "shopInfo_form_image_menu": {
    "marginTop": 5,
    "marginLeft": 30,
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 80,
    "height": 80,
  },

  "shopInfo_form_image_btnAdd620bac46": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 92,
    "height": 94,
    "left": 195,
    "top": 29
  },
  "shopInfo_form_image_btnAdd620bac46_bgee288635": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 92,
    "height": 94,
    "left": 0,
    "top": 0
  },
  "shopInfo_form_image_btnAdd": {
    "marginTop": 15,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 50,
    "height": 50,
  },
  "shopInfo_form_image_btnAddMenu": {
    "position": 'absolute',
    "marginTop": 100,
    "marginLeft": 120,
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 50,
    "height": 50,
  },
  "shopInfo_form_image_labela73d757d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 100,
    "height": 18,
    "left": 3,
    "top": 0
  },
  "shopInfo_form_menu": {
    "backgroundColor": "transparent",
    marginTop: 10,
  },
  "shopInfo_form_menu_btnAdd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 92,
    "height": 94,
    "left": 0,
    "top": 25
  },
  "shopInfo_form_menu_btnAdd_bgcd8dfb81": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 217, 217, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "width": 92,
    "height": 94,
    "left": 0,
    "top": 0
  },
  "shopInfo_form_menu_btnAdd_addIcon": {
    "opacity": 1,
    "position": "absolute",
    "width": 34.88,
    "height": 34.88,
    "left": 26,
    "top": 31.55
  },
  "shopInfo_form_menu_label": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 90,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "shopInfo_btnEdit": {
    "backgroundColor": "transparent",
    "width": "90%",
    "height": 35,
    "marginLeft": "5%",
    "marginBottom": 25
  },
  "shopInfo_btnEdit_bg": {
    "position": "absolute",
    "backgroundColor": "rgba(249, 174, 81, 1)",
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": "100%",
    "height": 35,
  },
  "shopInfo_btnEdit_title": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": "100%",
    "height": 18,
    "top": "20%"
  }
});