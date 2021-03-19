import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({navigation}) {

	// Example data 
	const [newPlants, setNewPlants] = useState([
		{
			id: '0',
			name: 'Plant 1', 
			img: {uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/plant_1.jpeg?raw=true'},
			favorite: false
		},
		{
			id: '1',
			name: 'Plant 2', 
			img: {uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/plant_2.jpg?raw=true'},
			favorite: true
		},
		{
			id: '2',
			name: 'Plant 3', 
			img: {uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/plant_3.jpg?raw=true'},
			favorite: false
		},
		{
			id: '3',
			name: 'Plant 4', 
			img: {uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/plant_4.jpg?raw=true'},
			favorite: false
		},
	])

	const [friendList, setFriendList] = useState([
		{
			id: '0',
			img: {uri: 'https://raw.githubusercontent.com/byprogrammers/lets-code-react-native/master/LCRN02-plant-app-exploration/assets/images/profile_1.jpg'}
		},
		{
			id: '1',
			img: {uri: 'https://raw.githubusercontent.com/byprogrammers/lets-code-react-native/master/LCRN02-plant-app-exploration/assets/images/profile_2.jpg'}
		},
		{
			id: '2',
			img: {uri: 'https://raw.githubusercontent.com/byprogrammers/lets-code-react-native/master/LCRN02-plant-app-exploration/assets/images/profile_3.jpg'}
		},
		{
			id: '3',
			img: {uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/profile_4.jpg?raw=true'}
		},
		{
			id: '4',
			img: {uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/profile_5.jpg?raw=true'}
		},
	])

	const RenderFriendsComponent = () => {
		if(friendList.length === 0) {
			return (
				<Text style={{color: '#606d87', fontFamily: 'nunito-bold', fontSize: 22, lineHeight: 30}}>You're so lonely :(</Text>
			)
		} else {
			return (
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					{friendList.map((item, index) => {
						if(index <= 2) {
							return (
								<View 
									key={item.id}
									style={index === 0  ? {} : {marginLeft: -20}}
									// style={{marginRight: 12}}
								>
									<Image 
										source={item.img}
										resizeMode='cover'
										style={{
											width: 50,
											height: 50,
											borderRadius: 50 / 2,
											borderWidth: 3,
											borderColor: '#00996D'
										}}
									/>
								</View>
							)
						}
					})}

					{friendList.length > 3 && (<Text style={{marginLeft: 5, color: '#606d87',  fontFamily: 'nunito-regular', fontSize: 16, lineHeight: 22}}>+{friendList.length - 3} More</Text>) }
				</View>
			)
		}
	}

	const {width, height} = Dimensions.get('window');

	return (			
		<View style={styles.container}>
			<View style={{height: '30%', backgroundColor: 'white'}}>
				<View 
					style={{
						flex: 1,
						borderBottomLeftRadius: 50, 
						borderBottomRightRadius: 50, 
						backgroundColor: '#00996D'
					}}
				>
					<View style={{marginTop: 30, marginHorizontal: 24}}>
						<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
							<Text style={{color: 'white', fontFamily: 'nunito-bold', fontSize: 22, lineHeight: 30}}>New Plants</Text>
							<TouchableOpacity
								onPress={() => console.log('Focused')}
							>
								<Image 
									source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/focus.png?raw=true'}}
									resizeMode='contain'
									style={{
										width: 20,
										height: 20
									}}
								/>
							</TouchableOpacity>
						</View>

						<View style={{marginTop: -4}}>
							<FlatList
								horizontal
								showsHorizontalScrollIndicator
								data={newPlants}
								renderItem={({item}) => (
									<View
										style={{
											justifyContent: 'center',
											alignItems: 'center', 
											marginHorizontal: 8
										}}
									>
										<Image 
											source={item.img}
											resizeMode='cover'
											style={{
												width: width * 0.23,
												height: '82%',
												borderRadius: 15
											}}
										/>

										<View
											style={{
												position: 'absolute',
												bottom: '17%',
												right: 0,
												backgroundColor: '#00996D',
												paddingHorizontal: 8,
												borderTopLeftRadius: 10,
												borderBottomLeftRadius: 10,
											}}
										>
											<Text style={{color: 'white', fontFamily: 'nunito-regular'}}>{item.name}</Text>
										</View>

										<TouchableOpacity
											style={{
												position: 'absolute',
												top: '17%', 
												left: 7
											}}
											onPress={() => console.log('Favorite')}
										>
											<Image 
												source={item.favorite 
													? {uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/heart_red.png?raw=true'}
													: {uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/heart_green_outline.png?raw=true'}
												}
												resizeMode='contain'
												style={{
													width: 20,
													height: 20,
													borderRadius: 15
												}}
											/>
										</TouchableOpacity>
									</View>
								)}
								keyExtractor={item => item.id}
							/>
						</View>
					</View>
				</View>
			</View>

			<View style={{height: '50%', backgroundColor: '#eff2f5'}}>
				<View
					style={{
						flex: 1,
						borderBottomLeftRadius: 50,
						borderBottomRightRadius: 50,
						backgroundColor: 'white'
					}}
				>
					<View style={{marginTop: 14, marginHorizontal: 24}}>
						<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
							<Text style={{color: '#606d87', fontFamily: 'nunito-bold', fontSize: 22, lineHeight: 30}}>Today's Share</Text>
							<TouchableOpacity
								onPress={() => console.log('See all')}
							>
								<Text style={{color: '#606d87', fontFamily: 'nunito-regular', fontSize: 16, lineHeight: 22}}>See all</Text>
							</TouchableOpacity>
						</View>

						<View style={{flexDirection: 'row', height: '88%', marginTop: 8}}>
							<View style={{flex: 1}}>
								<TouchableOpacity
									style={{flex: 1}}
									onPress={() => navigation.navigate('PlantDetail')}
								>
									<Image 
										source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/plant_5.jpg?raw=true'}}
										resizeMode='cover'
										style={{
											width: '90%',
											height: '90%',
											borderRadius: 20
										}}
									/>
								</TouchableOpacity>

								<TouchableOpacity
									style={{flex: 1}}
									onPress={() => navigation.navigate('PlantDetail')}
								>
									<Image 
										source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/plant_6.jpg?raw=true'}}
										resizeMode='cover'
										style={{
											width: '90%',
											height: '90%',
											borderRadius: 20
										}}
									/>
								</TouchableOpacity>
							</View>

							<View style={{flex: 1.3,}}>
								<TouchableOpacity
									style={{flex: 1,}}
									onPress={() => navigation.navigate('PlantDetail')}
								>
									<Image 
										source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/plant_7.jpg?raw=true'}}
										resizeMode='cover'
										style={{
											width: '95%',
											height: '95%',
											borderRadius: 20
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>

			<View style={{height: '20%', backgroundColor: '#eff2f5'}}>
				<View style={{flex: 1, backgroundColor: '#eff2f5'}}>
					<View style={{marginTop: 12, marginHorizontal: 24}}>
						<Text style={{color: '#606d87', fontFamily: 'nunito-bold', fontSize: 22, lineHeight: 30}}>Added Friends</Text>
						<Text style={{color: '#606d87', fontFamily: 'nunito-regular', fontSize: 16, lineHeight: 22, marginBottom: 4}}>5 Total</Text>
						
						<View style={{flexDirection: 'row', height: '52%'}}>
							{/* Friends */}
							<View style={{flex: 1.3, flexDirection: 'row', alignItems: 'center',}}>
								{RenderFriendsComponent()}
							</View>

							{/* Add friend */}
							<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
								<Text style={{color: '#606d87', fontFamily: 'nunito-regular', fontSize: 16, lineHeight: 22}}>Add new</Text>
								<TouchableOpacity
									style={{
										marginLeft: 8,
										width: 40,
										height: 40,
										borderRadius: 10,
										alignItems: 'center',
										justifyContent: 'center',
										backgroundColor: '#BEC1D2',
									}}
									onPress={() => console.log('Plus')}
								>
									<Image 
										source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/plus.png?raw=true'}}
										resizeMode='contain'
										style={{
											width: 20,
											height: 20
										}}
										/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
