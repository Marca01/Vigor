import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
} from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import {
  ArtistDetailLayoutArtist,
  ArtistDetailLayoutContent,
  ArtistDetailLayoutSongs,
  ArtistDetailLayoutVideos,
  ArtistDetailLayoutPlaylists,
} from "./ArtistDetailLayout";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import HomePosts from "../../HomeCommon/HomePosts";
import ArtistLayout from "./ArtistLayout";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../SpecialComponents/Title";
import COLOR from "../../../../../../constants/color";
import {
  getFollowPosts,
  getPlaylist,
  getUserPosts,
} from "../../../../../../api";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import * as SecureStore from "expo-secure-store";

export default function ArtistFound({ navigation, route }) {
  const ARTIST_LAYOUT = [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }];

  const [refreshing, setRefreshing] = useState(false);

  const [posts, setPosts] = useState([]);

  //
  useEffect(() => {
    getUserPosts(route.params?.item._id)
      .then((res) => {
        setPosts(res.data);
        // console.log(posts);
        console.log(posts);
      })
      .catch((error) => console.log(error));
  }, []);

  // const ARTIST_SONGS = [
  //   {
  //     id: "01",
  //     title: "Sweat but psycho",
  //     artist: route.params?.item?.artist,
  //     time: "3:45",
  //   },
  //   {
  //     id: "02",
  //     title: "Faded",
  //     artist: route.params?.item?.artist,
  //     time: "3:25",
  //   },
  //   {
  //     id: "03",
  //     title:
  //       "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
  //     artist: route.params?.item?.artist,
  //     time: "3:09",
  //   },
  //   {
  //     id: "04",
  //     title: "Sing me to sleep",
  //     artist: route.params?.item?.artist,
  //     time: "2:59",
  //   },
  //   {
  //     id: "05",
  //     title: "Treat you better",
  //     artist: route.params?.item?.artist,
  //     time: "3:09",
  //   },
  // ];

  // const ARTIST_VIDEOS = [
  //   {
  //     id: "01",
  //     title: "Sweat but psycho Video",
  //     artist: route.params?.item?.artist,
  //     url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  //   },
  //   {
  //     id: "02",
  //     title: "Faded Video",
  //     artist: route.params?.item?.artist,
  //     url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  //   },
  //   {
  //     id: "03",
  //     title:
  //       "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
  //     artist: route.params?.item?.artist,
  //     url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  //   },
  //   {
  //     id: "04",
  //     title:
  //       "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
  //     artist: route.params?.item?.artist,
  //     url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  //   },
  //   {
  //     id: "05",
  //     title:
  //       "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
  //     artist: route.params?.item?.artist,
  //     url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  //   },
  // ];

  const [PLAYLISTS, setPLAYLISTS] = useState([]);
  const [playlistUserId, setPlaylistUserId] = useState([]);

  // Get all playlists
  useEffect(() => {
    getPlaylist()
      .then((res) => {
        setPLAYLISTS(res.data);
        console.log("playlist user id " + playlistUserId);
      })
      .catch((error) => console.log(error));
  }, []);

  // const ARTIST_PLAYLISTS = [
  //   {
  //     id: "01",
  //     title: "Sweat but psycho Video",
  //     artist: route.params?.item?.artist,
  //     url:
  //       "https://i.pinimg.com/236x/01/07/88/010788f2eef764c1033035b642e3f854.jpg",
  //   },
  //   {
  //     id: "02",
  //     title: "Faded Video",
  //     artist: route.params?.item?.artist,
  //     url:
  //       "https://i.pinimg.com/564x/a8/2f/a7/a82fa7d6b863350016ccf88fe5792604.jpg",
  //   },
  //   {
  //     id: "03",
  //     title:
  //       "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
  //     artist: route.params?.item?.artist,
  //     url:
  //       "https://i.pinimg.com/564x/9a/bb/a0/9abba09889d41368a638fa56c7a671da.jpg",
  //   },
  //   {
  //     id: "04",
  //     title:
  //       "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
  //     artist: route.params?.item?.artist,
  //     url:
  //       "https://i.pinimg.com/564x/4c/ec/13/4cec13679cd4993eebe357de2265b7e6.jpg",
  //   },
  //   {
  //     id: "05",
  //     title:
  //       "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
  //     artist: route.params?.item?.artist,
  //     url:
  //       "https://i.pinimg.com/564x/3c/18/2d/3c182d73d3bd0fda1603fec3e50c82ba.jpg",
  //   },
  // ];

  const ARTIST_ALBUMS = [
    {
      id: "01",
      title: "Sweat but psycho Album",
      artist: route.params?.item?.artist,
      url:
        "https://i.pinimg.com/236x/01/07/88/010788f2eef764c1033035b642e3f854.jpg",
    },
    {
      id: "02",
      title: "Faded Album",
      artist: route.params?.item?.artist,
      url:
        "https://i.pinimg.com/564x/a8/2f/a7/a82fa7d6b863350016ccf88fe5792604.jpg",
    },
    {
      id: "03",
      title:
        "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
      artist: route.params?.item?.artist,
      url:
        "https://i.pinimg.com/564x/9a/bb/a0/9abba09889d41368a638fa56c7a671da.jpg",
    },
    {
      id: "04",
      title:
        "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
      artist: route.params?.item?.artist,
      url:
        "https://i.pinimg.com/564x/4c/ec/13/4cec13679cd4993eebe357de2265b7e6.jpg",
    },
    {
      id: "05",
      title:
        "In my blood fslkf wjkf wjf wkef kwf kwef lwejf kwjfwklefwefklwef wkefj wlf ",
      artist: route.params?.item?.artist,
      url:
        "https://i.pinimg.com/564x/3c/18/2d/3c182d73d3bd0fda1603fec3e50c82ba.jpg",
    },
  ];

  // const POSTS = [
  //   {
  //     id: "1",
  //     creator: "KHale",
  //     avatar: require("../../../../../../assets/images/avatar.jpg"),
  //     vidContent: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  //     title: "Cover Lorem Ipsum is simply dummy text of",
  //     likes: "10k",
  //     createdAt: "10 hours",
  //     comments: "1k",
  //   },
  //   {
  //     id: "2",
  //     creator: "Marca",
  //     avatar: require("../../../../../../assets/images/avatar.jpg"),
  //     vidContent: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  //     title: "Cover Lorem Ipsum is simply dummy text of",
  //     likes: "10k",
  //     createdAt: "10 hours",
  //     comments: "1k",
  //   },
  // ];

  // ======================================================================

  // Options button (...)
  const renderOptionsContent = () => (
    <View style={globalStyles.bottomSheetContent}>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Share</Text>
      </TouchableOpacity>
      {/* {userData.following &&
      userData.following.some(
        (getFollow) => getFollow._id === route.params?.item._id
      ) ? (
        <TouchableOpacity
          style={globalStyles.bottomSheetContent__btn}
          onPress={() => {
            unFollowOtherUser(route.params?.item._id);
          }}
        >
          <Text style={globalStyles.bottomSheetContent__label}>Following</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={globalStyles.bottomSheetContent__btn}
          onPress={() => {
            followOtherUser(route.params?.item._id);
          }}
        >
          <Text style={globalStyles.bottomSheetContent__label}>Follow</Text>
        </TouchableOpacity>
      )} */}
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

  const sheetRef = useRef(null);

  let animatedValue = new Animated.Value(1);

  const animatedShadowOpacity = Animated.interpolateNode(animatedValue, {
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });
  // =====================================================================
  // Refresh
  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    getUserPosts(route.params?.item._id)
      .then((res) => {
        setPosts(res.data);
        setRefreshing(false);
        console.log("Refreshed" + posts);
      })
      .catch((error) => console.log(error));
  }, [refreshing]);

  // ======================================================================

  function ArtistDetailLayoutContentt() {
    return (
      <ArtistDetailLayoutContent
        contentData={ARTIST_LAYOUT}
        songData={
          route.params?.item._id === posts.user._id ? posts.posts : null
        }
        videoData={
          route.params?.item._id === posts.user._id ? posts.posts : null
        }
        playlistData={PLAYLISTS.filter(
          (playlistId) => playlistId.creator._id === route.params?.item._id
        )}
        albumData={ARTIST_ALBUMS}
        navigation={navigation}
      />
    );
  }

  function ArtistDetailPosts() {
    return posts ? (
      <HomePosts
        posts={posts.posts}
        navigation={navigation}
        onPress={() => sheetRef.current.snapTo(0)}
        likeNotiId={posts.user.notificationToken}
      />
    ) : (
      <View style={{ alignItems: "center" }}>
        <Text style={globalStyles.noPostsText}>No posts</Text>
      </View>
    );
  }

  // Tab view
  const renderScene = SceneMap({
    first: ArtistDetailLayoutContentt,
    second: ArtistDetailPosts,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Music" },
    { key: "second", title: "Posts" },
  ]);
  console.log("render artist");
  return (
    // <ArtistLayout
    // 	artistName={route.params?.item.artist}
    // 	layoutData={[route.params?.item]}
    // 	contentData={ARTIST_LAYOUT}
    // 	songData={ARTIST_SONGS}
    // 	videoData={ARTIST_VIDEOS}
    // 	playlistData={ARTIST_PLAYLISTS}
    // />
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
      <View style={globalStyles.artistDetail__title}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
          style={globalStyles.artistDetail__backIcon}
        />
        <Title title={route.params?.item?.username} />
      </View>
      <Animated.View
        style={[
          globalStyles.artistDetail__content,
          { flex: 1, opacity: animatedShadowOpacity },
        ]}
      >
        {posts.posts && posts.user && (
          <FlatList
            // data={[posts.user]}
            data={[route.params?.item]}
            renderItem={({ item }) => (
              <>
                <ArtistDetailLayoutArtist
                  avatar={posts.user.profilePicture}
                  artistName={item.username}
                  artistPosts={posts.posts.length}
                  artistListeners={posts.user.following.length}
                  artistFollowers={posts.user.followers.length}
                  userId={item._id}
                  navigation={navigation}
                  followers={posts.user.followers}
                  following={posts.user.following}
                  expoPushToken={posts.user.notificationToken}
                />
                {/* <ArtistDetailLayoutContent 
								contentData={ARTIST_LAYOUT}
								songData={ARTIST_SONGS}
								videoData={ARTIST_VIDEOS}
								playlistData={ARTIST_PLAYLISTS}
							/> */}
                <TabView
                  navigationState={{ index, routes }}
                  renderTabBar={(props) => (
                    <TabBar
                      {...props}
                      labelStyle={{ fontSize: 18, fontWeight: "600" }}
                      getLabelText={({ route }) => route.title}
                      activeColor={COLOR.main}
                      inactiveColor={COLOR.inactive}
                      style={{
                        backgroundColor: COLOR.white,
                        shadowOffset: { height: 0, width: 0 },
                        shadowColor: "transparent",
                        shadowOpacity: 0,
                        elevation: 0,
                        marginBottom: 20,
                        paddingBottom: -10,
                      }}
                      indicatorStyle={{
                        backgroundColor: COLOR.main,
                        height: 5,
                        borderRadius: 50,
                      }}
                      indicatorContainerStyle={{
                        width: 50,
                        left: (Dimensions.get("window").width / 2 - 50) / 2, // from Github: https://github.com/satya164/react-native-tab-view/issues/944
                      }}
                    />
                  )}
                  renderScene={renderScene}
                  onIndexChange={setIndex}
                  // initialLayout={initialLayout}
                  // style={{
                  // 	backgroundColor: COLOR.background,
                  // 	borderTopLeftRadius: 30,
                  // 	borderTopRightRadius: 30,
                  // 	marginLeft: 20,
                  // 	marginRight: 20,
                  // }}
                />
              </>
            )}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        )}
      </Animated.View>
    </View>
  );
}
