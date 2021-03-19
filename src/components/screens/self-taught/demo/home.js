import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TouchableHighlight, ImageBackground, Modal, TextInput, Alert } from 'react-native';
import { globalStyles } from '../../styles/global';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Caption } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import firebase from 'firebase';
// import '@firebase/firestore';

export default function Home({navigation}) {
	const [cars, setCars] = useState([
		// {manufacturer: 'Audi', content: 'Lorem Ips 1', carsName: ['A8', 'Q7', 'TT'], _id: '1'},
		// {manufacturer: 'BMW', content: 'Lorem Ips 2', carsName: ['X6M', '750Li', 'Vision next 100'], _id: '2'},
		// {manufacturer: 'Mercedes', content: 'Lorem Ips 3', carsName: ['C200', 'S650', 'AMG GTR'], _id: '3'},
		// {manufacturer: 'Porsche', content: 'Lorem Ips 4', carsName: ['Panamera', '911', 'Cayenne'], _id: '4'},
	])

	const [modal, setModal] = useState(false)
	// const [modalEdit, setModalEdit] = useState('')
	const [modalEdit, setModalEdit] = useState(false)

	const [valueChange, setValueChange] = useState('')
	const [contentChange, setContentChange] = useState('')
	const [carNameChange, setCarNameChange] = useState([])
	const [idChange, setIdChange] = useState('')

	const [valueChangeEdit, setValueChangeEdit] = useState('')
	const [contentChangeEdit, setContentChangeEdit] = useState('')
	const [carNameChangeEdit, setCarNameChangeEdit] = useState([])

	const [carsEdit, setCarsEdit] = useState('')

	// Get all post from firestore 
	useEffect(() => {
		const carsDB = firebase.firestore().collection('carId')
			.onSnapshot((snapshot) => {
				setCars(
					snapshot.docs.map((doc) =>({
						_id: doc.id,
						car: doc.data()
					}))
				)
			})
			return () => {
				carsDB()
			}
	}, [])

	useEffect(() => {
		cars.map(({_id, car}) => {
			firebase.firestore().collection('carId').doc(_id).get()
			.then(setCarsEdit(car))
		})
	}, [])

	useEffect(() => {
		setValueChangeEdit(carsEdit.manufacturer)
		setContentChangeEdit(carsEdit.content)
		setCarNameChangeEdit(carsEdit.carsName)
	}, [carsEdit.manufacturer, carsEdit.content, carsEdit.carsName])

	// Normal
	// const addNewCar = (manu, content, car, id) => {
	// 	setCars((prevCars) => [
	// 		...prevCars, 
	// 		{manufacturer: manu, content: content, carsName: [car], _id: id}
	// 	]);
	// 	setModal(false);
	// 	setValueChange('');
	// 	setContentChange('');
	// 	setCarNameChange('');
	// 	setIdChange('');
	// }
	
	// Firebase firestore
	const addNewCar = () => {
		
		firebase.firestore().collection('carId').add({
			manufacturer: valueChange,
			content: contentChange,
			carsName: carNameChange,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})

		setModal(false);
		setValueChange('');
		setContentChange('');
		setCarNameChange('');
	}

	// Normal
	// const deleteCar = (carId) => {
	// 	setCars((prevCars) => {
	// 		return prevCars.filter(prevCar => prevCar._id !== carId);
	// 	})
	// }

	// Firebase firestore
	const deleteCar = (carId) => {
		firebase.firestore().collection('carId').doc(carId).delete()
	}

	const updateCar = (carId) => {
		firebase.firestore().collection('carId').doc(carId).update({
			manufacturer: valueChangeEdit,
			content: contentChangeEdit,
			carsName: carNameChangeEdit
		})

		setModalEdit(false)
	}

	return (
		<View style={globalStyles.container}>
			{/* Add modal */}
			<Modal
				animationType='slide'
				transparent={true}
				visible={modal}
			>
				<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
					<View style={{backgroundColor: 'white', alignItems: 'center', padding: 24, borderRadius: 15, shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 5,
						},
						shadowOpacity: 0.34,
						shadowRadius: 6.27,

						elevation: 10}}
					>
						<TextInput
							placeholder='Add new car'
							onChangeText={value => setValueChange(value)}
							value={valueChange}
							style={{borderColor: 'black', borderRadius: 50, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 12, width: 150, marginBottom: 10}}
						/>
						<TextInput
							placeholder='Add new content'
							onChangeText={content => setContentChange(content)}
							value={contentChange}
							style={{borderColor: 'black', borderRadius: 50, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 12, width: 150, marginBottom: 10}}
						/>
						<TextInput
							placeholder='Add new car name'
							onChangeText={carName => setCarNameChange(carName.split(','))}
							value={carNameChange}
							multiline
							style={{borderColor: 'black', borderRadius: 50, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 12, width: 150, marginBottom: 10}}
						/>
						{/* <TextInput
							placeholder='Add new id'
							onChangeText={id => setIdChange(id)}
							value={idChange}
							style={{borderColor: 'black', borderRadius: 50, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 12, width: 150, marginBottom: 20}}
						/> */}
						<View style={{flexDirection: 'row', paddingBottom: 0}}>
							<Button title='Cancel' onPress={() => setModal(false)}/>
							{/* <Button title='Add' onPress={() => addNewCar(valueChange, contentChange, carNameChange, idChange)}/> */}
							<Button title='Add' onPress={() => addNewCar()}/>
						</View>
					</View>
				</View>
			</Modal>

			{/* Edit modal */}
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalEdit}
				// visible={cars.map(car => {car._id === modalEdit}) ? true : false}
			>
				<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
					<View style={{backgroundColor: 'white', alignItems: 'center', padding: 24, borderRadius: 15, shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 5,
						},
						shadowOpacity: 0.34,
						shadowRadius: 6.27,

						elevation: 10}}
					>
						{cars.length && cars.map(({_id, carEdit}) => (
							<View key={_id}>
								<TextInput
									placeholder='Add new car'
									onChangeText={value => setValueChangeEdit(value)}
									value={valueChangeEdit}
									style={{borderColor: 'black', borderRadius: 50, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 12, width: 150, marginBottom: 10}}
								/>
								<TextInput
									placeholder='Add new content'
									onChangeText={content => setContentChangeEdit(content)}
									value={contentChangeEdit}
									style={{borderColor: 'black', borderRadius: 50, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 12, width: 150, marginBottom: 10}}
								/>
								<TextInput
									placeholder='Add new car name'
									onChangeText={carName => setCarNameChangeEdit(carName)}
									value={carNameChangeEdit}
									multiline
									style={{borderColor: 'black', borderRadius: 50, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 12, width: 150, marginBottom: 10}}
								/>
								<View style={{flexDirection: 'row', paddingBottom: 0}}>
									<Button title='Cancel' onPress={() => setModalEdit(false)}/>
									<Button title='Update' onPress={() => updateCar(_id)}/>
								</View>
							</View>
						))}
					</View>
				</View>
			</Modal>

			<View style={{flex: 1}}>
				<ImageBackground 
					source={{uri: 'https://raw.githubusercontent.com/iamshaunjp/react-native-tutorial/lesson-27/gamezone/assets/game_bg.png'}}
					style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
				>
					<FlatList
						data={cars}
						renderItem={({_id, item}) => (
							<TouchableOpacity 
								key={_id}
								onPress={() => navigation.navigate('About', item)}
								// onLongPress={() => setModalEdit(item._id)}
								// onLongPress={() => console.log(carsEdit)}
								onLongPress={() => setModalEdit(true)}
							>
								<View style={{padding: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
									<View>
										<Text style={globalStyles.titleText}>{item.car.manufacturer}</Text>
										<Caption>{item.car.content}</Caption>
									</View>
									<View>
										<AntDesign 
											name="delete" 
											size={24} 
											color="black"
											onPress={() => deleteCar(item._id)}
										/>
									</View>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={item => item._id}
					/>
				</ImageBackground>
				<View>
					<Button title='Add' onPress={() => setModal(true)}/>
				</View>
			</View>
		</View>
	)
}