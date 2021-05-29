import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../SpecialComponents/Title";
import { Feather } from "@expo/vector-icons";
import SongList from "./SongList";
import * as SecureStore from "expo-secure-store";
import {
  addPostToPlaylist,
  getMyPosts,
  getPlaylist,
} from "../../../../../../api";
import SongsLibrary from "../../SpecialComponents/Player/SongsLibrary";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import PlaylistList from "../Playlist/PlaylistList";
import NewPlaylistAddSongModal from "../Playlist/NewPlaylistAddSongModal";
import Toast from "react-native-toast-message";

export default function Song({ navigation }) {
  const SONG_LAYOUT = [{ id: "0" }, { id: "1" }];

  const [SONGS, setSONGS] = useState([]);
  const [songPostId, setSongPostId] = useState("");
  const [PLAYLISTS, setPLAYLISTS] = useState([]);
  const [userData, setUserData] = useState([]);

  const [isModalVisible, setModalVisible] = useState(false);

  const includesAll = (arr, values) => values.every((v) => arr.includes(v));

  useEffect(() => {
    getMyPosts()
      .then((res) => {
        setSONGS(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const user = async () => {
    try {
      const user = await SecureStore.getItemAsync("user");
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user().then((userJson) => {
      setUserData(JSON.parse(userJson));
      console.log(userData.following);
    });
  }, []);

  const [search, setSearch] = useState("");

  const onChangeSearch = (searchText) => {
    setSearch(searchText);
  };

  // Modal new playlist add song
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // ====================================================================
  // Get all playlists
  useEffect(() => {
    getPlaylist()
      .then((res) => {
        setPLAYLISTS(res.data);
        console.log(PLAYLISTS);
      })
      .catch((error) => console.log(error));
  }, []);

  // ================================
  // Options button (...)
  const renderOptionsContent = () => (
    <View style={globalStyles.bottomSheetContent}>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.bottomSheetContent__btn}
        onPress={() => {
          sheetPlaylistRef.current.snapTo(0);
          sheetRef.current.snapTo(2);
        }}
      >
        <Text style={globalStyles.bottomSheetContent__label}>
          Add to playlist
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Report</Text>
      </TouchableOpacity>
    </View>
  );

  const renderOptionsHeader = () => (
    <View style={globalStyles.bottomSheetHeader}>
      <View style={globalStyles.bottomSheetHeader__panel}>
        <View style={globalStyles.bottomSheetHeader__panelHandle}></View>
      </View>
    </View>
  );

  // Playlist to add
  const renderPlaylistOptionsContent = () =>
    SONGS.filter((songPost) => songPost.selectedAudFile).map((postId) => (
      <View style={globalStyles.bottomSheetContent}>
        <TouchableOpacity
          style={globalStyles.bottomSheetContent__newPlaylistBtn}
          onPress={toggleModal}
        >
          <Text style={globalStyles.bottomSheetContent__newPlaylistBtn_label}>
            NEW PLAYLIST
          </Text>
        </TouchableOpacity>
        <View style={globalStyles.bottomSheetContent__playlists}>
          {/* {SONGS.filter((songPost) => songPost.selectedAudFile).map(
          (postId) => postId._id
        )} */}
          {PLAYLISTS.filter(
            (playlistId) => playlistId.creator._id === userData._id
          ).map((item) => (
            <View style={globalStyles.playlists__playlist}>
              <PlaylistList
                url={{
                  uri:
                    "https://i.pinimg.com/564x/d3/d3/62/d3d362c198d7483aaf3e5852be209526.jpg",
                }}
                playlistTitle={item.title}
                playlistCreator={item.creator.username}
                onPress={() => {
                  // includesAll(
                  //   JSON.stringify(item.songs),
                  //   SONGS.filter((songPost) => songPost.selectedAudFile).map(
                  //     (postId) => postId._id
                  //   )
                  // )
                  item.songs.includes(postId._id)
                    ? // )
                      (sheetPlaylistRef.current.snapTo(1),
                      Toast.show({
                        type: "error",
                        position: "top",
                        text1: "Can't add the same song!",
                        visibilityTime: 5000,
                        autoHide: true,
                        topOffset: 30,
                      }))
                    : (sheetPlaylistRef.current.snapTo(2),
                      addPostsToPlaylist(
                        // SONGS.filter(
                        //   (songPost) => songPost.selectedAudFile
                        // ).map((postId) => postId._id),
                        // songPostId,
                        postId._id,
                        item._id
                      ));
                }}
              />
            </View>
          ))}
        </View>
      </View>
    ));

  const renderPlaylistOptionsHeader = () => (
    <View style={globalStyles.bottomSheetHeader}>
      <View style={globalStyles.bottomSheetHeader__panel}>
        <View style={globalStyles.bottomSheetHeader__panelHandle}></View>
      </View>
    </View>
  );

  const sheetRef = useRef(null);
  const sheetPlaylistRef = useRef(null);

  let animatedValue = new Animated.Value(1);

  const animatedShadowOpacity = Animated.interpolateNode(animatedValue, {
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  // =====================================================================
  // FEATURES
  const addPostsToPlaylist = (postId, playlistId) => {
    addPostToPlaylist(postId, playlistId)
      .then((res) => {
        console.log(res.data);
        Toast.show({
          type: "success",
          position: "top",
          text1: "Song added",
          visibilityTime: 5000,
          autoHide: true,
          topOffset: 30,
        });
      })
      .catch((err) => console.log(err));
    sheetPlaylistRef.current.snapTo(0);
  };

  return (
    <View style={globalStyles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[360, 260, 0]}
        initialSnap={2}
        borderRadius={20}
        callbackNode={animatedValue}
        renderContent={renderOptionsContent}
        renderHeader={renderOptionsHeader}
      />

      {/* Playlists to add */}
      <BottomSheet
        ref={sheetPlaylistRef}
        snapPoints={[580, 350, 0]}
        initialSnap={2}
        borderRadius={20}
        callbackNode={animatedValue}
        renderContent={renderPlaylistOptionsContent}
        renderHeader={renderPlaylistOptionsHeader}
      />

      <Animated.View
        style={{
          flex: 1,
          opacity: animatedShadowOpacity,
        }}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={globalStyles.songTitle}>
            <Ionicons
              name="chevron-back"
              size={30}
              color="black"
              onPress={() => navigation.navigate("Library")}
              style={globalStyles.songTitle__backIcon}
            />
            <Title title="Songs" />
          </View>
        </TouchableWithoutFeedback>
        <View style={globalStyles.songs}>
          <FlatList
            data={SONG_LAYOUT}
            renderItem={({ item }) =>
              item.id === "0" ? (
                <TouchableOpacity style={globalStyles.songs__search}>
                  <Feather name="search" size={20} color="grey" />
                  <TextInput
                    style={globalStyles.songs__searchInput}
                    onChangeText={(text) => onChangeSearch(text)}
                    value={search}
                    placeholder="Find songs"
                  />
                </TouchableOpacity>
              ) : (
                <View style={globalStyles.songs__song}>
                  <SongsLibrary
                    PLAY_LIST={SONGS.filter(
                      (songPost) => songPost.selectedAudFile
                    )}
                    onOptionsPress={() => sheetRef.current.snapTo(0)}
                    isModalPlaylistVisible={isModalVisible}
                    toggleModal={toggleModal}
                    // songPId={(sId) => setSongPostId(sId)}
                  />
                </View>
              )
            }
          />
        </View>
      </Animated.View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}
