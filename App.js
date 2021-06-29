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
import DetailHistoryScreen from './screens/detailTableHistory/DetailHistoryScreen';
import AddvoucherScreen from './screens/addVourcher/AddvoucherScreen'
import BookingDetailScreen from './screens/bookingDetail/BookingDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="DetailHistory" component={DetailHistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registry" component={RegistryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddVoucher" component={AddvoucherScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookingDetail" component={BookingDetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
