import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../../../styles/global'

export default function NotiType({notifications, label}) {
	return (
		<View style={globalStyles.notiDiv}>
			<View style={globalStyles.notiToday_labels}>
				<Text style={globalStyles.notiToday_labelToday}>{label}</Text>
			</View>
			<FlatList 
				data={notifications}
				renderItem={({item}) => (
					<View style={globalStyles.notiToday_notifications}>
						<View style={globalStyles.notiToday_notiDetail}>
							<View style={globalStyles.notiToday_notiInfo}>
								<Image 
									source={{uri: item.noti_avar}}
									style={globalStyles.notiToday_notiInfo_avatar}
								/>
								<View style={globalStyles.notiToday_notiInfo_text}>
									<Text style={globalStyles.notiToday_notiInfo_username}>
										{item.noti_user}
										<Text style={globalStyles.notiToday_notiInfo_content}>{item.noti_content}</Text>
									</Text>
								</View>
							</View>
							<TouchableOpacity style={globalStyles.notiDetail_actionBtn}>
								<Text style={globalStyles.notiDetail_actionBtn_text}>Following</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	)
}
