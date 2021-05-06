import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'

export default function ArtistList({url, artistName, artistFollowersNumber, onPress}) {
	return (
		<TouchableOpacity 
			style={globalStyles.artists__list}
			onPress={onPress}
		>
			<View style={globalStyles.artists__list_content}>
				<Image
					source={url}
					style={globalStyles.artists__list_avatar}
				/>
				<View style={globalStyles.artists__list_info}>
					<Text numberOfLines={2} style={globalStyles.artists__list_info_name}>{artistName}</Text>
					<Text numberOfLines={1} style={globalStyles.artists__list_info_followersNumber}>{artistFollowersNumber} followers</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
