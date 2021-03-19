import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function DoubleTap() {

	let lastPress = 0

	const doublePress = () => {
		const time = Date.now()
		const delta = time - lastPress
		const doublePressDelay = 300
		
		if(delta < doublePressDelay) {
			Alert.alert('Double tap')
		}
		lastPress = time	
	}

	return (
		<SafeAreaView style={styles.container}>
			<Button 
				title="Double tap"
				onPress={doublePress}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
