import React, { useState } from 'react'
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Title from '../../SpecialComponents/Title'
import { Feather } from '@expo/vector-icons'
import { globalStyles } from '../../../../../../styles/global'
import VideoList from './VideoList'

export default function Video({navigation}) {

	const VIDEO_LAYOUT = [
		{id: '0'},
		{id: '1'},
	]

	const VIDEOS = [
		{
			id: '1', 
			url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
			title: 'Ava Max',
			artist: 'Ava Max',
			// listeners: '10M',
			// followers: '10.5k'
		},
		{
			id: '2', 
			url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
			title: 'Alan Walker',
			artist: 'Alan Walker',
			// listeners: '9M',
			// followers: '1.5k'
		},
		{
			id: '3', 
			url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
			title: 'Shawn Mendes wfwefwef folfow efwjf wjf oweikf wefjwefj wejf ;woekfjw ekofjweo foweif jf',
			artist: 'Shawn Mendes lkfsd fkdsf f ưe w kfjwefkwf wkf elf jwf jowefj wijfowjfow jfwe fiwejf flk fiowe of',
			// listeners: '30M',
			// followers: '35.8k'
		},
	]

	const [search, setSearch] = useState('')

	const onChangeSearch = (searchText) => {
		setSearch(searchText)
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
		>
			<View style={globalStyles.container}>
					<View style={globalStyles.videoTitle}>
						<Ionicons
							name="chevron-back"
							size={30}
							color="black"
							onPress={() => navigation.navigate('Library')}
							style={globalStyles.videoTitle__backIcon}
						/>
						<Title title='Videos' />
					</View>
					<View style={globalStyles.videos}>
						<FlatList
							data={VIDEO_LAYOUT}
							renderItem={({item}) => (
								item.id === '0' ? (
									<TouchableOpacity style={globalStyles.videos__search}>
										<Feather name="search" size={20} color="grey" />
										<TextInput
											style={globalStyles.videos__searchInput}
											onChangeText={text => onChangeSearch(text)}
											value={search}
											placeholder='Find videos'
										/>
									</TouchableOpacity>
								) : (
									<View style={globalStyles.videos__video}>
										<VideoList
											videoData={VIDEOS}
										/>
									</View>
								)
							)}
						/>
					</View>
			</View>
		</TouchableWithoutFeedback>
	)
}
