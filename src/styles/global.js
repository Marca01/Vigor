import React from "react";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import COLOR from "../constants/color";

let height = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24
    backgroundColor: COLOR.white,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 2,
  },
  viewMoreText: {
    color: COLOR.gray,
  },

  bottomSheet: {},
  bottomSheetHeader: {
    backgroundColor: "transparent",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetHeader__panel: {
    alignItems: "center",
  },
  bottomSheetHeader__panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLOR.sheetHandle,
    marginBottom: 10,
  },
  bottomSheetContent: {
    backgroundColor: COLOR.default,
    padding: 16,
    height: 750,
    // flex: 1,
  },
  bottomSheetContent__btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.main,
    // flex: 0.7,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  bottomSheetContent__label: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },

  bottomSheetContent__newPlaylistBtn: {
    backgroundColor: COLOR.main,
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "65%",
    alignSelf: "center",
    marginTop: 10,
  },
  bottomSheetContent__newPlaylistBtn_label: {
    color: COLOR.white,
    fontSize: 20,
    fontWeight: "500",
  },
  bottomSheetContent__playlists: {
    marginTop: 30,
    flex: 1,
  },

  noAssetText: {
    color: COLOR.gray,
    fontSize: 30,
    fontWeight: "bold",
  },

  noPostsText: {
    color: COLOR.gray,
    fontSize: 40,
    fontWeight: "bold",
  },

  // =================================================================
  // Login.jsx
  image_1: {
    width: "100%",
    position: "absolute",
    top: -20,
    left: 0,
    zIndex: -1,
  },
  image_1_signup: {
    width: "100%",
    position: "absolute",
    top: -70,
    left: 0,
    zIndex: -1,
  },
  image_2: {
    width: "100%",
    position: "absolute",
    bottom: -100,
    left: 0,
    zIndex: -1,
  },
  image_2_signup: {
    width: "100%",
    position: "absolute",
    bottom: -150,
    left: 0,
    zIndex: -1,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    flex: 1,
    width: "100%",
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: "70%",
    height: 46,
    paddingLeft: 20,
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 12,
  },
  button: {
    width: "70%",
    height: 46,
    marginVertical: 10,
    marginHorizontal: "auto",
    backgroundColor: "rgba(255, 159, 103, 0.4)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button__title: {
    marginVertical: "auto",
    color: "#FF9F67",
    fontSize: 16,
    fontWeight: "bold",
  },

  // =================================================================
  // Signup.jsx

  // =================================================================
  // Header.jsx
  headerDiv: {
    flex: 0.2,
    backgroundColor: COLOR.background,
    // paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // marginBottom: 30,
    zIndex: 1000,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 20,
    // marginTop: 25
    paddingHorizontal: 20,
    height: 50,
  },
  header__logo: {
    width: 120,
    height: "100%",
    // backgroundColor: 'blue'
  },
  header__user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: 'yellow',
    width: 90,
  },

  // =================================================================
  // Home.jsx
  home__userMoods: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  home__userMoods__mood: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    borderWidth: 2.5,
    borderStyle: "solid",
    borderColor: COLOR.main,
    justifyContent: "center",
    alignItems: "center",
  },
  home__userMoods__moodLinearBg: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    justifyContent: "center",
    alignItems: "center",
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
  post__contentType: {},
  post__contentType__image: {
    width: "100%",
    height: 370,
    borderRadius: 15,
  },
  post__contentType__audio: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 80,
    backgroundColor: "#FFECE3",
    borderRadius: 20,
  },
  post__contentType__audio_playIcon: {
    backgroundColor: "#ff9f67",
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  post__contentType__audio_waveform: {
    flexDirection: "row",
  },
  post__contentType__audio_waveform_img: {
    width: 55,
    height: 50,
  },
  post__contentTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  post__contentTitleDiv: {
    flex: 0.9,
  },
  post__contentTitle_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  post__stats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  post__stats_like: {
    color: COLOR.gray,
    fontSize: 16,
    fontWeight: "500",
    marginRight: 30,
  },
  post__stats_comment: {
    color: COLOR.gray,
    fontSize: 16,
    fontWeight: "500",
  },
  post__user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  post__userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  post__userInfo_avatar: {
    marginRight: 8,
  },
  post__userInfo_createdAt: {
    flexDirection: "row",
    alignItems: "center",
  },
  post__userInfo_name: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 5,
  },
  post__userInfo_dotSeparator: {
    color: COLOR.gray,
    marginRight: 5,
    paddingBottom: 7,
  },
  post__userInfo_time: {
    color: COLOR.gray,
    fontSize: 12,
  },

  // ========================================================================
  // Notification.jsx
  notiTitle: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  notiToday_labelToday: {
    fontSize: 22,
    fontWeight: "bold",
  },
  notiToday_labelClear: {
    fontSize: 16,
    fontWeight: "500",
  },
  notiToday_notifications: {
    // marginTop: 20,
  },
  notiToday_notiDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    // backgroundColor: 'blue'
  },
  notiToday_notiInfo: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: 'blue',
    width: "65%",
  },
  notiToday_notiInfo_avatar: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    marginRight: 12,
  },
  notiToday_notiInfo_text: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    // backgroundColor: 'red'
  },
  notiToday_notiInfo_username: {
    fontWeight: "bold",
  },
  notiToday_notiInfo_content: {
    fontWeight: "400",
  },
  notiDetail_actionBtn: {
    backgroundColor: COLOR.main,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 7,
    width: 100,
    alignItems: "center",
  },
  notiDetail_actionBtn_text: {
    color: COLOR.white,
    fontSize: 16,
    fontWeight: "600",
  },

  // =================================================================
  // Library.jsx
  libTitle: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  libComponents: {
    marginTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexDirection: "row",
    flex: 1,
    // backgroundColor: 'blue',
    marginTop: 10,
  },
  libComponents__left: {
    flex: 1,
    justifyContent: "space-around",
  },
  libComponents__right: {
    flex: 1,
    justifyContent: "space-around",
  },
  libComponents__library: {
    backgroundColor: COLOR.background,
    padding: 12,
    borderRadius: 15,
  },
  libComponents__label: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 20,
  },
  libComponents__gap: {
    flex: 0.15,
  },

  // =================================
  // Playlist.jsx
  playlistTitle: {
    marginTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  playlistTitle__backIcon: {
    marginRight: 8,
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
    alignSelf: "flex-start",
    marginTop: 30,
    marginBottom: 30,
  },
  playlists__createBtn_text: {
    color: COLOR.white,
    fontSize: 20,
    fontWeight: "500",
  },
  playlists__playlist: {},
  playlists__list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  playlists__list_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  playlists__list_thumb: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 20,
  },
  playlists__list_info: {
    flex: 1,
  },
  playlists__list_info_title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
  },
  playlists__list_info_creator: {
    color: COLOR.gray,
    fontWeight: "500",
    marginRight: 5,
  },
  // ======
  // Modal
  createPlaylist__header: {
    marginTop: 42,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  createPlaylist__body: {
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 20,
    flex: 1,
  },
  createPlaylist__body_title: {
    marginBottom: 30,
  },
  createPlaylist__body_title_text: {
    fontSize: 23,
    fontWeight: "500",
  },
  createPlaylist__body_input: {
    backgroundColor: COLOR.white,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 110,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.inputBackground,
  },
  createPlaylist__body_nameInput: {
    color: COLOR.grey,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    paddingVertical: 10,
  },
  createPlaylist__body_createBtn: {
    backgroundColor: COLOR.main,
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  createPlaylist__body_createBtn_disabled: {
    backgroundColor: COLOR.gray,
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  createPlaylist__body_createBtn_label: {
    color: COLOR.white,
    fontSize: 20,
    fontWeight: "500",
  },

  // =================================
  // PlaylistDetail.jsx
  playlistDetail__backBtn: {
    marginTop: 30,
    paddingHorizontal: 10,
    // backgroundColor: 'red'
  },
  playlistDetail__content: {
    marginTop: 10,
    flex: 1,
  },
  playlistDetail: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  playlistDetail__intro: {
    marginBottom: 25,
  },
  playlistDetail__info: {
    flexDirection: "row",
    alignItems: "center",
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
    shadowRadius: 16.0,
    // elevation: 24,
  },
  playlistDetail__general: {
    flex: 1,
  },
  playlistDetail__general_info: {},
  playlistDetail__general_stats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playlistDetail__general_stats_quantityNumber: {
    color: COLOR.gray,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 2,
  },
  playlistDetail__general_title: {
    fontSize: 38,
    fontWeight: "800",
    marginBottom: 5,
    width: "100%",
  },
  playlistDetail__general_creator: {
    color: COLOR.gray,
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },
  playlistDetail__general_options: {
    flexDirection: "row",
    alignItems: "center",
  },
  playlistDetail__general_optionsImg: {
    width: 24,
    height: 24,
    marginRight: "10%",
  },
  playlistDetail__btn: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  playlistDetail__playBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.main,
    flex: 0.7,
    paddingVertical: 10,
    borderRadius: 50,
  },
  playlistDetail__playBtn_label: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },
  playlistDetail__detail: {},
  playlistDetail__list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  playlistDetail__list_content: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "600",
    marginBottom: 5,
  },
  playlistDetail__list_info_user: {
    flexDirection: "row",
    alignItems: "center",
  },
  playlistDetail__list_info_creator: {
    color: COLOR.gray,
    fontWeight: "500",
    marginRight: 5,
  },
  playlistDetail__emptyPlaylist: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  playlistDetail__emptyPlaylist_label: {
    color: COLOR.gray,
    fontSize: 45,
    fontWeight: "700",
  },

  // =================================
  // Artist.jsx
  artistTitle: {
    marginTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  artistTitle__backIcon: {
    marginRight: 8,
  },
  artists: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 10,
  },
  artists__search: {
    backgroundColor: COLOR.inputBackground,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 30,
  },
  artists__searchInput: {
    color: COLOR.grey,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    paddingVertical: 10,
  },
  artists__artist: {},
  artists__list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  artists__list_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  artists__list_avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginRight: 20,
  },
  artists__list_info: {
    flex: 1,
  },
  artists__list_info_name: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
  },
  artists__list_info_followersNumber: {
    color: COLOR.gray,
    fontWeight: "500",
  },
  followersList: {
    backgroundColor: COLOR.white,
    paddingHorizontal: 20,
    flex: 1,
    paddingTop: 30,
  },
  followingList: {
    backgroundColor: COLOR.white,
    paddingHorizontal: 20,
    flex: 1,
    paddingTop: 30,
  },
  followersList__title: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  followersList__backIcon: {
    marginRight: 8,
  },
  followingList__title: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  followingList__backIcon: {
    marginRight: 8,
  },

  // =================================
  // ArtistDetail.jsx
  artistDetail__title: {
    marginTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  artistDetail__title_unique: {
    marginTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  artistDetail__backIcon: {
    marginRight: 8,
  },
  artistDetail__settingIcon: {
    marginRight: 8,
  },
  artistDetail__content: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  artistDetail__artist: {},
  artistDetail__intro: {
    backgroundColor: COLOR.background,
    marginBottom: 25,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 20,
    alignItems: "center",
    marginTop: 60,
  },
  artistDetail__intro_avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginRight: 20,
    position: "relative",
    bottom: 65,
    marginBottom: -50,
  },
  artistDetail__intro_edit: {
    borderRadius: 50,
    position: "absolute",
    // zIndex: 600,
    right: 15,
    top: 0,
    backgroundColor: COLOR.main,
  },
  artistDetail__intro_editIcon: {
    // backgroundColor: "red",
    padding: 8,
  },
  artistDetail__intro_username: {
    marginBottom: 40,
  },
  artistDetail__intro_username_name: {
    fontSize: 30,
    fontWeight: "800",
  },
  artistDetail__intro_stats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: 'red',
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: COLOR.inputBackground,
  },
  artistDetail__intro_stats_songs: {
    alignItems: "center",
  },
  artistDetail__intro_stats_postsNumber: {
    fontSize: 18,
    fontWeight: "700",
  },
  artistDetail__intro_stats_postsLabel: {},
  artistDetail__intro_stats_followers: {
    alignItems: "center",
  },
  artistDetail__intro_stats_followersNumber: {
    fontSize: 18,
    fontWeight: "700",
  },
  artistDetail__intro_stats_followersLabel: {},
  artistDetail__intro_stats_following: {
    alignItems: "center",
  },
  artistDetail__intro_stats_followingNumber: {
    fontSize: 18,
    fontWeight: "700",
  },
  artistDetail__intro_stats_followingLabel: {},
  artistDetail__btns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  artistDetail__followBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR.main,
    flex: 0.7,
    paddingVertical: 10,
    borderRadius: 50,
    flex: 0.475,
  },
  artistDetail__followBtn_label: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },
  artistDetail__playBtn_unique: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.main,
    flex: 1,
    paddingVertical: 10,
    borderRadius: 50,
  },
  artistDetail__playBtn_label_unique: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },
  artistDetail__playBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.main,
    paddingVertical: 10,
    borderRadius: 50,
    flex: 0.475,
  },
  artistDetail__playBtn_label: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },
  artistDetail__body: {
    // backgroundColor: 'red',
    flex: 1,
  },
  // SONG
  artistDetail__songs: {
    alignItems: "center",
    marginBottom: 25,
  },
  artistDetail__songs_title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  artistDetail__list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: COLOR.inputBackground,
    paddingVertical: 15,
  },
  artistDetail__list_song: {
    flexDirection: "row",
    alignItems: "center",
  },
  artistDetail__list_ordinalNumber: {
    marginRight: 20,
  },
  artistDetail__list_ordinalNumber_number: {
    fontSize: 18,
    fontWeight: "500",
  },
  artistDetail__list_content: {
    flexDirection: "row",
    flex: 0.92,
  },
  artistDetail__list_info: {},
  artistDetail__list_info_title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  artistDetail__list_info_time: {},
  artistDetail__list_info_duration: {
    color: COLOR.gray,
    fontWeight: "500",
  },
  artistDetail__list_options: {},
  artistDetail__song_moreBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR.main,
    width: "50%",
    paddingVertical: 10,
    borderRadius: 50,
  },
  artistDetail__song_moreBtn_label: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },
  // VIDEO
  artistDetail__videos: {
    // backgroundColor: 'red',
    flex: 1,
  },
  artistDetail__videos_title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  artistDetail__list_Vid: {
    flexDirection: "row",
    marginBottom: 25,
  },
  artistDetail__list_video: {
    marginRight: 20,
    width: 250,
  },
  artistDetail__list_video_thumbVideo: {
    width: 250,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },
  artistDetail__list_video_content: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  artistDetail__list_video_info: {
    // backgroundColor: 'blue',
    flex: 0.9,
  },
  artistDetail__list_info_infoTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
    // backgroundColor: 'red'
  },
  artistDetail__video_moreBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR.main,
    height: 30,
    width: "20%",
    paddingHorizontal: 10,
    borderRadius: 50,
    marginTop: 60,
    marginRight: 68,
  },
  artistDetail__video_moreBtn_label: {
    fontSize: 18,
    fontWeight: "700",
  },
  // PLAYLIST
  artistDetail__playlists: {
    // backgroundColor: 'red',
    flex: 1,
    marginBottom: 15,
  },
  artistDetail__playlists_title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  artistDetail__list_Pll: {
    flexDirection: "row",
  },
  artistDetail__list_playlist: {
    marginRight: 20,
    width: 120,
  },
  artistDetail__list_playlist_thumbPlaylist: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginBottom: 10,
  },
  artistDetail__list_playlist_content: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  artistDetail__list_playlist_info: {
    // backgroundColor: 'blue',
    flex: 0.9,
  },
  artistDetail__list_info_infoTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
    // backgroundColor: 'red'
  },
  artistDetail__playlist_moreBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR.main,
    height: 30,
    width: "20%",
    paddingHorizontal: 10,
    borderRadius: 50,
    marginTop: 60,
    // marginRight: 2,
  },
  artistDetail__playlist_moreBtn_label: {
    fontSize: 18,
    fontWeight: "700",
  },
  // ALBUM
  artistDetail__albums: {
    // backgroundColor: 'red',
    flex: 1,
  },
  artistDetail__albums_title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  artistDetail__list_Ab: {
    flexDirection: "row",
  },
  artistDetail__list_album: {
    marginRight: 20,
    width: 120,
  },
  artistDetail__list_album_thumbAlbum: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginBottom: 10,
  },
  artistDetail__list_album_content: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  artistDetail__list_album_info: {
    // backgroundColor: 'blue',
    flex: 0.9,
  },
  artistDetail__list_info_infoTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
    // backgroundColor: 'red'
  },
  artistDetail__album_moreBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR.main,
    height: 30,
    width: "20%",
    paddingHorizontal: 10,
    borderRadius: 50,
    marginTop: 60,
    // marginRight: 2,
  },
  artistDetail__album_moreBtn_label: {
    fontSize: 18,
    fontWeight: "700",
  },

  // =================================
  // Album.jsx
  albumTitle: {
    marginTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  albumTitle__backIcon: {
    marginRight: 8,
  },
  albums: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 10,
  },
  albums__search: {
    backgroundColor: COLOR.inputBackground,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 30,
  },
  albums__searchInput: {
    color: COLOR.grey,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    paddingVertical: 10,
  },
  albums__album: {},
  albums__list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  albums__list_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  albums__list_avatar: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 20,
  },
  albums__list_info: {
    flex: 1,
  },
  albums__list_info_title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
  },
  albums__list_info_artist: {
    color: COLOR.gray,
    fontWeight: "500",
  },

  // =================================
  // AlbumDetail.jsx
  albumDetail__backBtn: {
    marginTop: 30,
    paddingHorizontal: 10,
    // backgroundColor: 'red'
  },
  albumDetail__content: {
    marginTop: 10,
    flex: 1,
  },
  albumDetail: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  albumDetail__intro: {
    marginBottom: 25,
  },
  albumDetail__info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  albumDetail__thumb: {
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
    shadowRadius: 16.0,
    // elevation: 24,
  },
  albumDetail__general: {
    flex: 1,
  },
  albumDetail__general_info: {},
  albumDetail__general_stats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  albumDetail__general_stats_quantityNumber: {
    color: COLOR.gray,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 2,
  },
  albumDetail__general_title: {
    fontSize: 38,
    fontWeight: "800",
    marginBottom: 5,
    width: "100%",
  },
  albumDetail__general_creator: {
    color: COLOR.gray,
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },
  albumDetail__general_options: {
    flexDirection: "row",
    alignItems: "center",
  },
  albumDetail__general_optionsImg: {
    width: 24,
    height: 24,
    marginRight: "10%",
  },
  albumDetail__btn: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  albumDetail__playBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.main,
    flex: 0.7,
    paddingVertical: 10,
    borderRadius: 50,
  },
  albumDetail__playBtn_label: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },
  albumDetail__detail: {},
  albumDetail__list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  albumDetail__list_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  albumDetail__list_thumb: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 20,
  },
  albumDetail__list_info: {
    flex: 0.9,
  },
  albumDetail__list_info_title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
  },
  albumDetail__list_info_user: {
    flexDirection: "row",
    alignItems: "center",
  },
  albumDetail__list_info_creator: {
    color: COLOR.gray,
    fontWeight: "500",
    marginRight: 5,
  },
  albumDetail__emptyAlbum: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  albumDetail__emptyAlbum_label: {
    color: COLOR.gray,
    fontSize: 45,
    fontWeight: "700",
  },

  // =================================
  // Song.jsx
  songTitle: {
    marginTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  songTitle__backIcon: {
    marginRight: 8,
  },
  songs: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 10,
  },
  songs__search: {
    backgroundColor: COLOR.inputBackground,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 30,
  },
  songs__searchInput: {
    color: COLOR.grey,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    paddingVertical: 10,
  },
  songs__song: {},
  songs__detail: {
    flex: 1,
  },
  songs__list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  songs__list_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  songs__list_avatar: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 20,
  },
  songs__list_info: {
    flex: 0.9,
  },
  songs__list_info_name: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
  },
  songs__list_info_artist: {
    color: COLOR.gray,
    fontWeight: "500",
  },

  // =================================
  // Artist.jsx
  videoTitle: {
    marginTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  videoTitle__backIcon: {
    marginRight: 8,
  },
  videos: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 10,
  },
  videos__search: {
    backgroundColor: COLOR.inputBackground,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 30,
  },
  videos__searchInput: {
    color: COLOR.grey,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    paddingVertical: 10,
  },
  videos__video: {},
  videos__list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  videos__list_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  videos__list_avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginRight: 20,
  },
  videos__list_info: {
    flex: 1,
  },
  videos__list_info_name: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
  },
  videos__list_info_followersNumber: {
    color: COLOR.gray,
    fontWeight: "500",
  },
  //
  videoDetail__videos: {
    // backgroundColor: 'yellow',
    flex: 1,
  },
  videoDetail__list_Vid: {
    marginBottom: 25,
  },
  videoDetail__list_video: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  videoDetail__list_video_thumbVideo: {
    width: 120,
    height: 70,
    borderRadius: 15,
    marginRight: 15,
  },
  videoDetail__list_video_content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  videoDetail__list_video_info: {
    // backgroundColor: 'blue',
    flex: 0.9,
  },
  videoDetail__list_info_infoTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
    // backgroundColor: 'red'
  },
  videoDetail__list_info_infoVideo: {
    color: COLOR.gray,
    fontWeight: "500",
  },
  // videoDetail__video_moreBtn: {
  // 	flexDirection: 'row',
  // 	alignItems: 'center',
  // 	justifyContent: 'center',
  // 	borderWidth: 1,
  // 	borderColor: COLOR.main,
  // 	height: 30,
  // 	width: '20%',
  // 	paddingHorizontal: 10,
  // 	borderRadius: 50,
  // 	// marginTop: 60,
  // 	// marginRight: 68,
  // },
  // videoDetail__video_moreBtn_label: {
  // 	fontSize: 18,
  // 	fontWeight: '700',
  // },

  // =================================
  // Explore.jsx
  exploreTitle: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  explore: {
    flex: 1,
    marginTop: 10,
  },
  explore__search: {
    backgroundColor: COLOR.inputBackground,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  explore__searchInput: {
    color: COLOR.grey,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    paddingVertical: 10,
  },
  explore__explore: {
    flex: 1,
    paddingHorizontal: 20,
  },
  explore__row: {
    width: "100%",
    // backgroundColor: "blue",
    marginBottom: 20,
  },

  explore__rowRight: {
    flex: 0.5,
    marginBottom: 20,
  },
  explore__genreAvatar: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // backgroundColor: "yellow",
  },
  explore__genre: {
    color: COLOR.white,
    fontSize: 22,
    fontWeight: "600",
  },

  // =================================
  // Player.jsx
  playerHeader: {
    marginTop: 30,
    paddingHorizontal: 20,
    // backgroundColor: COLOR.background,
  },
  playerContent: {
    paddingHorizontal: 20,
    // backgroundColor: COLOR.background,
  },
  playerThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLOR.inactive,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16.0,
    marginTop: 30,
  },
  playerThumbnail__thumb: {
    width: 280,
    height: 280,
    borderRadius: 30,
  },
  playerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 30,
    marginBottom: 20,
  },
  playerInfo__details: {
    alignItems: "center",
    flex: 1,
  },
  playerInfo__heart: {
    backgroundColor: COLOR.white,
    shadowColor: COLOR.white,
    shadowOffset: {
      width: 15,
      height: -3,
    },
    shadowOpacity: 1,
    shadowRadius: 2.5,
    position: "relative",
    zIndex: 10,
    height: 30,
  },
  playerInfo__details_shadowName: {},
  playerInfo__details_name: {
    fontSize: 39,
    fontWeight: "800",
  },
  playerInfo__details_artist: {
    color: COLOR.gray,
    fontSize: 23,
    fontWeight: "600",
  },
  playerInfo__option: {
    backgroundColor: COLOR.white,
    shadowColor: COLOR.white,
    shadowOffset: {
      width: -15,
      height: -3,
    },
    shadowOpacity: 1,
    shadowRadius: 2.5,
    position: "relative",
    zIndex: 10,
    height: 33,
  },
  playerControl: {},
  playerControl__track: {},
  playerControl__track_time: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -10,
    marginBottom: 5,
  },
  playerControl__track_timeElapsed: {
    color: COLOR.gray,
    fontSize: 11,
    fontWeight: "500",
  },
  playerControl__track_duration: {
    color: COLOR.gray,
    fontSize: 11,
    fontWeight: "500",
  },

  playerControl__control: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playerControl__control_controller: {
    flexDirection: "row",
    flex: 0.7,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  playerControl__control_prev: {},
  playerControl__control_prevIcon_disabled: {
    color: COLOR.gray,
  },
  playerControl__control_prevIcon: {
    color: COLOR.main,
  },
  playerControl__control_playPause: {
    backgroundColor: COLOR.main,
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLOR.inputBackground,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16.0,
  },
  playerControl__control_next: {},
  playerControl__control_nextIcon_disabled: {
    color: COLOR.gray,
  },
  playerControl__control_nextIcon: {
    color: COLOR.main,
  },

  // ================================
  // Comment.jsx
  comment: {
    flex: 88,
    // justifyContent: "space-between",
  },
  comment__comments: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingTop: 20,
    backgroundColor: COLOR.white,
  },
  comment__user: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  comment__user_avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  comment__content: {
    flex: 0.9,
  },
  comment__userComment: {
    flexDirection: "row",
  },
  comment__userComment_username: {
    fontWeight: "bold",
    marginRight: 8,
    marginBottom: 5,
    // backgroundColor: "blue",
  },
  comment__userComment_text: {
    flex: 0.9,
  },
  comment__stats: {
    flexDirection: "row",
  },
  comment__stats_createdAt: {
    color: COLOR.gray,
    fontSize: 12,
    fontWeight: "500",
    marginRight: 12,
  },
  comment__stats_likes: {
    color: COLOR.gray,
    fontSize: 12,
    fontWeight: "500",
  },
  comment__likeComment: {},
  comment__input: {
    flexDirection: "row",
    flex: 12,
    paddingHorizontal: 20,
    // backgroundColor: "red",
  },
  comment__input_comment: {
    backgroundColor: COLOR.inputBackground,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 6,
    flex: 1,
  },
  comment__inputComment: {
    height: 40,
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  comment__input_postBtn_disabled: {
    color: COLOR.grey,
    fontWeight: "600",
  },
  comment__input_postBtn: {
    color: COLOR.main,
    fontWeight: "600",
  },
});
