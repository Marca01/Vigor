import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'
import PlaylistList from './PlaylistList'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

export default function PlaylistDetail({navigation, route}) {

	const PLAYLIST_DETAIL = [
		{
			id: '1',
			detail_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn54en2MZIyiX1LCL0NKJGYZAaMZWxb__C1Q&usqp=CAU',
			detail_title: 'Old Town Road - Remixfwefwe',
			detail_artists: 'Lil Nas X, Billy Ray Cyrus',
		},
		{
			id: '2',
			detail_url: 'https://i.pinimg.com/564x/8a/c4/a6/8ac4a6013eb7dceba9b140643985e177.jpg',
			detail_title: 'bad guy',
			detail_artists: 'Billie Eilish',
		},
		{
			id: '3',
			detail_url: 'https://i.pinimg.com/564x/78/07/43/780743bd9fd6dde59b5e3bf076f3e2c3.jpg',
			detail_title: 'Senorita',
			detail_artists: 'Shawn Mendes, Camila Cabello',
		},
	]

	return (
		<View style={globalStyles.container}>
			<View style={globalStyles.playlistDetail__backBtn}>
				<Ionicons 
					name="chevron-back" 
					size={30} 
					color="black" 
					onPress={() => navigation.goBack()}
					style={globalStyles.playlistDetail__backIcon}
				/>
			</View>
			<View style={globalStyles.playlistDetail__content}>
				<FlatList
					data={[route.params?.item]}
					renderItem={({item}) => (
						<View style={globalStyles.playlistDetail}>
							<View style={globalStyles.playlistDetail__intro}>
								<View style={globalStyles.playlistDetail__info}>
									<Image
										source={{uri: item.url}}
										style={globalStyles.playlistDetail__thumb}
									/>
									<View style={globalStyles.playlistDetail__general}>
										<View style={globalStyles.playlistDetail__general_info}>
											<View style={globalStyles.playlistDetail__general_stats}>
												<Text style={globalStyles.playlistDetail__general_stats_quantityNumber}>587 songs</Text>
											</View>
											<Text numberOfLines={1} style={globalStyles.playlistDetail__general_title}>{item.title}</Text>
											{/* Add link to profile */}
											<Text style={globalStyles.playlistDetail__general_creator}>{item.creator}</Text>
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
								<FlatList
									data={PLAYLIST_DETAIL}
									renderItem={({item}) => (
										<TouchableOpacity
											style={globalStyles.playlistDetail__list}
											// onPress={onPress}
										>
											<View style={globalStyles.playlistDetail__list_content}>
												<Image
													source={{uri: item.detail_url}}
													style={globalStyles.playlistDetail__list_thumb}
												/>
												<View style={globalStyles.playlistDetail__list_info}>
													<Text numberOfLines={1} style={globalStyles.playlistDetail__list_info_title}>{item.detail_title}</Text>
													<View style={globalStyles.playlistDetail__list_info_user}>
														<Text style={globalStyles.playlistDetail__list_info_creator}>{item.detail_artists}</Text>
													</View>
												</View>
											</View>
											<View style={globalStyles.playlistDetail__list_options}>
												<SimpleLineIcons name="options" size={24} color="black" onPress={() => console.log(1)} />
											</View>
										</TouchableOpacity>
									)}
								/>
							</View>
						</View>
					)}
				/>
			</View>
		</View>
	)
}
