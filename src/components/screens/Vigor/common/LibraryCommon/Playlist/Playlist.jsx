import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'
import Title from '../../SpecialComponents/Title'
import PlaylistList from './PlaylistList'
import { Ionicons } from '@expo/vector-icons'

export default function Playlist({navigation}) {

	const PLAYLISTS = [
		{
			id: '0'
		},
		{
			id: '1', 
			url: 'https://i.pinimg.com/564x/d3/d3/62/d3d362c198d7483aaf3e5852be209526.jpg',
			title: 'Lofi',
			creator: 'Marca',
		},
		{
			id: '2', 
			url: 'https://i.pinimg.com/564x/9a/54/fb/9a54fb3f939fbcd3a79bf1783d4aabaf.jpg',
			title: 'Best of 2018 whfjhweofhjweihijwhejrhweprheo;jik',
			creator: 'Marca',
		},
		{
			id: '3', 
			url: 'https://i.pinimg.com/564x/64/63/c4/6463c4f1447a1811eef2413de528c226.jpg',
			title: 'Best of 2019 and to speak of solitude sfsdjfkl aslkdfjlf lhfsd fklgjs gersjf ;lasjdflkjas dfjkw',
			creator: 'Marca',
		},
	]

	return (
		<View style={globalStyles.container}>
			<View style={globalStyles.playlistTitle}>
				<Ionicons 
					name="chevron-back" 
					size={30} 
					color="black" 
					onPress={() => navigation.navigate('Library')}
					style={globalStyles.playlistTitle__backIcon}
				/>
				<Title title='Playlists' />
			</View>
			<View style={globalStyles.playlists}>
				<FlatList 
					data={PLAYLISTS}
					renderItem={({item}) => (
						item.id === '0' ? (
							<TouchableOpacity style={globalStyles.playlists__createBtn}>
								<Text style={globalStyles.playlists__createBtn_text}>+ create new playlist</Text>
							</TouchableOpacity>
						) : (
							<View style={globalStyles.playlists__playlist}>
								<PlaylistList 
									url={{uri: item.url}}
									playlistTitle={item.title}
									playlistCreator={item.creator}
									onPress={() => navigation.navigate('PlaylistDetail', {item: item})}
								/>
							</View>
						)
					)}
				/>
			</View>
		</View>
	)
}
