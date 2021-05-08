import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'
import { Video } from 'expo-av'
import { AntDesign } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'

export default function VideoList({videoData}) {

	const video = useRef(null)

	return (
		<View style={globalStyles.videoDetail__videos}>
			<FlatList 
				data={videoData}
				renderItem={({item, index}) => (
					index >= videoData.length - 1 ? (
						<>
							<TouchableOpacity
								style={globalStyles.videoDetail__list_Vid}
							>
								<View style={globalStyles.videoDetail__list_video}>
									<Video
										ref={video}
										style={globalStyles.videoDetail__list_video_thumbVideo}
										source={{
											uri: item.url,
										}}
										useNativeControls
										isLooping
										// onPlaybackStatusUpdate={status => setStatus(() => status)}
									/>
									<View style={globalStyles.videoDetail__list_video_content}>
										<View style={globalStyles.videoDetail__list_video_info}>
											<Text numberOfLines={1} style={globalStyles.videoDetail__list_info_infoTitle}>{item.title}</Text>
											<Text numberOfLines={1} style={globalStyles.videoDetail__list_info_infoVideo}>{item.artist}</Text>
										</View>
										<View style={globalStyles.videoDetail__list_options}>
											<SimpleLineIcons name="options" size={16} color="black" onPress={() => console.log(2)} />
										</View>
									</View>
								</View>
							</TouchableOpacity>
							{/* <TouchableOpacity style={globalStyles.videoDetail__video_moreBtn}>
								<Text style={globalStyles.videoDetail__video_moreBtn_label}>More</Text>
							</TouchableOpacity> */}
						</>
					) : (
						<TouchableOpacity
							style={globalStyles.videoDetail__list_Vid}
						>
							<View style={globalStyles.videoDetail__list_video}>
								<Video
									ref={video}
									style={globalStyles.videoDetail__list_video_thumbVideo}
									source={{
										uri: item.url,
									}}
									useNativeControls
									isLooping
									// onPlaybackStatusUpdate={status => setStatus(() => status)}
								/>
								<View style={globalStyles.videoDetail__list_video_content}>
									<View style={globalStyles.videoDetail__list_video_info}>
										<Text numberOfLines={2} style={globalStyles.videoDetail__list_info_infoTitle}>{item.title}</Text>
										<Text numberOfLines={1} style={globalStyles.videoDetail__list_info_infoVideo}>{item.artist}</Text>
									</View>
									<View style={globalStyles.videoDetail__list_options}>
										<SimpleLineIcons name="options" size={16} color="black" onPress={() => console.log(2)} />
									</View>
								</View>
							</View>
						</TouchableOpacity>
					)
				)}
				keyExtractor={item => item.id}
				// horizontal
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}
