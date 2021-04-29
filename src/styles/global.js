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
	},

	// =================================
	// Playlist.jsx
	playlistTitle: {
		marginTop: 30,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	playlistTitle__backIcon: {
		marginRight: 10,
	},
	playlists: {
		paddingHorizontal: 20,
		flex: 1,
		marginTop: 10,
	},
	playlists__createBtn: {
		backgroundColor: COLOR.main,
		borderRadius: 50,
		paddingHorizontal: 25,
		paddingVertical: 10,
		alignSelf: 'flex-start',
		marginTop: 30,
		marginBottom: 30,
	},
	playlists__createBtn_text: {
		color: COLOR.white,
		fontSize: 20,
		fontWeight: '500',
	},
	playlists__playlist: {

	},
	playlists__list: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	playlists__list_content: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	playlists__list_thumb: {
		width: 80,
		height: 80,
		borderRadius: 15,
		marginRight: 20,
	},
	playlists__list_info: {

	},
	playlists__list_info_title: {
		fontSize: 22,
		fontWeight: '600',
		marginBottom: 5,
	},
	playlists__list_info_user: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	playlists__list_info_creator: {
		color: COLOR.gray, 
		fontWeight: '500',
		marginRight: 5,
	},

	// =================================
	// PlaylistDetail.jsx
	playlistDetail__backBtn: {
		marginTop: 30,
		paddingHorizontal: 20,
		// backgroundColor: 'red'
	},
	playlistDetail__content: {
		marginTop: 10,
	},
	playlistDetail: {
		marginTop: 10,
		paddingHorizontal: 20,
	},
	playlistDetail__intro: {
		marginBottom: 25,
	},
	playlistDetail__info: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	playlistDetail__thumb: {
		width: 130,
		height: 130,
		borderRadius: 20,
		marginRight: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.00,
		// elevation: 24,
	},
	playlistDetail__general: {
		flex: 1,
	},
	playlistDetail__general_info: {

	},
	playlistDetail__general_stats: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	playlistDetail__general_stats_quantityNumber: {
		color: COLOR.gray,
		fontSize: 14,
		fontWeight: '500',
		marginBottom: 2,
	},
	playlistDetail__general_title: {
		fontSize: 38,
		fontWeight: '800',
		marginBottom: 5,
		width: '100%',
	},
	playlistDetail__general_creator: {
		color: COLOR.gray,
		fontSize: 18,
		fontWeight: '500',
		marginBottom: 15,
	},
	playlistDetail__general_options: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	playlistDetail__general_optionsImg: {
		width: 24,
		height: 24,
		marginRight: '10%',
	},
	playlistDetail__btn: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 40,
	},
	playlistDetail__playBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLOR.main,
		flex: 0.7,
		paddingVertical: 10,
		borderRadius: 50,
	},
	playlistDetail__playBtn_label: {
		color: COLOR.white,
		fontSize: 18,
		fontWeight: '700',
		marginLeft: 8,
	},
	playlistDetail__detail: {

	},
	playlistDetail__list: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	playlistDetail__list_content: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	playlistDetail__list_thumb: {
		width: 80,
		height: 80,
		borderRadius: 15,
		marginRight: 20,
	},
	playlistDetail__list_info: {
		flex: 0.9,
	},
	playlistDetail__list_info_title: {
		fontSize: 22,
		fontWeight: '600',
		marginBottom: 5,
	},
	playlistDetail__list_info_user: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	playlistDetail__list_info_creator: {
		color: COLOR.gray, 
		fontWeight: '500',
		marginRight: 5,
	},
});