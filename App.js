import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Image, ScrollView, FlatList, TouchableOpacity, DevSettings, KeyboardAvoidingView, Platform, Animated } from 'react-native'
import Home from './src/components/screens/Vigor/Home'
import SplashScreen from './src/components/screens/Vigor/splashScreen/SplashScreen'
import HomeNavigation from './src/navigation/HomeNavigation'
import { globalStyles } from './src/styles/global'

export default function App() {
  return (
		<NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  )
}

