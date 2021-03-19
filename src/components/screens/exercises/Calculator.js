import React, { useState } from 'react';
import { Button, Dimensions, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Calculator() {

	const [result, setResult] = useState('0');
	const [operator, setOperator] = useState(null);
	const [memory, setMemory] = useState(null);
	const [equalDivError, setEqualDivError] = useState(false);

	const numberTapHandler = (number) => {
		if(result === '0') {
			setResult(`${number}`)
		} else {
			setResult(`${result}${number}`)
		}

		// if(number === '.') {
		// // if(!result.includes('.')) {
		// 	// setResult(result + '.');
		// 	setResult(`${result}.`)
		// 	// setResult((result).concat(',').toString());
		// // }
		// }
	}

	const operatorHandler = (op) => {
		if(op === '+') {
			setOperator('+');
			console.log(operator)
			setResult('0');
			if(operator !== null) {
				if(operator === '+') {
					setMemory(memory + parseFloat(result));
				}
				if(operator === '-') {
					setMemory(memory - parseFloat(result));
				}
				if(operator === '*') {
					setMemory(memory * parseFloat(result));
				}
				if(operator === '÷') {
					setMemory(memory / parseFloat(result));
				}
			} else {
				setMemory(parseFloat(result));
			}
		}
		if(op === '-') {
			setOperator('-');
			console.log(operator);
			setResult('0');
			if(operator !== null) {
				if(operator === '+') {
					setMemory(memory + parseFloat(result));
				}
				if(operator === '-') {
					setMemory(memory - parseFloat(result));
				}
				if(operator === '*') {
					setMemory(memory * parseFloat(result));
				}
				if(operator === '÷') {
					setMemory(memory / parseFloat(result));
				}
			} else {
				setMemory(parseFloat(result));
			}
		}
		if(op === '*') {
			setOperator('*');
			console.log(operator);
			setResult('0');
			if(operator !== null) {
				if(operator === '+') {
					// setMemory(memory + parseFloat(result));
					setMemory(parseFloat(result));
				}
				if(operator === '-') {
					setMemory(memory - parseFloat(result));
				}
				if(operator === '*') {
					setMemory(memory * parseFloat(result));
				}
				if(operator === '÷') {
					setMemory(memory / parseFloat(result));
				}
			} else {
				setMemory(parseFloat(result));
			}
		}
		if(op === '÷') {
			setOperator('÷');
			console.log(operator);
			setResult('0');
			if(operator !== null) {
				if(operator === '+') {
					setMemory(memory + parseFloat(result));
				}
				if(operator === '-') {
					setMemory(memory - parseFloat(result));
				}
				if(operator === '*') {
					setMemory(memory * parseFloat(result));
				}
				if(operator === '÷') {
					setMemory(memory / parseFloat(result));
				}
			} else {
				setMemory(parseFloat(result));
			}
		}
		if(op === '%') {
			setResult((parseFloat(result) / 100).toString());
			setMemory(null);
			setOperator(null);
		}
		if(op === '+/-') {
			setResult((parseFloat(result) * -1).toString());
		}
	}

	const equalHandler = () => {
		if(operator === '+') {
			setResult(memory + parseFloat(result));
			setOperator(null);
			setMemory(null);
		}
		if(operator === '-') {
			setResult(memory - parseFloat(result));
			setOperator(null);
			setMemory(null);
		}
		if(operator === '*') {
			setResult(memory * parseFloat(result));
			setOperator(null);
			setMemory(null);
		}
		if(operator === '÷') {
			if(result !== '0') {
				setResult(memory / parseFloat(result));
				setOperator(null);
				setMemory(null);
				setEqualDivError(false);
			}else{
				setResult('1')
				setEqualDivError(true)
				setOperator(null)
			}
		}
	}

	const ACHandler = () => {
		setEqualDivError(false),
		setResult('0'), 
		setMemory(null), 
		setOperator(null)
	}

	// const leftAction = () => {
	// 	setResult('0');
	// }

	return (
		<View style={styles.container}>
			<StatusBar barStyle='default' networkActivityIndicatorVisible={false} />
			{/* <Swipeable
				renderLeftActions={leftAction}
				// renderRightActions={() => console.log('right')}
			> */}
				<View 
					style={styles.resultInputContainer}
				>
					{/* <TextInput 
						onChangeText={res => setResult(res)}
						value={result}
						style={styles.resultInput}
						editable={false}
					/> */}
					<Text
						style={styles.resultInput}
					>
						{equalDivError
							? 'Error'
							: parseFloat(result).toLocaleString()
						}
						{/* {} */}
					</Text>
				</View>
			{/* </Swipeable> */}
			
			<View style={styles.firstRow}>
				{result === '0' ? (
					<TouchableOpacity 
						style={styles.buttonStyles}
						// onPress={() => setResult('0')}
					>
						<Text style={styles.textStyles}>AC</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity 
						style={styles.buttonStyles}
						onPress={() => ACHandler()}
					>
						<Text style={styles.textStyles}>C</Text>
					</TouchableOpacity>
				)}
				
				<TouchableOpacity 
					style={styles.buttonStyles}
					onPress={() => operatorHandler('+/-')}
				>
					<Text style={styles.textStyles}>+/-</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonStyles}
					onPress={() => operatorHandler('%')}	
				>
					<Text style={styles.textStyles}>%</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonCalculationStyles}
					onPress={() => operatorHandler('÷')}
				>
					<Text style={styles.textCalculationStyles}>÷</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.secondRow}>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('7')}
				>
					<Text style={styles.textDarkStyles }>7</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('8')}
				>
					<Text style={styles.textDarkStyles}>8</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('9')}
				>
					<Text style={styles.textDarkStyles}>9</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonCalculationStyles}
					onPress={() => operatorHandler('*')}
				>
					<Text style={styles.textCalculationStyles}>x</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.thirdRow}>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('4')}
				>
					<Text style={styles.textDarkStyles}>4</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('5')}
				>
					<Text style={styles.textDarkStyles}>5</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('6')}
				>
					<Text style={styles.textDarkStyles}>6</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonCalculationStyles}
					onPress={() => operatorHandler('-')}
				>
					<Text style={styles.textCalculationStyles}>-</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.fourthRow}>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('1')}
				>
					<Text style={styles.textDarkStyles}>1</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('2')}
				>
					<Text style={styles.textDarkStyles}>2</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('3')}
				>
					<Text style={styles.textDarkStyles}>3</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonCalculationStyles}
					onPress={() => operatorHandler('+')}
				>
					<Text style={styles.textCalculationStyles}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.fifthRow}>
				<TouchableOpacity 
					style={styles.buttonDoubleStyles}
					onPress={() => numberTapHandler('0')}
				>
					<Text style={styles.textDarkStyles}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonDarkStyles}
					onPress={() => numberTapHandler('.')}
				>
					<Text style={styles.textDarkStyles}>,</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonCalculationStyles}
					onPress={() => equalHandler()}
				>
					<Text style={styles.textCalculationStyles}>=</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

// Double text 
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: 'black', 
		paddingHorizontal: 15,
		justifyContent: 'center', 
		// alignItems: 'center'
	}, 
	resultInputContainer: {
		alignItems: 'flex-end',
		// backgroundColor: 'white',
	},	
	resultInput: {
		color: 'white',
		fontSize: 120,
		fontWeight: '200',
		marginBottom: 10,
	},
	firstRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	secondRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	thirdRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	fourthRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	fifthRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	buttonStyles: {
		width: 75,
		height: 75,
		borderRadius: 75/2,
		backgroundColor: '#D4D4D2',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 20,
	},
	buttonDarkStyles: {
		width: 75,
		height: 75,
		borderRadius: 75/2,
		backgroundColor: '#505050',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 20,
	},
	buttonDoubleStyles: {
		width: screen.width / 2 - 22.5,
		height: 75,
		borderRadius: (screen.width / 2 - 22.5) / 2,
		// flex: 0,
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 30,
		backgroundColor: '#505050',
		fontSize: 20,
	},	
	buttonCalculationStyles: {
		width: 75,
		height: 75,
		borderRadius: 75/2,
		backgroundColor: '#FF9500',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 20,
	},
	textStyles: {
		fontSize: 40
	},
	textDarkStyles: {
		fontSize: 40,
		color: 'white',
	},
	textCalculationStyles: {
		fontSize: 40,
		color: 'white'
	}
})
