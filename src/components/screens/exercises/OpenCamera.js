import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Button, Image, ScrollView } from 'react-native'
import {Camera} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as ImageManipulator from 'expo-image-manipulator'
import * as FaceDetector from 'expo-face-detector'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function OpenCamera() {

	const camera = null

	const [hasPermission, setHasPermission] = useState(null)
	const [type, setType] = useState(Camera.Constants.Type.back)
	const [captureImage, setCaptureImage] = useState(null)
	const [recordVid, setRecordVid] = useState('')
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)

	const [images, setImages] = useState([])

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync()
			setHasPermission(status === 'granted');
		})()
	}, [])

	if (hasPermission === null) {
		return <View />
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	const takePicture = async () => {
		if(captureImage) {
			const options = {
				// onPictureSaved: ,
				quality: 1,
				base64: true,
			}
			const { uri, width, height } = await captureImage.takePictureAsync(options)
			const savedPhoto = await MediaLibrary.saveToLibraryAsync(uri)

			setImages([uri, ...images])

			console.log(uri)
		}
	}

	const recordVideo = async () => {
		if(captureImage) {
			const options = {
				// onPictureSaved: ,
				quality: Camera.Constants.VideoQuality['2160p'],
			}
			const { uri } = await captureImage.recordAsync(options)
			await MediaLibrary.saveToLibraryAsync(uri)

			setRecordVid('fshd')
		}
	}

	const stopVideo = () => {
		if(recordVideo) {
			captureImage.stopRecording()
		}
	}

	const onOffFlash = () => {
		setFlash(flash === Camera.Constants.FlashMode.off 
					? Camera.Constants.FlashMode.torch
					: Camera.Constants.FlashMode.off	
		)
	}

	return (
		<View style={styles.container}>
			<Camera 
				style={styles.camera} 
				type={type}
				ref={ref => setCaptureImage(ref)}
				autoFocus={Camera.Constants.AutoFocus.on}
				whiteBalance={Camera.Constants.WhiteBalance.autoFocus}
				flashMode={flash}
			>
				{/* {images && */}
				 	<ScrollView horizontal>
						{images.map(({image}) => (
							<View 
								style={{
									backgroundColor: 'aqua',
									position: 'absolute',
									// top: 460,
									left: 10,
								}}
								key={image}
							>
								<Image 
									style={styles.imagePreview}
									source={{image}} 
								/>
							 </View>
						))}
					</ScrollView>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back
								);
							}}
					>
						<Text style={styles.textFlip}>
							<MaterialIcons name="flip-camera-ios" size={45} color="white" />
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.textTakePicture}
						onPress={() => takePicture()}
						onLongPress={() => recordVideo()}
						onPressOut={() => stopVideo()}
					>

					</TouchableOpacity>
					<TouchableOpacity
						style={styles.flashAction}
						onPress={() => onOffFlash()}
					>
						{flash === Camera.Constants.FlashMode.off
							? <MaterialCommunityIcons style={styles.flashIcon} name="flash-outline" size={40} color="white" />
							: flash === Camera.Constants.FlashMode.torch 
							&& <MaterialCommunityIcons style={styles.flashIcon} name="flash-off" size={40} color="white" />
						}
					</TouchableOpacity>
				</View>
			</Camera>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	camera: {
		flex: 1,
	},
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
	alignItems: 'flex-end',
	justifyContent: 'space-around',
    margin: 20,
  },
  button: {
    flex: 0,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  textFlip: {
	lineHeight: 70,
	// position: 'absolute',
	// left: 20,
  },
  textTakePicture: {
	backgroundColor: 'white',
	width: 70,
	height: 70,
	borderRadius: 70 / 2,
  },
  flashIcon: {
	lineHeight: 70,
  },
  imagePreview: {
	width: 75,
	height: 100,
	backgroundColor: 'red',
	position: 'absolute',
	top: 460,
	left: 10,
  },
})
