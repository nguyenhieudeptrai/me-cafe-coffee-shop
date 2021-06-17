import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from './screens/history/HistoryScreen';
import DetailHistory from './screens/detailTableHistory/DetailHistory';

import WelcomeScreen from "./screens/welcome/WelcomeScreen";
import RegistryScreen from './screens/registry/RegisterScreen';
import LoginScreen from './screens/login/LoginScreen';
import HomeScreen from './screens/home/HomeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Screen name="DetailHistory" component={DetailHistory} options={{ headerShown: false }}/>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Registry" component={RegistryScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
