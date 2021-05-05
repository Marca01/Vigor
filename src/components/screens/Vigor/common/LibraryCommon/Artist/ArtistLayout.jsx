import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, View } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'
import Title from '../../SpecialComponents/Title'
import { ArtistDetailLayoutArtist, ArtistDetailLayoutContent } from './ArtistDetailLayout'

export default function ArtistLayout({artistName, layoutData, contentData, songData, videoData, playlistData}) {
	return (
		<View style={globalStyles.container}>
			<View style={globalStyles.artistDetail__title}>
				<Ionicons
					name="chevron-back"
					size={30}
					color="black"
					onPress={() => navigation.goBack()}
					style={globalStyles.artistDetail__backIcon}
				/>
				<Title title={artistName} />
			</View>
			<View style={globalStyles.artistDetail__content}>
				<FlatList 
					data={layoutData}
					renderItem={({item}) => (
						<>
							<ArtistDetailLayoutArtist 
								avatar={{uri: item.url}}
								artistName={item.artist}
								artistPosts={songData.length}
								artistListeners={item.listeners}
								artistFollowers={item.followers}
							/>
							<ArtistDetailLayoutContent 
								contentData={contentData}
								songData={songData}
								videoData={videoData}
								playlistData={playlistData}
							/>
						</>
					)}
					keyExtractor={item => item.id}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}
