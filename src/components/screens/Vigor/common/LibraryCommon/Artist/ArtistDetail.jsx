import React, { useRef, useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../../../../styles/global'
import { ArtistDetailLayoutArtist, ArtistDetailLayoutContent, ArtistDetailLayoutSongs, ArtistDetailLayoutVideos, ArtistDetailLayoutPlaylists } from './ArtistDetailLayout'
import { TabView, SceneMap } from 'react-native-tab-view'
import HomePosts from '../../HomeCommon/HomePosts'
import ArtistLayout from './ArtistLayout'
import { Ionicons } from '@expo/vector-icons'
import Title from '../../SpecialComponents/Title'

export default function ArtistDetail({navigation, route}) {

	const ARTIST_LAYOUT = [
		{id: '0'},
		{id: '1'},
		{id: '2'},
	]

	const ARTIST_SONGS = [
		{
			id: '01',
			title: 'Sweat but psycho',
			artist: route.params?.item?.artist,
			time: '3:45',
		},
		{
			id: '02',
			title: 'Faded',
			artist: route.params?.item?.artist,
			time: '3:25',
		},
		{
			id: '03',
			title: 'In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ',
			artist: route.params?.item?.artist,
			time: '3:09',
		},
		{
			id: '04',
			title: 'Sing me to sleep',
			artist: route.params?.item?.artist,
			time: '2:59',
		},
		{
			id: '05',
			title: 'Treat you better',
			artist: route.params?.item?.artist,
			time: '3:09',
		},
	]

	const ARTIST_VIDEOS = [
		{
			id: '01',
			title: 'Sweat but psycho Video',
			artist: route.params?.item?.artist,
			url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
		},
		{
			id: '02',
			title: 'Faded Video',
			artist: route.params?.item?.artist,
			url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
		},
		{
			id: '03',
			title: 'In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ',
			artist: route.params?.item?.artist,
			url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
		},
		{
			id: '04',
			title: 'In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ',
			artist: route.params?.item?.artist,
			url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
		},
		{
			id: '05',
			title: 'In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ',
			artist: route.params?.item?.artist,
			url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
		},
	]

	const ARTIST_PLAYLISTS = [
		{
			id: '01',
			title: 'Sweat but psycho Video',
			artist: route.params?.item?.artist,
			url: 'https://i.pinimg.com/236x/01/07/88/010788f2eef764c1033035b642e3f854.jpg',
		},
		{
			id: '02',
			title: 'Faded Video',
			artist: route.params?.item?.artist,
			url: 'https://i.pinimg.com/564x/a8/2f/a7/a82fa7d6b863350016ccf88fe5792604.jpg',
		},
		{
			id: '03',
			title: 'In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ',
			artist: route.params?.item?.artist,
			url: 'https://i.pinimg.com/564x/9a/bb/a0/9abba09889d41368a638fa56c7a671da.jpg',
		},
		{
			id: '04',
			title: 'In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ',
			artist: route.params?.item?.artist,
			url: 'https://i.pinimg.com/564x/4c/ec/13/4cec13679cd4993eebe357de2265b7e6.jpg',
		},
		{
			id: '05',
			title: 'In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ',
			artist: route.params?.item?.artist,
			url: 'https://i.pinimg.com/564x/3c/18/2d/3c182d73d3bd0fda1603fec3e50c82ba.jpg',
		},
	]

	const POSTS = [
		{
			id: '1',
			creator: 'KHale', 
			avatar: require('../../../../../../assets/images/avatar.jpg'),
			imageContent: 'https://i.pinimg.com/564x/74/77/a9/7477a929c1e6732a396afa81bde22de9.jpg',
			title: 'Cover Lorem Ipsum is simply dummy text of',
			likes: '10k',
			createdAt: '10 hours',
			comments: '1k'
		},
		{
			id: '2',
			creator: 'Marca', 
			avatar: require('../../../../../../assets/images/avatar.jpg'),
			imageContent: 'https://i.pinimg.com/564x/1a/20/5a/1a205a8dee8538943bf65dfcc0cfb0bd.jpg',
			title: 'Cover Lorem Ipsum is simply dummy text of',
			likes: '10k',
			createdAt: '10 hours',
			comments: '1k'
		},
	]

	function ArtistDetailLayoutContentt() {
		return (
			<View style={globalStyles.artistDetail__body}>
				<FlatList 
					data={ARTIST_LAYOUT}
					renderItem={({item}) => (
						item.id === '0' ? (
							<ArtistDetailLayoutSongs 
								label='Songs'
								songData={ARTIST_SONGS}
							/>
						) : item.id === '1' ? (
							<ArtistDetailLayoutVideos 
								label='Videos'
								videoData={ARTIST_VIDEOS}
							/>
						) : item.id === '2' && (
							<ArtistDetailLayoutPlaylists 
								label='Playlists'
								playlistData={ARTIST_PLAYLISTS}
							/>
						)
					)}
					keyExtractor={item => item.id}
					listKey='fhowefnwfe'
				/>
			</View>
		)
	}

	function ArtistDetailPosts() {
		return (
			<HomePosts posts={POSTS} />
		)
	}

	// Tab view
	const renderScene = SceneMap({
		first: ArtistDetailLayoutContentt,
		// second: () => (<ArtistDetailPosts />),
		second: ArtistDetailPosts,
	})

	const [index, setIndex] = useState(0)
	const [routes] = useState([
		{ key: 'first', title: 'Music' },
		{ key: 'second', title: 'Posts' },
	])


	return (
		// <ArtistLayout 
		// 	artistName={route.params?.item.artist}
		// 	layoutData={[route.params?.item]}
		// 	contentData={ARTIST_LAYOUT}
		// 	songData={ARTIST_SONGS}
		// 	videoData={ARTIST_VIDEOS}
		// 	playlistData={ARTIST_PLAYLISTS}
		// />
		<View style={globalStyles.container}>
			<View style={globalStyles.artistDetail__title}>
				<Ionicons
					name="chevron-back"
					size={30}
					color="black"
					onPress={() => navigation.goBack()}
					style={globalStyles.artistDetail__backIcon}
				/>
				<Title title={route.params?.item?.artist} />
			</View>
			<View style={globalStyles.artistDetail__content}>
				<FlatList 
					data={[route.params?.item]}
					renderItem={({item}) => (
						<>
							<ArtistDetailLayoutArtist 
								avatar={{uri: item.url}}
								artistName={item.artist}
								artistPosts={ARTIST_SONGS.length}
								artistListeners={item.listeners}
								artistFollowers={item.followers}
							/>
							{/* <ArtistDetailLayoutContent 
								contentData={ARTIST_LAYOUT}
								songData={ARTIST_SONGS}
								videoData={ARTIST_VIDEOS}
								playlistData={ARTIST_PLAYLISTS}
							/> */}
							<TabView
								navigationState={{ index, routes }}
								renderScene={renderScene}
								onIndexChange={setIndex}
								// initialLayout={initialLayout}
								// style={styles.container}
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
