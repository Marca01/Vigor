import React from 'react';
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 24
	}, 
	subContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontFamily: 'nunito-bold',
		fontSize: 18, 
	},
	paragraph: {
		marginVertical: 8,
		lineHeight: 2
	}
});