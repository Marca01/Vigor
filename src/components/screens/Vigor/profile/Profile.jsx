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
import { globalStyles } from "../../../../styles/global";
import * as SecureStore from "expo-secure-store";
import {
  ArtistDetailLayoutArtist,
  ArtistDetailLayoutContent,
} from "../common/LibraryCommon/Artist/ArtistDetailLayout";
import { deletePosts, getMyPosts } from "../../../../api";
import HomePosts from "../common/HomeCommon/HomePosts";
import { Ionicons } from "@expo/vector-icons";
import Title from "../common/SpecialComponents/Title";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

export default function Profile({ navigation }) {
  const ARTIST_LAYOUT = [{ id: "0" }, { id: "1" }];

  const [refreshing, setRefreshing] = useState(false);

  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([]);

  const [deletePostId, setDeletePostId] = useState(null);

  useEffect(() => {
    getMyPosts()
      .then((res) => {
        setPosts(res.data);
        // console.log(posts.map((postId) => postId._id).map((id) => id));
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

  // ====================================================================
  // FEATURES

  // Delete posts
  const deletePost = (postId) => {
    deletePosts(postId)
      .then((res) => {
        console.log(res.data);
        console.log(posts.map((postId) => postId._id));
        console.log(postId);
      })
      .catch((error) => console.log(error));
  };

  // ======================================================================

  // Options button (...)
  const renderOptionsContent = () => (
    <View style={globalStyles.bottomSheetContent}>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Save</Text>
      </TouchableOpacity>
      {posts &&
        posts.some((postDeleteId) => postDeleteId._id === deletePostId) && (
          <TouchableOpacity
            style={globalStyles.bottomSheetContent__btn}
            onPress={() => {
              deletePost(deletePostId);
            }}
          >
            <Text style={globalStyles.bottomSheetContent__label}>Delete</Text>
          </TouchableOpacity>
        )}
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
    getMyPosts()
      .then((res) => {
        setPosts(res.data);
        setRefreshing(false);
        console.log("Refreshed" + posts);
      })
      .catch((error) => console.log(error));
  }, [refreshing]);

  // ======================================================================

  function ArtistDetailPosts() {
    return (
      <HomePosts
        posts={posts}
        getPostId={(postDeleteId) => {
          setDeletePostId(postDeleteId);
        }}
        navigation={navigation}
        onPress={() => sheetRef.current.snapTo(0)}
      />
      // ) : (
      //   <View
      //     style={{
      //       alignItems: "center",
      //       justifyContent: "center",
      //       backgroundColor: "red",
      //       flex: 1,
      //     }}
      //   >
      //     <Text>No posts available</Text>
      //   </View>
      // );
    );
  }

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
      <View style={globalStyles.artistDetail__title_unique}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
          style={globalStyles.artistDetail__backIcon}
        />
        <Title title={userData.username} />
        <TouchableOpacity
          style={globalStyles.artistDetail__setting}
          onPress={() => navigation.navigate("ProfileSetting")}
        >
          <Ionicons
            name="settings-outline"
            size={24}
            color="black"
            style={globalStyles.artistDetail__settingIcon}
          />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          globalStyles.artistDetail__content,
          { flex: 1, opacity: animatedShadowOpacity },
        ]}
      >
        {posts && userData.following && userData.followers && (
          <FlatList
            data={ARTIST_LAYOUT}
            renderItem={({ item }) =>
              item.id === "0" ? (
                <ArtistDetailLayoutArtist
                  avatar={userData.profilePicture}
                  artistName={userData.username}
                  artistPosts={posts.length}
                  artistListeners={userData.following.length}
                  artistFollowers={userData.followers.length}
                  userId={userData._id}
                />
              ) : (
                <ArtistDetailPosts />
              )
            }
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
