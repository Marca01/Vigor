import React, { useEffect, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import * as Progress from 'react-native-progress'

export default function SplashScreen({navigation}) {

	const [progressBar, setProgressBar] = useState(0)

	// const useInterval = (callback, delay) => {
	// 	const savedCallback = useRef()
	// 	useEffect(() => {
	// 		savedCallback.current = callback
	// 	}, [callback])
	// 	useEffect(() => {
	// 		function tick() {
	// 			savedCallback.current()
	// 		}
	// 			if (delay !== null) {
	// 			let id = setInterval(tick, delay)
	// 			return () => clearInterval(id)
	// 		}
	// 	}, [delay]);
	// }

	//  useInterval(() => {
	// 	if(progressBar < 1) {
	// 		setProgressBar(progressBar + 0.1)
	// 		console.log(progressBar)
	// 	} else {
	// 		// setTimeout(() => {
	// 			navigation.navigate('Home')
	// 		// }, 5000)
	// 	}
	// }, 500)

	useEffect(() => {
		if(progressBar < 1) {
			let progress = setInterval(async () => {
				await setProgressBar(progressBar + 0.1)
				console.log(progressBar)
			}, 500)
			return () => clearInterval(progress)
		} else {
			navigation.navigate('Home')
		}
	}, [progressBar])

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<Text>Splash screen</Text>
			<Progress.Bar 
				progress={progressBar} 
				width={250} 
				height={20}
				borderRadius={15}
				useNativeDriver
			/>
		</View>
	)
}
