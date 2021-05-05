import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import Title from '../common/SpecialComponents/Title'
import { SimpleLineIcons } from '@expo/vector-icons'
import LibLayout from '../common/LibraryCommon/LibLayout'

export default function Library({navigation}) {
	return (
		<View style={globalStyles.container}>
			<View style={globalStyles.libTitle}>
				<Title title='Library' />
			</View>
			<View style={globalStyles.libComponents}>
				<View style={globalStyles.libComponents__left}>
					{/* Playlists */}
					<LibLayout
						component='playlists'
						source={require('../../../../assets/images/playlist.png')}
						label='Playlists'
						onPress={() => navigation.navigate('Playlists')}
					/>
					{/* Albums */}
					<LibLayout 
						source={require('../../../../assets/images/album.png')}
						label='Albums'
					/>
					{/* Songs */}
					<LibLayout 
						source={require('../../../../assets/images/song.png')}
						label='Songs'
					/>
				</View>
				<View style={globalStyles.libComponents__gap}></View>
				<View style={globalStyles.libComponents__right}>
					{/* Artists */}
					<LibLayout
						component='artists'
						source={require('../../../../assets/images/artists.png')}
						label='Artists'
						onPress={() => navigation.navigate('Artist')}
					/>
					
					{/* Videos */}
					<LibLayout 
						source={require('../../../../assets/images/video.png')}
						label='Videos'
					/>
					
					{/* Images */}
					<LibLayout 
						source={require('../../../../assets/images/image.png')}
						label='Images'
					/>
				</View>
			</View>
		</View>
	)
}
