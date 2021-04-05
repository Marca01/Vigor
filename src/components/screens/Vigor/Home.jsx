import React from 'react'
import { View, Text, Image, FlatList, StatusBar } from 'react-native'
import { globalStyles } from '../../../styles/global'
import Header from './header/Header'
import { SimpleLineIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Avatar } from 'react-native-paper'

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
								<Text style={globalStyles.postTitle}>Posts</Text> 
							) : (
								<FlatList 
									data={POSTS}
									renderItem={({item}) => (
										<View style={globalStyles.post}>
											<View style={globalStyles.post__content}>
												<View style={globalStyles.post__contentType}>
													{item.imageContent && (
														<Image 
															source={{uri: item.imageContent}}
															// resizeMode='contain'
															style={globalStyles.post__contentType__image}
														/>
													)}
												</View>
												<View style={globalStyles.post__contentTitle}>
													<View style={globalStyles.post__contentTitleDiv}>
														<Text style={globalStyles.post__contentTitle_title}>{item.title}</Text>
													</View>
													<SimpleLineIcons name="options" size={16} color="black" />
												</View>
											</View>
											<View style={globalStyles.post__stats}>
												<Text style={globalStyles.post__stats_like}>{item.likes} likes</Text>
												<Text style={globalStyles.post__stats_comment}>{item.comments} comments</Text>
											</View>
											<View style={globalStyles.post__user}>
												<View style={globalStyles.post__userInfo}>
													<Avatar.Image 
														size={42} 
														source={item.avatar} 
														style={globalStyles.post__userInfo_avatar}
													/>
													<View style={globalStyles.post__userInfo_createdAt}>
														<Text style={globalStyles.post__userInfo_name}>{item.creator}</Text>
														<Text style={globalStyles.post__userInfo_dotSeparator}>.</Text>
														<Text style={globalStyles.post__userInfo_time}>{item.createdAt} ago</Text>	
													</View>
												</View>
												<AntDesign name="heart" size={24} color="red" />
											</View>
											{/* <View style={globalStyles.post__createdAt}>
											</View> */}
										</View>
									)}
									keyExtractor={item => item.id}
									showsVerticalScrollIndicator={false}
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