import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screen/SigninScreen'
import SignupScreen from './src/screen/SignupScreen'
import ProgressScreen from './src/screen/ProgressScreen'
import MainScreen from './src/screen/MainScreen'
import {Provider} from './src/context/DataContext'
import LoadScreen from './src/screen/LoadScreen'


const switchNavigator = createSwitchNavigator({
 
  // loginFlow: createStackNavigator({
  //   Signup: SignupScreen,
  //   Signin: SigninScreen,

  // }),
  Load:LoadScreen,
  mainFlow: createBottomTabNavigator({
    Main:MainScreen,
    Progress:ProgressScreen,

  })
})

const App = createAppContainer(switchNavigator)


export default () => {
  

  return (
   <Provider>
      <App />
   </Provider>
     )
}

const styles = StyleSheet.create({
  
})
