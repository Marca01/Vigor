import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'

export default function AlbumList({url, albumTitle, albumArtist, onPress}) {
	return (
		<TouchableOpacity 
			style={globalStyles.albums__list}
			onPress={onPress}
		>
			<View style={globalStyles.albums__list_content}>
				<Image
					source={url}
					style={globalStyles.albums__list_avatar}
				/>
				<View style={globalStyles.albums__list_info}>
					<Text numberOfLines={2} style={globalStyles.albums__list_info_title}>{albumTitle}</Text>
					<Text numberOfLines={1} style={globalStyles.albums__list_info_artist}>{albumArtist}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
