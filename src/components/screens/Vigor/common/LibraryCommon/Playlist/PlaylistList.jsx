import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'
import { SimpleLineIcons } from '@expo/vector-icons'

export default function PlaylistList({url, playlistTitle, playlistCreator, onPress}) {
	return (
		<TouchableOpacity 
			style={globalStyles.playlists__list}
			onPress={onPress}
		>
			<View style={globalStyles.playlists__list_content}>
				<Image
					source={url}
					style={globalStyles.playlists__list_thumb}
				/>
				<View style={globalStyles.playlists__list_info}>
					<Text style={globalStyles.playlists__list_info_title}>{playlistTitle}</Text>
					<View style={globalStyles.playlists__list_info_user}>
						<Text style={globalStyles.playlists__list_info_creator}>by {playlistCreator}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
}
