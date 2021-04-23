import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Avatar } from 'react-native-paper'
import { globalStyles } from '../../../../../styles/global'

export default function HomePosts({posts}) {
	return (
		<View>
			<FlatList 
				data={posts}
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
		</View>
	)
}
