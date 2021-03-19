import React, { useRef, useState } from 'react'
import { View, Text, Animated, TouchableOpacity, PanResponder, StyleSheet, Dimensions } from 'react-native'

const screen = Dimensions.get('screen');

export default function STAnimation() {

	// const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0]
	// const rightValue = useState(new Animated.Value(0))[0]

	// const value = useRef(new Animated.ValueXY({x: 0, y: 0})).current
	const rightValue = useRef(new Animated.Value(0)).current

	// const 

	const moveBall = () => {
		Animated.timing(rightValue, {
			// toValue: {x: 200, y: 110},
			toValue: 100,
			duration: 2000, //timing
			// speed: 12, // spring 12
			// bounciness: 1, // spring 8
			// friction: 1, // spring 7
			// tension: 40, // spring 40
			// delay: 5000,
			useNativeDriver: true
		}).start()
	}

	const moveBackBall = () => {
		Animated.timing(rightValue, {
			toValue: 0,
			duration: 2000,
			useNativeDriver: true
		}).start()
	}

	const pan = useRef(new Animated.ValueXY()).current;

	const dots = useRef(new Animated.ValueXY()).current;

	const [isStopped, setIsStopped] = useState(false);


	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				pan.setOffset({
					x: pan.x._value,
					y: pan.y._value
				});
				dots.setOffset({
					x: dots.x._value,
					y: dots.y._value
				})
			},
			// onPanResponderMove: Animated.event(
			// 	[
			// 		null,
			// 		{ dx: pan.x, dy: pan.y }
			// 	],
			// 	// {useNativeDriver: true},
			// ),
			onPanResponderMove: (e, gestureState) => {
				pan.x.setValue(gestureState.dx);
				pan.y.setValue(gestureState.dy);

				dots.x.setValue(gestureState.dx);
				dots.y.setValue(gestureState.dy);

				setIsStopped(false);
			},
			onPanResponderRelease: () => {
				pan.flattenOffset();
				setIsStopped(true);
			}
		})
	).current;

	const rotateX = pan.x.interpolate({
		inputRange: [0, 50, 100],
		outputRange: ['yellow', 'gainsboro', 'green']
	})

	const rotate = pan.y.interpolate({
		inputRange: [0, 50, 100, 150],
		// outputRange: ['0deg', '360deg'],
		outputRange: [1, 0.5, 0, 1]
	})

	return (
		// <View>
		// 	<View>
		// 		<Animated.View
		// 			style={{
		// 				width: 100,
		// 				height: 100,
		// 				// opacity: rightValue,
		// 				transform: [
		// 					{translateX: rightValue},
		// 					{perspective: 1000} // Without this line this Animation wil not render on Android while working fine on IOS
		// 				],
		// 				borderRadius: 100 / 2,
		// 				backgroundColor: 'red',
		// 			}}	
		// 		></Animated.View>
		// 		<TouchableOpacity onPress={moveBall}>
		// 			<Text>Click me!</Text>
		// 		</TouchableOpacity>
		// 		<TouchableOpacity onPress={moveBackBall}>
		// 			<Text>Click me back!</Text>
		// 		</TouchableOpacity>
		// 	</View>
		// </View>



		// ================================================================

		<View style={styles.container}>
			<Text style={styles.titleText}>Drag this box!</Text>
			<Animated.View
				style={{
					transform: [
						{ translateX: pan.x }, 
						{ translateY: pan.y },
						{ rotate: rotate },
					],
					opacity: rotate,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: 'aqua',
					width: 150,
					height: 150,
					position: 'absolute',
					zIndex: 10,
					backgroundColor: rotateX,
				}}
				{...panResponder.panHandlers}
			>
				<View style={styles.box}>
					
				</View>
				<View style={{backgroundColor: 'red', position: 'absolute',}}>
					{/* {isStopped && <Text style={{color: 'white', fontSize: 30,}}>a</Text>} */}
					{/* {isStopped &&  */}
					<View style={{color: 'red',}}>
						<Text>
							{[dots.x._value + ',' + dots.y._value]}
						</Text>
					</View>
				</View>
				{/* <View>
				{!isStopped && 
					<View style={{backgroundColor: 'red', width: 30, height: 30, borderRadius: 30/2}}>

					</View>
				}
			</View> */}
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
	backgroundColor: 'black',
	width: screen.width,
	height: screen.height,
	overflow: 'hidden'
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
	color: 'white'
  },
  box: {
    height: 150,
    width: 150,
    // backgroundColor: "white",
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: "white",
    borderRadius: 5, 
	justifyContent: "center",
	alignItems: "center",
	position: 'absolute',
	zIndex: 10
  }
});