import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import PlaylistDetailLayout from "./PlaylistDetailLayout";
import { Ionicons } from "@expo/vector-icons";
import {
  getMyPosts,
  getPlaylist,
  removePostFromPlaylist,
  viewPostsFromPlaylist,
} from "../../../../../../api";
import Animated from "react-native-reanimated";
import { deletePlaylist } from "../../../../../../api";
import BottomSheet from "reanimated-bottom-sheet";

export default function PlaylistDetail({ navigation, route }) {
  const [SONGS, setSONGS] = useState([]);

  useEffect(() => {
    viewPostsFromPlaylist(route.params?.item._id)
      .then((res) => {
        setSONGS(res.data);
        console.log(res.data);
        console.log(SONGS.map((postId) => postId._id).toString());
      })
      .catch((error) => console.log(error));
  }, []);

  // Library options
  const renderOptionsContent = () => (
    <View style={globalStyles.bottomSheetContent}>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Save</Text>
      </TouchableOpacity>
      {/* {playlistId && ( */}
      <TouchableOpacity
        style={globalStyles.bottomSheetContent__btn}
        onPress={() => {
          deletePlaylists(route.params?.item._id);
        }}
      >
        <Text style={globalStyles.bottomSheetContent__label}>Delete</Text>
      </TouchableOpacity>
      {/* )} */}
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

  // Song options
  const renderSongOptionsContent = () => (
    <View style={globalStyles.bottomSheetContent}>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.bottomSheetContent__btn}
        onPress={() => {
          deletePostsFromPlaylist(
            // SONGS.map((idPost) => idPost._id),
            route.params?.item.songs[0],
            // "60ad07b3acb13c3810a833f2",
            route.params?.item._id
          );
        }}
      >
        <Text style={globalStyles.bottomSheetContent__label}>
          Remove from this playlist
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Report</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSongOptionsHeader = () => (
    <View style={globalStyles.bottomSheetHeader}>
      <View style={globalStyles.bottomSheetHeader__panel}>
        <View style={globalStyles.bottomSheetHeader__panelHandle}></View>
      </View>
    </View>
  );

  const sheetLibraryRef = useRef(null);
  const sheetSongRef = useRef(null);

  let animatedValue = new Animated.Value(1);

  const animatedShadowOpacity = Animated.interpolateNode(animatedValue, {
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  // ================================================================
  // FEATURES
  const deletePlaylists = (playlistId) => {
    sheetLibraryRef.current.snapTo(2);
    deletePlaylist(playlistId)
      .then((res) => {
        console.log(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const deletePostsFromPlaylist = (postId, playlistId) => {
    sheetSongRef.current.snapTo(2);
    removePostFromPlaylist(postId, playlistId)
      .then((res) => {
        console.log(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <View style={globalStyles.container}>
      <BottomSheet
        ref={sheetLibraryRef}
        snapPoints={[360, 260, 0]}
        initialSnap={2}
        borderRadius={20}
        callbackNode={animatedValue}
        renderContent={renderOptionsContent}
        renderHeader={renderOptionsHeader}
      />
      {/* Song options */}
      <BottomSheet
        ref={sheetSongRef}
        snapPoints={[360, 260, 0]}
        initialSnap={2}
        borderRadius={20}
        callbackNode={animatedValue}
        renderContent={renderSongOptionsContent}
        renderHeader={renderSongOptionsHeader}
      />
      <Animated.View
        style={{
          flex: 1,
          // backgroundColor: "red",
          opacity: animatedShadowOpacity,
        }}
      >
        <View style={globalStyles.playlistDetail__backBtn}>
          <Ionicons
            name="chevron-back"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
            style={globalStyles.playlistDetail__backIcon}
          />
        </View>
        <View style={globalStyles.playlistDetail__content}>
          <FlatList
            data={[route.params?.item]}
            renderItem={({ item }) => (
              <PlaylistDetailLayout
                thumbUrl={{
                  uri:
                    "https://i.pinimg.com/564x/d3/d3/62/d3d362c198d7483aaf3e5852be209526.jpg",
                }}
                title={item.title}
                creator={item.creator.username}
                songs={item.songs.length}
                playlistId={item._id}
                playlistData={SONGS}
                onPress={() => sheetLibraryRef.current.snapTo(0)}
                onOptionPress={() => sheetSongRef.current.snapTo(0)}
              />
            )}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Animated.View>
    </View>
  );
}
