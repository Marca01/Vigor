import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function FirstScreen({navigation, route}) {
	return (
		<View style={styles.container}>
			<Text>
				{route.params?.textMessage 
					? route.params.textMessage 
					: 'Default Message'}
			</Text>
			<Button title="Get message" onPress={() => navigation.navigate('SecondActivity')} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
