import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'

export default function navigationIntent() {

	const stackIntent = createStackNavigator()

	return (
		<stackIntent.Navigator
			initialRouteName='StartActivityForResult'
			// screenOptions={{
			// 	headerShown: false,
			// }}
		>
			<stackIntent.Screen 
				name="StartActivityForResult" 
				component={FirstScreen} 
				options={{
					// headerShown: false
					headerTitle: 'StartActivityForResult',
				}}
			/>
			<stackIntent.Screen 
				name="SecondActivity" 
				component={SecondScreen} 
				options={{
					// headerShown: false
					headerTitle: 'SecondActivity',
				}}
			/>
		</stackIntent.Navigator>
	)
}

const styles = StyleSheet.create({

})
