import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import NotiType from '../common/NotiCommon/NotiType'
import Title from '../common/SpecialComponents/Title'

export default function Notification() {

	const NOTIFICATION = [
		{id: '0'},
		{id: '1'},
		{id: '2'},
	]

	const DETAIL_NOTIFICATION = [
		{
			id: '01',
			noti_avar: 'https://i.pinimg.com/564x/74/77/a9/7477a929c1e6732a396afa81bde22de9.jpg',
			noti_user: 'John Doe',
			noti_content: ' started following you Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi molestiae animi dolore laborum ipsum at, fugit deserunt alias laboriosam corrupti doloribus laudantium labore iure non cumque sapiente ratione qui..',
			noti_time: 'today' // today
		},
		{
			id: '02',
			noti_avar: 'https://i.pinimg.com/564x/5a/6e/b4/5a6eb4197ae0af8c2dc491efc267a442.jpg',
			noti_user: 'Jane Doe',
			noti_content: ' tagged you on her post.',
			noti_time: 'today'
		},
		{
			id: '03',
			noti_avar: 'https://i.pinimg.com/736x/cb/ea/d8/cbead8f2ee2ac1954b646bbe549b92b5.jpg',
			noti_user: 'Khe',
			noti_content: ' started following you.',
			noti_time: 'today'
		},
		{
			id: '04',
			noti_avar: 'https://i.pinimg.com/564x/1a/b0/66/1ab066c94548a6d5da7aca5a4f3c44c3.jpg',
			noti_user: 'Khum',
			noti_content: ' liked your post.',
			noti_time: 'this week' // 2d -> 6d ago
		},
		{
			id: '05',
			noti_avar: 'https://i.pinimg.com/564x/75/97/b8/7597b82bcbfd664539f733b0f2104264.jpg',
			noti_user: 'Marca',
			noti_content: ' started following you.',
			noti_time: 'this week'
		},
		{
			id: '06',
			noti_avar: 'https://i.pinimg.com/564x/6b/e6/25/6be625b9d334cf19dfa20365b9dac282.jpg',
			noti_user: 'Ca',
			noti_content: ' started following you.',
			noti_time: 'earlier' // 1w ago
		},
	]

	return (
		<View style={globalStyles.container}>
			<View style={globalStyles.notiTitle}>
				<Title title='Notifications' />
			</View>
			<View style={globalStyles.notiToday}>
				<FlatList 
					data={NOTIFICATION}
					renderItem={({item}) => (
						item.id === '0' ? (
							<NotiType 
								notifications={DETAIL_NOTIFICATION}
								label='Today'
							/>
						) : item.id === '1' ? (
							<NotiType
								notifications={DETAIL_NOTIFICATION}
								label='This Week'
							/>
						) : item.id === '2' && (
							<NotiType 
								notifications={DETAIL_NOTIFICATION}
								label='Earlier'
							/>
						) 
					)}
					keyExtractor={item => item.id}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}
