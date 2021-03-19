import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../components/screens/Vigor/Home'
import SplashScreen from '../components/screens/Vigor/splashScreen/SplashScreen'
import OnboardingScreen from '../components/screens/Vigor/onboardingScreen/OnboardingScreen'

const HomeStack = createStackNavigator()

export default function HomeNavigation({navigation}) {
	return (
		<HomeStack.Navigator
			initialRouteName='Splash'
		>
			<HomeStack.Screen 
				name='Splash' 
				component={SplashScreen} 
				options={{
					headerShown: false
				}}
			/>
			<HomeStack.Screen 
				name='Home' 
				component={Home} 
				options={{
					headerShown: false,
					gestureEnabled: false,
				}}
			/>
			<HomeStack.Screen 
				name='Onboarding' 
				component={OnboardingScreen} 
				options={{
					headerShown: false,
					gestureEnabled: false,
				}}
			/>
		</HomeStack.Navigator>
	)
}
