import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Head from './components/header.tsx'
import Post from './components/posts.tsx'
import Notss from './components/notifications.tsx'
import News from './components/news.tsx'
import LoginScreen from './components/loginScreen.tsx'
import SignupScreen from './components/signupScreen.tsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Head/>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            display: 'none',
            
          }}}>
            
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Notifications" component={Nots}/>
          <Tab.Screen name="Login" component={LoginScreen}/>
          <Tab.Screen name="Signup" component={SignupScreen}/>
          <Tab.Screen name="News" component={Newss}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

function HomeScreen() {
  return(
    <SafeAreaView style = {{backgroundColor: '#333333', flex: 1}}>
      <Post/>
    </SafeAreaView>
  )
}

function Nots() {
  return (
    <Notss/>
  )
}

function Newss() {
  return (
    <News/>
  )
}