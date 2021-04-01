import React from 'react'
import { StatusBar, StyleSheet } from "react-native"
import COLOR from '../constants/color'

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 24
		backgroundColor: COLOR.background
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
	},

	// =================================================================
	// Header.jsx
	header: {
		flex: 0.1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'red',
		marginTop: StatusBar.currentHeight || 20,
		// marginTop: 25
		paddingHorizontal: 10
	},		
	header__logo: {
		width: 120,
		height: '100%',
		// backgroundColor: 'blue'
	},	
	header__user: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'yellow',
		width: 90
	},

	// =================================================================
	// Home.jsx
	home__userMoods: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		marginTop: 20,
	},
	home__userMoods__mood: {
		width: 60,
		height: 60,
		borderRadius: 60 / 2,
		borderWidth: 2.5,
		borderStyle: 'solid',
		borderColor: COLOR.main,
		justifyContent: 'center',
		alignItems: 'center',
	},
	home__userMoods__moodLinearBg: {
		width: 48,
		height: 48,
		borderRadius: 48 / 2,
		justifyContent: 'center',
		alignItems: 'center',
	},	
	home__userMoods__moodIcon: {
		width: 24,
		height: 24,
	},
	posts: {
		flex: 1,
		// backgroundColor: COLOR.white,
		// marginTop: 30,
		// borderTopLeftRadius: 60, 
		// borderTopRightRadius: 60, 
	},
	postDiv: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: COLOR.white,
		marginTop: 30,
		borderTopLeftRadius: 60, 
		borderTopRightRadius: 60, 
		paddingTop: 80,
	},
	post: {
		// backgroundColor: 'red',
		
	},
	post__contentType: {

	},
	post__contentType__image: {
		width: '100%',
		height: 370,
		borderRadius: 15
	},
	post__contentTitle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	post__contentTitleDiv: {
		width: '80%',
	},
	post__contentTitle_title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	post__stats: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	post__stats_like: {
		color: COLOR.gray,
		fontSize: 16,
		fontWeight: '500',
		marginRight: 30
	},
	post__stats_comment: {
		color: COLOR.gray,
		fontSize: 16,
		fontWeight: '500',
	},
	post__user: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30,
	},
	post__userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	post__userInfo_avatar: {
		marginRight: 8
	},
	post__userInfo_createdAt: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	post__userInfo_name: {
		fontSize: 16,
		fontWeight: '600',
		marginRight: 5,
	},
	post__userInfo_dotSeparator: {
		color: COLOR.gray,
		marginRight: 5,
		paddingBottom: 7
	},
	post__userInfo_time: {
		color: COLOR.gray,
		fontSize: 12,
	},

	// ================================
	// new post button - HomeNavigation.js
	newPostBtn_rout: {
		width: 55,
		height: 55,
		borderRadius: 55 / 2,
		borderWidth: 1,
		borderColor: '#ffece3',
		backgroundColor: COLOR.white,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20
	},
	newPostBtn_rin: {
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		backgroundColor: COLOR.main,
		justifyContent: 'center',
		alignItems: 'center',
	},
});