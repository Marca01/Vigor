import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../components/screens/Vigor/Home'
import SplashScreen from '../components/screens/Vigor/splashScreen/SplashScreen'
import OnboardingScreen from '../components/screens/Vigor/onboardingScreen/OnboardingScreen'
import Explore from '../components/screens/Vigor/pages/Explore'
import New from '../components/screens/Vigor/pages/New'
import Notification from '../components/screens/Vigor/pages/Notification'
import Library from '../components/screens/Vigor/pages/Library'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import COLOR from '../constants/color'

const HomeStack = createStackNavigator()
const HomeTabs = createBottomTabNavigator()
const ViewTabs = createMaterialTopTabNavigator()

// Top tabs
// const viewNavigator = () => {
// 	return (
// 		<ViewTabs.Navigator>
// 			<ViewTabs.Screen  />
// 		</ViewTabs.Navigator>
// 	)
// }

// Bottom tabs
const postNavigator = ({navigation}) => {
	return (
		<HomeTabs.Navigator 
			initialRouteName='Home'
			screenOptions={({route}) => ({
				tabBarIcon: ({focused}) => {
					const tintColor = focused ? COLOR.main : COLOR.grey

					switch (route.name) {
						case 'Home':
							return (
								<Image 
									source={require('../assets/images/home.png')}
									resizeMode='contain'
									style={{
										tintColor: tintColor,
										width: 22,
										height: 22
									}}
								/>
							)
						case 'Explore':
							return (
								<Image 
									source={require('../assets/images/explore.png')}
									resizeMode='contain'
									style={{
										tintColor: tintColor,
										width: 22,
										height: 22
									}}
								/>
							)
						case 'New':
							return (
								<View style={globalStyles.newPostBtn_rout}>
									<View style={globalStyles.newPostBtn_rin}>
										<Image 
											source={require('../assets/images/new.png')}
											resizeMode='contain'
											style={{
												width: 22,
												height: 22
											}}
										/>
									</View>
								</View>
							)
						case 'Notification':
							return (
								<Image 
									source={require('../assets/images/notification.png')}
									resizeMode='contain'
									style={{
										tintColor: tintColor,
										width: 22,
										height: 22
									}}
								/>
							)
						case 'Library':
							return (
								<Image 
									source={require('../assets/images/library.png')}
									resizeMode='contain'
									style={{
										tintColor: tintColor,
										width: 22,
										height: 22
									}}
								/>
							)
					}
				}
			})}
			tabBarOptions={{
				showLabel: false,
				style: {
					borderTopWidth: 0,
				}
			}}
		>
			<HomeTabs.Screen 
				name='Home'
				component={Home}
				options={{
					headerShown: false
				}}
			/>
			<HomeTabs.Screen 
				name='Explore'
				component={Explore}
				options={{
					headerShown: false
				}}
			/>
			<HomeTabs.Screen 
				name='New'
				component={New}
				options={{
					headerShown: false
				}}
			/>
			<HomeTabs.Screen 
				name='Notification'
				component={Notification}
				options={{
					headerShown: false
				}}
			/>
			<HomeTabs.Screen 
				name='Library'
				component={Library}
				options={{
					headerShown: false
				}}
			/>
		</HomeTabs.Navigator>
	)
}

export default function HomeNavigation({navigation}) {
	return (
		<HomeStack.Navigator
			initialRouteName='Onboarding'
		>
			{/* <HomeStack.Screen 
				name='Splash' 
				component={SplashScreen} 
				options={{
					headerShown: false
				}}
			/> */}
			<HomeStack.Screen 
				name='Home' 
				component={postNavigator} 
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
