import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import Title from '../SpecialComponents/Title'

export default function Playlist() {
	return (
		<View style={globalStyles.container}>
			<Title title='Playlists' />
		</View>
	)
}
