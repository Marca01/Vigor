import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { globalStyles } from '../../../../../../styles/global'

export default function PlaylistDetailLayout({thumbUrl, title, creator, playlistData}) {
	return (
		<View style={globalStyles.playlistDetail}>
			<View style={globalStyles.playlistDetail__intro}>
				<View style={globalStyles.playlistDetail__info}>
					<Image
						source={thumbUrl}
						style={globalStyles.playlistDetail__thumb}
					/>
					<View style={globalStyles.playlistDetail__general}>
						<View style={globalStyles.playlistDetail__general_info}>
							<View style={globalStyles.playlistDetail__general_stats}>
								<Text style={globalStyles.playlistDetail__general_stats_quantityNumber}>587 songs</Text>
							</View>
							<Text numberOfLines={1} style={globalStyles.playlistDetail__general_title}>{title}</Text>
							{/* Add link to profile */}
							<Text style={globalStyles.playlistDetail__general_creator}>{creator}</Text>
						</View>
						<View style={globalStyles.playlistDetail__general_options}>
							<Image
								source={require('../../../../../../assets/images/addToLibrary.png')}
								resizeMode='contain'
								style={globalStyles.playlistDetail__general_optionsImg}
							/>
							<SimpleLineIcons name="options" size={20} color="black" onPress={() => console.log(1)} />
						</View>
					</View>
				</View>
			</View>
			<View style={globalStyles.playlistDetail__btn}>
				<TouchableOpacity style={globalStyles.playlistDetail__playBtn}>
					<Ionicons name="shuffle" size={24} color="white" />
					<Text style={globalStyles.playlistDetail__playBtn_label}>Shuffle</Text>
				</TouchableOpacity>
			</View>
			<View style={globalStyles.playlistDetail__detail}>
				{playlistData ? playlistData.map(playlistItem => (
					<TouchableOpacity
						style={globalStyles.playlistDetail__list}
						key={playlistItem.id}
						// onPress={onPress}
					>
						<View style={globalStyles.playlistDetail__list_content}>
							<Image
								source={{uri: playlistItem.detail_url}}
								style={globalStyles.playlistDetail__list_thumb}
							/>
							<View style={globalStyles.playlistDetail__list_info}>
								<Text numberOfLines={1} style={globalStyles.playlistDetail__list_info_title}>{playlistItem.detail_title}</Text>
								<View style={globalStyles.playlistDetail__list_info_user}>
									<Text style={globalStyles.playlistDetail__list_info_creator}>{playlistItem.detail_artists}</Text>
								</View>
							</View>
						</View>
						<View style={globalStyles.playlistDetail__list_options}>
							<SimpleLineIcons name="options" size={16} color="black" onPress={() => console.log(2)} />
						</View>
					</TouchableOpacity>
				)) : (
					<View style={globalStyles.playlistDetail__emptyPlaylist}>
						<Text style={globalStyles.playlistDetail__emptyPlaylist_label}>Add a song 🥰</Text>
					</View>
				)}
			</View>
		</View>
	)
}
