import React from 'react'
import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Avatar } from 'react-native-paper'
import { globalStyles } from '../../../../styles/global'
import { LinearGradient } from 'expo-linear-gradient'

export default function Header() {
	return (
		<View style={globalStyles.headerDiv}>
			<View style={globalStyles.header}>
				<Image  
					source={require('../../../../assets/images/logo.png')}
					resizeMode='contain'
					style={globalStyles.header__logo}
				/>
				<View style={globalStyles.header__user}>
					<Feather name="search" size={30} color="black" />
					<Avatar.Image size={42} source={require('../../../../assets/images/avatar.jpg')} />
				</View>
			</View>
			{/* My mood */}
			<View style={globalStyles.home__userMoods}>
				<View style={globalStyles.home__userMoods__mood}>
					<LinearGradient
						colors={['#FFEFC2', '#FFBE0A']}
						style={globalStyles.home__userMoods__moodLinearBg}
					>
						<Image 
							// source={require('../../../assets/images/smiling.png')}
							source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/smiling-face-with-smiling-eyes_1f60a.png'}}
							style={globalStyles.home__userMoods__moodIcon}
						/>
					</LinearGradient>
				</View>
				<View style={globalStyles.home__userMoods__mood}>
					<LinearGradient
						colors={['#FFEFC2', '#FFBE0A']}
						style={globalStyles.home__userMoods__moodLinearBg}
					>
						<Image 
							// source={require('../../../assets/images/smiling.png')}
							source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/beaming-face-with-smiling-eyes_1f601.png'}}
							style={globalStyles.home__userMoods__moodIcon}
						/>
					</LinearGradient>
				</View>
				<View style={globalStyles.home__userMoods__mood}>
					<LinearGradient
						colors={['#FFEFC2', '#FFBE0A']}
						style={globalStyles.home__userMoods__moodLinearBg}
					>
						<Image 
							// source={require('../../../assets/images/smiling.png')}
							source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/smiling-face-with-heart-eyes_1f60d.png'}}
							style={globalStyles.home__userMoods__moodIcon}
						/>
					</LinearGradient>
				</View>
				<View style={globalStyles.home__userMoods__mood}>
					<LinearGradient
						colors={['#FFEFC2', '#FFBE0A']}
						style={globalStyles.home__userMoods__moodLinearBg}
					>
						<Image 
							// source={require('../../../assets/images/smiling.png')}
							source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/smiling-face_263a-fe0f.png'}}
							style={globalStyles.home__userMoods__moodIcon}
						/>
					</LinearGradient>
				</View>
				<View style={globalStyles.home__userMoods__mood}>
					<LinearGradient
						colors={['#FFEFC2', '#FFBE0A']}
						style={globalStyles.home__userMoods__moodLinearBg}
					>
						<Image 
							// source={require('../../../assets/images/smiling.png')}
							source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/pensive-face_1f614.png'}}
							style={globalStyles.home__userMoods__moodIcon}
						/>
					</LinearGradient>
				</View>
			</View>
		</View>
	)
}
