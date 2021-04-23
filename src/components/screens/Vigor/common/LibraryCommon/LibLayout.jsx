import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../../../../styles/global'

export default function LibLayout({component, source, label, onPress}) {
	return (
		// <View style={globalStyles.libFirstRow}>
			<TouchableOpacity 
				style={globalStyles.libComponents__library}
				onPress={onPress}
			>
				<View>
					<Image
						source={source}
						resizeMode='contain'
						style={{
							width: 60,
							height: 60
						}}
					/>
					<Text style={globalStyles.libComponents__label}>{label}</Text>
				</View>
			</TouchableOpacity>
			
		// </View>
	)
}
