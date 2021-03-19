import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native'

export default function SecondScreen({navigation}) {

	const [message, setMessage] = useState('')

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<TextInput 
					style={styles.input}
					placeholder='demo input react native'
					onChangeText={text => setMessage(text)} 
					value={message} 
					multiline
					editable={true}
					numberOfLines={10}
					keyboardAppearance='dark'
				/>
				<Button title='Submit' onPress={() => navigation.navigate('StartActivityForResult', {textMessage: message})}/>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},	
})
