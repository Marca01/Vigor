import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import HomeNavigation from './src/navigation/HomeNavigation'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {

  // SplashScreen.preventAutoHideAsync()

  // useEffect(() => {
  //   setTimeout(async () => {
  //     await SplashScreen.hideAsync()
  //   }, 5000)
  // }, [])

  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <HomeNavigation />
    </NavigationContainer>
  )
}

