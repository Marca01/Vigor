import React from 'react'
import { StatusBar, StyleSheet } from "react-native"
import COLOR from '../constants/color'

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 24
		backgroundColor: COLOR.white
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
	headerDiv: {
		flex: 0.4,
		backgroundColor: COLOR.background,
		paddingBottom: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		marginBottom: 30,
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: StatusBar.currentHeight || 20,
		// marginTop: 25
		paddingHorizontal: 20
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
		paddingHorizontal: 20,
		marginTop: 20,
	},
	home__userMoods__mood: {
		width: 56,
		height: 56,
		borderRadius: 56 / 2,
		borderWidth: 2.5,
		borderStyle: 'solid',
		borderColor: COLOR.main,
		justifyContent: 'center',
		alignItems: 'center',
	},
	home__userMoods__moodLinearBg: {
		width: 44,
		height: 44,
		borderRadius: 44 / 2,
		justifyContent: 'center',
		alignItems: 'center',
	},	
	home__userMoods__moodIcon: {
		width: 24,
		height: 24,
	},
	posts: {
		flex: 1,
	},
	postDiv: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: COLOR.white,
	},
	post: {
		flex: 1,
		// backgroundColor: 'red',
		marginTop: 12,
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

	// ===============================================================
	// new post button - HomeNavigation.js
	newPostBtn_rout: {
		width: 56,
		height: 56,
		borderRadius: 56 / 2,
		// borderWidth: 1,
		// borderColor: '#ffece3',
		backgroundColor: COLOR.white,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		shadowColor: COLOR.gray,
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.43,
		shadowRadius: 9.51,

		// elevation: 15,
	},
	newPostBtn_rin: {
		width: 44,
		height: 44,
		borderRadius: 44 / 2,
		backgroundColor: COLOR.main,
		justifyContent: 'center',
		alignItems: 'center',
	},

	// ========================================================================
	// Notification.jsx
	notiTitle: {
		marginTop: 30,
		paddingHorizontal: 20,
		// backgroundColor: 'red'
	},
	notiToday: {
		paddingHorizontal: 20,
		marginTop: 10,
		flex: 1,
		// backgroundColor: 'red'
	},
	notiDiv: {
		// backgroundColor: 'blue'
	},
	notiToday_labels: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 25,
	},
	notiToday_labelToday: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	notiToday_labelClear: {
		fontSize: 16,
		fontWeight: '500'
	},
	notiToday_notifications: {
		// marginTop: 20,
	},
	notiToday_notiDetail: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 15,
		// backgroundColor: 'blue'
	},
	notiToday_notiInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		// backgroundColor: 'blue',
		width: '65%',
	},
	notiToday_notiInfo_avatar: {
		width: 42,
		height: 42,
		borderRadius: 42 / 2,
		marginRight: 12,
	},
	notiToday_notiInfo_text: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		// backgroundColor: 'red'
	},
	notiToday_notiInfo_username: {
		fontWeight: 'bold'
	},
	notiToday_notiInfo_content: {
		fontWeight: '400'
	},
	notiDetail_actionBtn: {
		backgroundColor: COLOR.main,
		borderRadius: 15,
		paddingHorizontal: 15,
		paddingVertical: 7,
		width: 100,
		alignItems: 'center',
	},
	notiDetail_actionBtn_text: {
		color: COLOR.white,
		fontSize: 16,
		fontWeight: '600'
	},

	// =================================================================
	// Library.jsx
	libTitle: {
		marginTop: 30,
		paddingHorizontal: 20,
	},
	libComponents: {
		marginTop: 50,
		paddingHorizontal: 20,
		paddingBottom: 30,
		flexDirection: 'row',
		flex: 1,
		// backgroundColor: 'blue',
		marginTop: 10,
	},
	libComponents__left: {
		flex: 1,
		justifyContent: 'space-around',
	},
	libComponents__right: {
		flex: 1,
		justifyContent: 'space-around',
	},
	libComponents__library: {
		backgroundColor: COLOR.background,
		padding: 12,
		borderRadius: 15,
	},
	libComponents__label: {
		fontSize: 30,
		fontWeight: '600',
		marginTop: 20,
	},
	libComponents__gap: {
		flex: 0.15
	}
});