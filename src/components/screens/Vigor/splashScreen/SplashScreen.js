import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function SplashScreen({navigation}) {

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Onboarding')
		}, 5000)
	}, [])

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Splash screen</Text>
		</View>
	)
}
