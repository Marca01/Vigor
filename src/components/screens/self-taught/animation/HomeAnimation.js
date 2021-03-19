import React, { useRef, useState } from 'react'
import { Animated, FlatList, Image, PanResponder, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import AnimationHeader from './AnimationHeader'
import Constant from 'expo-constants'

export default function HomeAnimation() {
	const [animatedImage, setAnimatedImage] = useState([
		{key: '1', uri: 'https://i.pinimg.com/564x/2e/6e/8d/2e6e8d39a9fc40305ff241ee7598bf23.jpg'},
		{key: '2', uri: 'https://i.pinimg.com/564x/2e/6e/8d/2e6e8d39a9fc40305ff241ee7598bf23.jpg'},
		{key: '3', uri: 'https://i.pinimg.com/564x/2e/6e/8d/2e6e8d39a9fc40305ff241ee7598bf23.jpg'},
		{key: '4', uri: 'https://i.pinimg.com/564x/2e/6e/8d/2e6e8d39a9fc40305ff241ee7598bf23.jpg'},
		{key: '5', uri: 'https://i.pinimg.com/564x/2e/6e/8d/2e6e8d39a9fc40305ff241ee7598bf23.jpg'},
	])

	const [indexCounter, setIndexCounter] = useState(0)

	const scrollY = useRef(new Animated.Value(0)).current

	const diffClamp = Animated.diffClamp(scrollY, 0, 65)

	const translateY = diffClamp.interpolate({
		inputRange: [0, 65],
		outputRange: [0, -65],
	})

	const antiTranslateY = scrollY.interpolate({
		inputRange: [65, 100],
		outputRange: [0, 0]
	})

	const position = useRef(new Animated.ValueXY()).current

	const pan = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			// onPanResponderGrant: () => {
			// 	position.setOffset({
			// 			x: position.x._value,
			// 			y: position.y._value
			// 		});
			// 	},
			onPanResponderMove: Animated.event([
				null, 
				{dx: position.x, dy: position.y}
			]),
			onPanResponderRelease: (e, gesture) => {
				if(gesture.dx > SWIPE_THESHOLD) {
					animatedSwipe('right')
				} else if(gesture.dx < -SWIPE_THESHOLD) {
					animatedSwipe('left')
				} else {
					Animated.spring(position, {
						toValue: {x: 0, y: 0},
						useNativeDriver: true
					}).start()
				}
				// position.flattenOffset()
			}
		})
	).current

	const SCREEN_WIDTH = Dimensions.get('screen').width
	const SWIPE_THESHOLD = SCREEN_WIDTH / 2

	const animatedSwipe = (direction) => {
		const x = direction === 'right' ? SCREEN_WIDTH + 100 : -SCREEN_WIDTH - 100
		Animated.spring(position, {
			toValue: {x: x, y:0},
			useNativeDriver: true,
		}).start(() => {
			position.setValue({x:0, y:0})
			setIndexCounter(prevState => {
				return prevState + 1
			})
		})
	}

	const animatedRotate = position.x.interpolate({
		inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
		outputRange: ['-45deg', '0deg', '45deg']
	})

	return (
		<>
		 <View style={{backgroundColor: 'white', height: Constant.statusBarHeight, zIndex: 100}}>
			<StatusBar barStyle='dark-content' backgroundColor='white' />
		 </View> 
		 <View style={{flex: 1,}}>
			<Animated.View
				style={{
					backgroundColor: 'red',
					transform: [
						// {translateY: antiTranslateY},
						{translateY: translateY},
					],
					zIndex: 50,
				}}
			>
				<AnimationHeader />
			</Animated.View>
			{/* <ScrollView 
				contentContainerStyle={{flex: 1}}
				onScroll={(e) => {
					scrollY.setValue(e.nativeEvent.contentOffset.y)
				}}
				scrollEventThrottle={16}
			> */}
			<FlatList 
				data={animatedImage}
				renderItem={({item, index}) => {
					if(index < indexCounter) {
						return null
					} else if(index == indexCounter) {
						return (
							<Animated.View
								style={{
									transform: [
										{translateX: position.x},
										{rotate: animatedRotate}
									]
								}}
								{...pan.panHandlers}
							>
								<View style={styles.container}>
									{/* <Text style={{fontSize: 74}}>Home animation</Text>
									<Text style={{fontSize: 74}}>Home animation</Text>
									<Text style={{fontSize: 74}}>Home animation</Text>
									<Text style={{fontSize: 74}}>Home animation</Text> */}
									<Image 
										source={{uri: item.uri}}
										resizeMode= 'cover'
										style={{
											width: '100%',
											height: 300,
											marginBottom: 50,
											marginTop: -150
										}}
									/>
								</View>
							</Animated.View>
						)
					} else {
						return (
							<View>
								<Image 
									source={{uri: item.uri}}
									resizeMode= 'cover'
									style={{
										width: '100%',
										height: 300,
										marginBottom: 50
									}}
								/>
							</View>
						)
					}
				}}
			/>
			{/* </ScrollView> */}
		 </View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 300
		// backgroundColor: 'red'
	}
})
