import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from './screens/history/HistoryScreen';
import DetailHistory from './screens/detailTableHistory/DetailHistory';


const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DetailHistory" component={DetailHistory} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
