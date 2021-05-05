import React from 'react'
import { View, Text } from 'react-native'
import { titleStyle } from './style'

export default function Title({title}) {
	return (
		<View style={titleStyle.container}>
			<Text numberOfLines={1} style={titleStyle.title}>{title}</Text>
		</View>
	)
}
