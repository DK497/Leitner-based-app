import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screen/SigninScreen'
import SignupScreen from './src/screen/SignupScreen'

import MainScreen from './src/screen/MainScreen'
import {Provider} from './src/context/DataContext'
import LoadScreen from './src/screen/LoadScreen'
import { setNavigator } from './src/components/navigationRef'


const switchNavigator = createSwitchNavigator({
 
  loginFlow: createStackNavigator({
    
    Signin: SigninScreen,
    Signup: SignupScreen

  }),
  Load:LoadScreen,
  mainFlow: createBottomTabNavigator({
    Main:MainScreen
   

  })
})

const App = createAppContainer(switchNavigator)


export default () => {
  

  return (
   <Provider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
   </Provider>
     )
}

const styles = StyleSheet.create({
  
})
