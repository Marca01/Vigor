import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../../styles/global'
import HomePosts from './common/HomeCommon/HomePosts'
import Title from './common/SpecialComponents/Title'
import Header from './header/Header'

export default function Home() {

	const ORDER = [
		{id: '0'},
		{id: '1'},
	]

	const POSTS = [
		{
			id: '1',
			creator: 'KHale', 
			avatar: require('../../../assets/images/avatar.jpg'),
			imageContent: 'https://i.pinimg.com/564x/74/77/a9/7477a929c1e6732a396afa81bde22de9.jpg',
			title: 'Cover Lorem Ipsum is simply dummy text of',
			likes: '10k',
			createdAt: '10 hours',
			comments: '1k'
		},
		{
			id: '2',
			creator: 'Marca', 
			avatar: require('../../../assets/images/avatar.jpg'),
			imageContent: 'https://i.pinimg.com/564x/1a/20/5a/1a205a8dee8538943bf65dfcc0cfb0bd.jpg',
			title: 'Cover Lorem Ipsum is simply dummy text of',
			likes: '10k',
			createdAt: '10 hours',
			comments: '1k'
		},
	]

	return (
		<View style={globalStyles.container}>
			{/* Header */}
			<Header />

			{/* Posts */}
			<View style={globalStyles.posts}>
				<View style={globalStyles.postDiv}>
					<FlatList 
						data={ORDER}
						renderItem={({item}) => (
							item.id === '0' ? (
								<Title title='Posts' /> 
							) : (
								<HomePosts 
									posts={POSTS}
								/>
							)
						)}
						keyExtractor={item => item.id}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</View>
		</View>
	)
}
