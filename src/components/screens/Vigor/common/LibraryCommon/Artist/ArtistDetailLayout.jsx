import React, {useRef} from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'
import { AntDesign } from '@expo/vector-icons'
import { Video } from 'expo-av'
import { Ionicons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'

export function ArtistDetailLayoutArtist({avatar, artistName, artistPosts, artistListeners, artistFollowers}) {
	return (
		<View style={globalStyles.artistDetail__artist}>
			<View style={globalStyles.artistDetail__intro}>
				<Image
					source={avatar}
					style={globalStyles.artistDetail__intro_avatar}
				/>
				<View style={globalStyles.artistDetail__intro_username}>
					<Text numberOfLines={1} style={globalStyles.artistDetail__intro_username_name}>{artistName}</Text>
				</View>
				<View style={globalStyles.artistDetail__intro_stats}>
					<View style={globalStyles.artistDetail__intro_stats_songs}>
						<Text style={globalStyles.artistDetail__intro_stats_postsNumber}>{artistPosts}</Text>
						<Text style={globalStyles.artistDetail__intro_stats_postsLabel}>Posts</Text>
					</View>
					<View style={globalStyles.artistDetail__intro_stats_listeners}>
						<Text style={globalStyles.artistDetail__intro_stats_listenersNumber}>{artistListeners}</Text>
						<Text style={globalStyles.artistDetail__intro_stats_listenersLabel}>listeners</Text>
					</View>
					<View style={globalStyles.artistDetail__intro_stats_followers}>
						<Text style={globalStyles.artistDetail__intro_stats_followersNumber}>{artistFollowers}</Text>
						<Text style={globalStyles.artistDetail__intro_stats_followersLabel}>followers</Text>
					</View>
				</View>
			</View>
			<View style={globalStyles.artistDetail__btns}>
				<TouchableOpacity style={globalStyles.artistDetail__followBtn}>
					<SimpleLineIcons name="user-follow" size={22} color="black" />
					<Text style={globalStyles.artistDetail__followBtn_label}>Follow</Text>
				</TouchableOpacity>
				<TouchableOpacity style={globalStyles.artistDetail__playBtn}>
					<Ionicons name="shuffle" size={24} color="white" />
					<Text style={globalStyles.artistDetail__playBtn_label}>Shuffle</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export function ArtistDetailLayoutContent({contentData, songData, videoData, playlistData}) {
	return (
		<View style={globalStyles.artistDetail__body}>
			<FlatList 
				data={contentData}
				renderItem={({item}) => (
					item.id === '0' ? (
						<ArtistDetailLayoutSongs 
							label='Songs'
							songData={songData}
						/>
					) : item.id === '1' ? (
						<ArtistDetailLayoutVideos 
							label='Videos'
							videoData={videoData}
						/>
					) : item.id === '2' && (
						<ArtistDetailLayoutPlaylists 
							label='Playlists'
							playlistData={playlistData}
						/>
					)
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	)
}

export function ArtistDetailLayoutSongs({label, songData}) {
	return (
		<>
			<Text style={globalStyles.artistDetail__songs_title}>{label}</Text>
			<View style={globalStyles.artistDetail__songs}>
				<FlatList 
					data={songData}
					renderItem={({item}) => (
						<TouchableOpacity
							style={globalStyles.artistDetail__list}
						>
							<View style={globalStyles.artistDetail__list_song}>
								<View style={globalStyles.artistDetail__list_ordinalNumber}>
									<Text style={globalStyles.artistDetail__list_ordinalNumber_number}>{item.id}</Text>
								</View>
								<View style={globalStyles.artistDetail__list_content}>
									<View style={globalStyles.artistDetail__list_info}>
										<Text numberOfLines={1} style={globalStyles.artistDetail__list_info_title}>{item.title}</Text>
										<View style={globalStyles.artistDetail__list_info_time}>
											<Text style={globalStyles.artistDetail__list_info_duration}>{item.time}</Text>
										</View>
									</View>
								</View>
							</View>
							<View style={globalStyles.artistDetail__list_options}>
								<AntDesign name="hearto" size={18} color="#ff9f67" />
							</View>
						</TouchableOpacity>
					)}
					keyExtractor={item => item.id}
				/>
				<TouchableOpacity style={globalStyles.artistDetail__song_moreBtn}>
					<Text style={globalStyles.artistDetail__song_moreBtn_label}>More</Text>
				</TouchableOpacity>
			</View>
		</>
	)
}
export function ArtistDetailLayoutVideos({label, videoData}) {
	
	const video = useRef(null)

	return (
		<>
			<Text style={globalStyles.artistDetail__videos_title}>{label}</Text>
			<View style={globalStyles.artistDetail__videos}>
				<FlatList 
					data={videoData}
					renderItem={({item, index}) => (
						index >= videoData.length - 1 ? (
							<>
								<TouchableOpacity
									style={globalStyles.artistDetail__list_Vid}
								>
									<View style={globalStyles.artistDetail__list_video}>
										<Video
											ref={video}
											style={globalStyles.artistDetail__list_video_thumbVideo}
											source={{
												uri: item.url,
											}}
											useNativeControls
											isLooping
											// onPlaybackStatusUpdate={status => setStatus(() => status)}
										/>
										<View style={globalStyles.artistDetail__list_video_content}>
											<View style={globalStyles.artistDetail__list_video_info}>
												<Text numberOfLines={1} style={globalStyles.artistDetail__list_info_infoTitle}>{item.title}</Text>
											</View>
											<View style={globalStyles.artistDetail__list_options}>
												<AntDesign name="hearto" size={18} color="#ff9f67" />
											</View>
										</View>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={globalStyles.artistDetail__video_moreBtn}>
									<Text style={globalStyles.artistDetail__video_moreBtn_label}>More</Text>
								</TouchableOpacity>
							</>
						) : (
							<TouchableOpacity
								style={globalStyles.artistDetail__list_Vid}
							>
								<View style={globalStyles.artistDetail__list_video}>
									<Video
										ref={video}
										style={globalStyles.artistDetail__list_video_thumbVideo}
										source={{
											uri: item.url,
										}}
										useNativeControls
										isLooping
										// onPlaybackStatusUpdate={status => setStatus(() => status)}
									/>
									<View style={globalStyles.artistDetail__list_video_content}>
										<View style={globalStyles.artistDetail__list_video_info}>
											<Text numberOfLines={2} style={globalStyles.artistDetail__list_info_infoTitle}>{item.title}</Text>
										</View>
										<View style={globalStyles.artistDetail__list_options}>
											<AntDesign name="hearto" size={18} color="#ff9f67" />
										</View>
									</View>
								</View>
							</TouchableOpacity>
						)
					)}
					keyExtractor={item => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</>
	)
}
export function ArtistDetailLayoutPlaylists({label, playlistData}) {
	return (
		<>
			<Text style={globalStyles.artistDetail__playlists_title}>{label}</Text>
			<View style={globalStyles.artistDetail__playlists}>
				<FlatList 
					data={playlistData}
					renderItem={({item, index}) => (
						index >= playlistData.length - 1 ? (
							<>
								<TouchableOpacity
									style={globalStyles.artistDetail__list_Pll}
								>
									<View style={globalStyles.artistDetail__list_playlist}>
										<Image
											source={{uri: item.url}}
											style={globalStyles.artistDetail__list_playlist_thumbPlaylist}
										/>
										<View style={globalStyles.artistDetail__list_playlist_content}>
											<View style={globalStyles.artistDetail__list_playlist_info}>
												<Text numberOfLines={2} style={globalStyles.artistDetail__list_info_infoTitle}>{item.title}</Text>
											</View>
											<View style={globalStyles.artistDetail__list_options}>
												<AntDesign name="hearto" size={18} color="#ff9f67" />
											</View>
										</View>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={globalStyles.artistDetail__playlist_moreBtn}>
									<Text style={globalStyles.artistDetail__playlist_moreBtn_label}>More</Text>
								</TouchableOpacity>
							</>
						) : (
							<TouchableOpacity
								style={globalStyles.artistDetail__list_Pll}
							>
								<View style={globalStyles.artistDetail__list_playlist}>
									<Image
										source={{uri: item.url}}
										style={globalStyles.artistDetail__list_playlist_thumbPlaylist}
									/>
									<View style={globalStyles.artistDetail__list_playlist_content}>
										<View style={globalStyles.artistDetail__list_playlist_info}>
											<Text numberOfLines={1} style={globalStyles.artistDetail__list_info_infoTitle}>{item.title}</Text>
										</View>
										<View style={globalStyles.artistDetail__list_options}>
											<AntDesign name="hearto" size={18} color="#ff9f67" />
										</View>
									</View>
								</View>
							</TouchableOpacity>
						)
					)}
					keyExtractor={item => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</>
	)
}