import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { globalStyles } from '../../../../../../styles/global'
import { AntDesign } from '@expo/vector-icons'
import COLOR from '../../../../../../constants/color'

export default function AlbumDetailLayout({thumbUrl, title, creator, albumData}) {
	return (
		<View style={globalStyles.albumDetail}>
			<View style={globalStyles.albumDetail__intro}>
				<View style={globalStyles.albumDetail__info}>
					<Image
						source={thumbUrl}
						style={globalStyles.albumDetail__thumb}
					/>
					<View style={globalStyles.albumDetail__general}>
						<View style={globalStyles.albumDetail__general_info}>
							<View style={globalStyles.albumDetail__general_stats}>
								<Text style={globalStyles.albumDetail__general_stats_quantityNumber}>587 songs</Text>
							</View>
							<Text numberOfLines={1} style={globalStyles.albumDetail__general_title}>{title}</Text>
							{/* Add link to profile */}
							<Text numberOfLines={1} style={globalStyles.albumDetail__general_creator}>{creator}</Text>
						</View>
						<View style={globalStyles.albumDetail__general_options}>
							<AntDesign 
								name="hearto" 
								size={20} 
								color={COLOR.main} 
								style={globalStyles.albumDetail__general_optionsImg}
							/>
							<SimpleLineIcons name="options" size={20} color="black" onPress={() => console.log(1)} />
						</View>
					</View>
				</View>
			</View>
			<View style={globalStyles.albumDetail__btn}>
				<TouchableOpacity style={globalStyles.albumDetail__playBtn}>
					<Ionicons name="shuffle" size={24} color="white" />
					<Text style={globalStyles.albumDetail__playBtn_label}>Shuffle</Text>
				</TouchableOpacity>
			</View>
			<View style={globalStyles.albumDetail__detail}>
				{albumData ? albumData.map(albumItem => (
					<TouchableOpacity
						style={globalStyles.albumDetail__list}
						key={albumItem.id}
						// onPress={onPress}
					>
						<View style={globalStyles.albumDetail__list_content}>
							<Image
								source={{uri: albumItem.detail_url}}
								style={globalStyles.albumDetail__list_thumb}
							/>
							<View style={globalStyles.albumDetail__list_info}>
								<Text numberOfLines={1} style={globalStyles.albumDetail__list_info_title}>{albumItem.detail_title}</Text>
								<View style={globalStyles.albumDetail__list_info_user}>
									<Text style={globalStyles.albumDetail__list_info_creator}>{albumItem.detail_artists}</Text>
								</View>
							</View>
						</View>
						<View style={globalStyles.albumDetail__list_options}>
							<SimpleLineIcons name="options" size={16} color="black" onPress={() => console.log(2)} />
						</View>
					</TouchableOpacity>
				)) : (
					<View style={globalStyles.albumDetail__emptyAlbum}>
						<Text style={globalStyles.albumDetail__emptyAlbum_label}>Add a song 🥰</Text>
					</View>
				)}
			</View>
		</View>
	)
}
