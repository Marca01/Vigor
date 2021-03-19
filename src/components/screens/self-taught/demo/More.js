import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import { Feather } from '@expo/vector-icons'

export default function More({navigation}) {

	const [content, setContent] = useState([
		{exerciseName: 'Calculator', _id: '1'},
		{exerciseName: 'Double tap', _id: '2'},
		{exerciseName: 'Phone number', _id: '3'},
		{exerciseName: 'Camera', _id: '4'},
		{exerciseName: 'Navigation', _id: '5'},
		{exerciseName: 'Calendar', _id: '6'},
		{exerciseName: 'Todo1', _id: '7'},
		{exerciseName: 'Todo2', _id: '8'},
	]);

	return (
		<View style={{flex: 1,}}>
			<ImageBackground
				source={{uri: 'https://raw.githubusercontent.com/iamshaunjp/react-native-tutorial/lesson-27/gamezone/assets/game_bg.png'}}
				style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
			>
				<FlatList 
					data={content}
					numColumns={2}
					horizontal={false}
					renderItem={({item}) => (
						<View style={{flex: 1, padding: 24,}}>
							{item.exerciseName == 'Calculator' ? (
							<TouchableOpacity
								onPress={() => navigation.navigate('Calculator')}
							>
								<ImageBackground
									source={{uri: 'https://png.pngtree.com/thumb_back/fh260/background/20200703/pngtree-mathematics-education-calculator-ruler-hand-drawn-background-image_340649.jpg'}}
									style={{flex: 1, resizeMode: 'contain', justifyContent: 'center',}}
									imageStyle={{ borderRadius: 15,}}
									blurRadius={5}
								>
									<View
										style={{
											flex: 1,
											// backgroundColor: 'white',
											height: 150,
											borderRadius: 15, 
											paddingHorizontal: 18,
											paddingVertical: 15, 
											justifyContent: 'space-around', 
											alignItems: 'center',
											width: '100%',
											// backgroundColor: 'rgba( 0, 0, 0, 0.4 )',
										}}
									>
										<Text
											style={{
												fontSize: 25, 
												fontFamily: 'nunito-bold',
											}}
										>
											{item.exerciseName}
										</Text>
										<View>
											{item.exerciseName == 'Calculator' ? (
												<AntDesign name="calculator" size={45} color="black" />
											) : (
												<Text>1</Text>
											)}
										</View>
									</View>
								</ImageBackground>
							</TouchableOpacity> 
							) : item.exerciseName == 'Double tap' ? (
								<TouchableOpacity
									onPress={() => navigation.navigate('DoubleTap')}
								>
									<ImageBackground
										source={{uri: 'https://st4.depositphotos.com/5266903/27390/v/950/depositphotos_273900202-stock-illustration-double-tap-vector-mesh-network.jpg'}}
										style={{flex: 1, resizeMode: 'contain', justifyContent: 'center',}}
										imageStyle={{ borderRadius: 15,}}
										blurRadius={5}
									>
										<View
											style={{
												flex: 1,
												// backgroundColor: 'white',
												height: 150,
												borderRadius: 15, 
												paddingHorizontal: 18,
												paddingVertical: 15, 
												justifyContent: 'space-around', 
												alignItems: 'center',
												width: '100%'
											}}
										>
											<Text
												style={{
													fontSize: 25, 
													fontFamily: 'nunito-bold',
												}}
											>
												{item.exerciseName}
											</Text>
											<View>
												{item.exerciseName == 'Double tap' ? (
													<MaterialCommunityIcons name="gesture-double-tap" size={45} color="black" />
												) : (
													<Text>1</Text>
												)}
											</View>
										</View>
									</ImageBackground>
								</TouchableOpacity>
							) : item.exerciseName == 'Phone number' ? (
								<TouchableOpacity
									onPress={() => navigation.navigate('PhoneNumber')}
								>
									<ImageBackground
										source={{uri: 'https://comps.canstockphoto.com/hand-smartphone-phone-number-clipart-vector_csp30700155.jpg'}}
										style={{flex: 1, resizeMode: 'contain', justifyContent: 'center',}}
										imageStyle={{ borderRadius: 15,}}
										blurRadius={5}
									>
										<View
											style={{
												flex: 1,
												// backgroundColor: 'white',
												height: 150,
												borderRadius: 15, 
												paddingHorizontal: 18,
												paddingVertical: 15, 
												justifyContent: 'space-around', 
												alignItems: 'center',
												width: '100%'
											}}
										>
											<Text
												style={{
													fontSize: 25, 
													fontFamily: 'nunito-bold',
												}}
											>
												{item.exerciseName}
											</Text>
											<View>
												{item.exerciseName == 'Phone number' ? (
													<Feather name="phone" size={45} color="black" />
												) : (
													<Text>1</Text>
												)}
											</View>
										</View>
									</ImageBackground>
								</TouchableOpacity>
							) : item.exerciseName == 'Camera' ? (
								<TouchableOpacity
									onPress={() => navigation.navigate('Camera')}
								>
									<ImageBackground
										source={{uri: 'https://previews.123rf.com/images/ghaziarmy/ghaziarmy1812/ghaziarmy181200025/115909661-retro-vintage-camera-vector-illustration-old-camera-vintage-illustration-retro-camera-icon-flat-vect.jpg'}}
										style={{flex: 1, resizeMode: 'contain', justifyContent: 'center',}}
										imageStyle={{ borderRadius: 15,}}
										blurRadius={5}
									>
										<View
											style={{
												flex: 1,
												// backgroundColor: 'white',
												height: 150,
												borderRadius: 15, 
												paddingHorizontal: 18,
												paddingVertical: 15, 
												justifyContent: 'space-around', 
												alignItems: 'center',
												width: '100%'
											}}
										>
											<Text
												style={{
													fontSize: 25, 
													fontFamily: 'nunito-bold',
												}}
											>
												{item.exerciseName}
											</Text>
											<View>
												{item.exerciseName == 'Camera' ? (
													<Feather name="camera" size={45} color="black" />
												) : (
													<Text>1</Text>
												)}
											</View>
										</View>
									</ImageBackground>
								</TouchableOpacity>
							) : item.exerciseName == 'Navigation' ? (
								<TouchableOpacity
									onPress={() => navigation.navigate('NavIntent')}
								>
									<ImageBackground
										source={{uri: 'https://image.freepik.com/free-vector/illustration-gps-navigation_53876-8487.jpg'}}
										style={{flex: 1, resizeMode: 'contain', justifyContent: 'center',}}
										imageStyle={{ borderRadius: 15,}}
										blurRadius={5}
									>
										<View
											style={{
												flex: 1,
												// backgroundColor: 'white',
												height: 150,
												borderRadius: 15, 
												paddingHorizontal: 18,
												paddingVertical: 15, 
												justifyContent: 'space-around', 
												alignItems: 'center',
												width: '100%'
											}}
										>
											<Text
												style={{
													fontSize: 24, 
													fontFamily: 'nunito-bold',
												}}
											>
												{item.exerciseName}
											</Text>
											<View>
												{item.exerciseName == 'Navigation' ? (
													<Feather name="navigation" size={45} color="black" />
												) : (
													<Text>1</Text>
												)}
											</View>
										</View>
									</ImageBackground>
								</TouchableOpacity>
							) : item.exerciseName == 'Calendar' ? (
								<TouchableOpacity
									onPress={() => navigation.navigate('CalendarAsync')}
								>
									<ImageBackground
										source={{uri: 'https://www.urbanbrush.net/en/wp-content/uploads/edd/2018/12/urbanbrush-20181210144714750394.png'}}
										style={{flex: 1, resizeMode: 'contain', justifyContent: 'center',}}
										imageStyle={{ borderRadius: 15,}}
										blurRadius={5}
									>
										<View
											style={{
												flex: 1,
												// backgroundColor: 'white',
												height: 150,
												borderRadius: 15, 
												paddingHorizontal: 18,
												paddingVertical: 15, 
												justifyContent: 'space-around', 
												alignItems: 'center',
												width: '100%'
											}}
										>
											<Text
												style={{
													fontSize: 24, 
													fontFamily: 'nunito-bold',
												}}
											>
												{item.exerciseName}
											</Text>
											<View>
												{item.exerciseName == 'Calendar' ? (
													<AntDesign name="calendar" size={45} color="black" />
												) : (
													<Text>1</Text>
												)}
											</View>
										</View>
									</ImageBackground>
								</TouchableOpacity>
							) : (
								<View
									style={{
										flex: 1,
										backgroundColor: 'white',
										height: 150,
										borderRadius: 15, 
										paddingHorizontal: 18,
										paddingVertical: 15, 
										justifyContent: 'space-around', 
										alignItems: 'center',
										width: '100%'
									}}
								>
									<Text
										style={{
											fontSize: 25, 
											fontFamily: 'nunito-bold',
										}}
									>
										{item.exerciseName}
									</Text>
									<View>
										{item.exerciseName == 'Calculator' ? (
											<AntDesign name="calendar" size={24} color="black" />
										) : (
											<Text>1</Text>
										)}
									</View>
								</View>
							)}
						</View>
					)}
					keyExtractor={(item) => item._id}
				/>
				</ImageBackground>
				<View>
					<Button title="Back to home screen" onPress={() => navigation.navigate('Home')} />
				</View>
		</View>
	)
}
