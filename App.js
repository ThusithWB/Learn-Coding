import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, navigation } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppLoading from 'expo-app-loading';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Lead from './components/Lead';
import MobileScreen from './screens/MobileScreen';
import WebScreen from './screens/WebScreen';
import Standalone from './screens/Standalone';
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Lead" component={Lead} options={{headerShown: false}}/>
        <Stack.Screen name="Mobile" component={MobileScreen} options={{headerShown: false}} />
        <Stack.Screen name="Web" component={WebScreen} options={{headerShown: false}} />
        <Stack.Screen name="Stand" component={Standalone} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});