import React from 'react'
import { View, Text } from 'react-native'
import { titleStyle } from './style'

export default function Title({title}) {
	return (
		<Text style={titleStyle.title}>{title}</Text>
	)
}
