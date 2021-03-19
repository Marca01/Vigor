import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../../../styles/global';
import firebase from 'firebase';

export default function About({navigation, route}) {

	// useEffect(() => {
	// 	const carsDB = firebase.firestore().collection('carId')
	// 		.onSnapshot((snapshot) => {
	// 			setCars(
	// 				snapshot.docs.map((doc) =>({
	// 					_id: doc.id,
	// 					car: doc.data()
	// 				}))
	// 			)
	// 		})
	// 		return () => {
	// 			carsDB()
	// 		}
	// }, [])

	return (
		// route.params?.userId === 1 ? (
		// 	<View style={globalStyles.container}>
		// 		<Text>Your profile: {route.params.userId}</Text>
		// 	</View>
		// ) : (
		// 	<View style={globalStyles.container}>
		// 		<Text>Other profile: {route.params.userId}</Text>
		// 	</View>
		// )
		<View style={globalStyles.container}>
			<View style={{flex: 1, padding: 24}}>
				<FlatList
					data={[route.params]}
					renderItem={({item}) => {
						let items = [];
						// if(item.carsName) {
							items = item.car.carsName.map((carName) => (
								<Text>{carName}</Text>
							))
						// }
						return (
							<View>
								<Text style={globalStyles.titleText}>{item.car.content}</Text>
								{/* <Text style={globalStyles.titleText}>{item.carsName}</Text> */}
								{items}
							</View>	
						)
					}}
					keyExtractor={item => item._id}
				/>
			</View>
		</View>
	)
}
