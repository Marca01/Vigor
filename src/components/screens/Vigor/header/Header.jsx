import React from 'react'
import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Avatar } from 'react-native-paper'
import { globalStyles } from '../../../../styles/global'

export default function Header() {
	return (
		<View style={globalStyles.header}>
			<Image  
				source={require('../../../../assets/images/logo.png')}
				resizeMode='contain'
				style={globalStyles.header__logo}
			/>
			<View style={globalStyles.header__user}>
				<Feather name="search" size={30} color="black" />
				<Avatar.Image size={42} source={require('../../../../assets/images/avatar.jpg')} />
			</View>
		</View>
	)
}
