import React, { useState } from 'react'
import { Alert, Button, Keyboard, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import * as Linking from 'expo-linking'

export default function PhoneNumber() {

	const [phoneNumberInput, setPhoneNumberInput] = useState('')

	const openPhone = () => {
		let phoneNumber = ''

		if(Platform.OS === 'ios') {
			phoneNumber = `telprompt:${phoneNumberInput}`
			// phoneNumber = 'sms:+0903579855'
		} else {
			phoneNumber = `tel:${phoneNumberInput}`
		}

		Linking.openURL(phoneNumber)
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={styles.container}>
				<TextInput 
					onChangeText={phoneNumber => setPhoneNumberInput(phoneNumber)}
					value={phoneNumberInput}
					placeholder='Enter phone number'
					keyboardAppearance='dark'
					keyboardType='phone-pad'
				/>
				{phoneNumberInput 
					? <Button title='Call' onPress={openPhone} />
					: <Button title='Call' onPress={() => Alert.alert('Please enter the phone number')} />}
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
