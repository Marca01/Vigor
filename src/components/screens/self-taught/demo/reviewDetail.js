import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../../styles/global';

export default function ReviewDetail({navigation}) {
	return (
		<View style={globalStyles.container}>
			<Text>reviewDetail screen</Text>
			<Button 
				title='Back to home screen'
				onPress={() => navigation.goBack()}
			/>
			<Button 
				title='Go to reviews screen again'
				onPress={() => navigation.push('Detail')}
			/>
			<Button 
				title='Go to first screen'
				onPress={() => navigation.popToTop()}
			/>
		</View>
	)
}
