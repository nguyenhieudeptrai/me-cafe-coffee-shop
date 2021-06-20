import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./screens/welcome/WelcomeScreen";
import RegistryScreen from './screens/registry/RegisterScreen';
import LoginScreen from './screens/login/LoginScreen';
import HomeScreen from './screens/home/HomeScreen';
import DetailHistory from './screens/detailTableHistory/DetailHistory';
import VoucherScreen from './screens/voucher/VoucherScreen';
import addvoucherScreen from './screens/addVourcher/addvoucherScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="DetaiHis" component={DetailHistory} options={{ headerShown: false }} />
=======
      <Stack.Navigator initialRouteName="AddVoucher">
        <Stack.Screen name="DetailHistory" component={DetailHistory} options={{ headerShown: false }} />
>>>>>>> 0444c62e91835a0f1e53f6ce814f6d7112bbfbce
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registry" component={RegistryScreen} options={{ headerShown: false }} />
<<<<<<< HEAD
=======
        <Stack.Screen name="Voucher" component={VoucherScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddVoucher" component={addvoucherScreen} options={{ headerShown: false }} />
>>>>>>> 0444c62e91835a0f1e53f6ce814f6d7112bbfbce
      </Stack.Navigator>
    </NavigationContainer>
  );
}
