import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../../../../styles/global'

export default function OnboardingScreen({navigation}) {
	return (
		<View style={globalStyles.container}>
			<View style={globalStyles.subContainer}>
				<Text>Onboarding screen</Text>
				<Button 
					title='Get started' 
					onPress={() => navigation.navigate('Home')}
				/>
			</View>
		</View>
	)
}
