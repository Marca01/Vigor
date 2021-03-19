import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function PlantDetail({navigation}) {

	const RequirementsBar = ({icon, barPercentage}) => {
		return (
			<View style={{height: 60,}}>
				<View
					style={{
						width: 50,
						height: 50,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 10,
						borderWidth: 1,
						borderColor: '#BEC1D2'
					}}
				>
					<Image 
						source={{uri: icon}}
						resizeMode='cover'
						style={{
							tintColor: '#606d87',
							width: 30,
							height: 30,
						}}
					/>
				</View>

				<View
					style={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						width: '100%',
						height: 3,
						marginTop: 8,
						backgroundColor: '#BEC1D2',
						borderRadius: 50, 
					}}
				>

				</View>

				<View
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						width: barPercentage,
						height: 3,
						marginTop: 8,
						backgroundColor: '#00996D',
						borderRadius: 50, 
					}}
				>

				</View>
			</View>
		)
	}

	const RequirementDetail = ({icon, label, detail}) => {
		return (
			<View style={{flexDirection: 'row'}}>
				<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
					<Image 
						source={{uri: icon}}
						resizeMode='cover'
						style={{
							tintColor: '#606d87',
							width: 20,
							height: 20,
						}}
					/>

					<Text 
						style={{
							marginLeft: 8,
							color: '#606d87', 
							fontFamily: 'nunito-bold', 
							fontSize: 20, 
							lineHeight: 30
						}}
					>
						{label}
					</Text>
				</View>
				<View style={{flex: 1, alignItems: 'flex-end'}}>
					<Text
						style={{
							marginLeft: 8,
							color: '#BEC1D2', 
							fontFamily: 'nunito-bold', 
							fontSize: 18, 
							lineHeight: 30
						}}
					>
						{detail}
					</Text>
				</View>
			</View>
		)
	}

	function RenderRequirementsBar() {
		return (
			<View
				style={{
					flexDirection: 'row',
					marginTop: 24,
					paddingHorizontal: 24,
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<RequirementsBar 
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/sun.png?raw=true'}
					barPercentage='50%'
				/>
				<RequirementsBar 
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/drop.png?raw=true'}
					barPercentage='70%'
				/>
				<RequirementsBar 
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/temperature.png?raw=true'}
					barPercentage='45%'
				/>
				<RequirementsBar 
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/garden.png?raw=true'}
					barPercentage='67%'
				/>
				<RequirementsBar 
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/seed.png?raw=true'}
					barPercentage='23%'
				/>
			</View>
		)
	}

	function RenderRequirements() {
		return (
			<View
				style={{
					flex: 1,
					marginTop: 24, 
					paddingHorizontal: 24, 
					justifyContent: 'space-between',
				}}
			>
				<RequirementDetail
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/sun.png?raw=true'}
					label='Sunlight'
					detail='15°C'
				/>
				<RequirementDetail
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/drop.png?raw=true'}
					label='Water'
					detail='250 ML Daily'
				/>
				<RequirementDetail
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/temperature.png?raw=true'}
					label='Room Temp'
					detail='25°C'
				/>
				<RequirementDetail
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/garden.png?raw=true'}
					label='Soil'
					detail='3 Kg'
				/>
				<RequirementDetail
					icon={'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/seed.png?raw=true'}
					label='Fertilizer'
					detail='150 Mg'
				/>
			</View>
		)
	}

	function RenderFooter() {
		return (
			<View style={{flex: 1, flexDirection: 'row', paddingTop: 24,}}>
				<TouchableOpacity
					style ={{
						// width: '50%',
						flex: 1,
						flexDirection: 'row', 
						paddingHorizontal: 24,
						alignItems: 'center',
						justifyContent: 'center',
						borderTopRightRadius: 30,
						borderBottomRightRadius: 30,
						backgroundColor: '#00996D'
					}}
				>	
					<Text
						style ={{
							color: 'white', 
							fontFamily: 'nunito-bold', 
							fontSize: 22, 
							lineHeight: 30,
						}}
					>
						Take Action
					</Text>

					<Image 
						source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/chevron.png?raw=true'}}
						resizeMode='contain'
						style={{
							marginLeft: 24,
							width: 20,
							height: 20,
						}}
					/>
				</TouchableOpacity>	

				<View
					style ={{
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						paddingHorizontal: 24,
					}}
				>
					<Text 
						style ={{
							flex: 1,
							color: '#606d87',
							fontFamily: 'nunito-bold', 
							fontSize: 16, 
							lineHeight: 22,
						}}
					>
						Almost 2 weeks of growing time
					</Text>

					<Image 
						source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/down-arrow.png?raw=true'}}
						resizeMode='contain'
						style={{
							tintColor: '#606d87',
							marginLeft: 8,
							width: 20,
							height: 20,
						}}
					/>
				</View>
			</View>
		)
	}

	function RenderHeader() {
		return (
			<View
				style={{
					position: 'absolute',
					top: 30, 
					left: 24, 
					right: 24,
				}}
			>
				<View style={{flexDirection: 'row'}}>
					<View>
						<TouchableOpacity
							style={{
								width: 40, 
								height: 40,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 40 / 2,
								backgroundColor: 'rgba(255,255,255,0.5)',
							}}
							onPress={() => navigation.goBack()}
						>
							<Image 
								source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/back.png?raw=true'}}
								resizeMode='contain'
								style={{
									width: 20,
									height: 20,
								}}
							/>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						style={{
							flex: 1,
							alignItems: 'flex-end', 
							justifyContent: 'center'
						}}
						onPress={() => console.log('Focused')}
					>
						<Image 
							source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/focus.png?raw=true'}}
							resizeMode='contain'
							style={{
								width: 25,
								height: 25
							}}
						/>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: 'row',
						marginTop: '5%',
					}}
				>
					<View style={{flex: 1}}>
						<Text
							style ={{
								color: 'white', 
								fontFamily: 'nunito-bold', 
								fontSize: 50,
								lineHeight: 55
							}}
						>
							Glory Mantas
						</Text>
					</View>
					<View style={{flex: 1,}}></View>
				</View>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<View style={{height: '35%'}}>
				<Image 
					source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/images/banner_bg.jpg?raw=true'}}
					resizeMode='cover'
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</View>
			
			<View 
				style={{
					flex: 1,
					marginTop: -40,
					backgroundColor: '#eff2f5',
					borderTopLeftRadius: 40,
					borderTopRightRadius: 40,
					paddingVertical: 24
				}}
			>
				<Text
					style={{
						paddingHorizontal: 24,
						color: '#606d87', 
						fontFamily: 'nunito-bold', fontSize: 30, lineHeight: 36,
					}}
				>
					Requirements
				</Text>

				{RenderRequirementsBar()}

				{RenderRequirements()}

				{RenderFooter()}

			</View>

			{RenderHeader()}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
