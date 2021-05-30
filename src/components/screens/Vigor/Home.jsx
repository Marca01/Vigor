import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";
import {
  getPosts,
  getFollowPosts,
  unFollowOtherUsers,
  followOtherUsers,
} from "../../../api";
import { globalStyles } from "../../../styles/global";
import HomePosts from "./common/HomeCommon/HomePosts";
import Title from "./common/SpecialComponents/Title";
import Header from "./header/Header";
import * as SecureStore from "expo-secure-store";
import Login from "./features/Login";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import BottomTab from "./common/SpecialComponents/Player/BottomTab";
import Player from "./common/SpecialComponents/Player/Player";

export default function Home({ navigation }) {
  const ORDER = [{ id: "0" }, { id: "1" }];

  const [posts, setPosts] = useState([]);

  //
  useEffect(() => {
    getFollowPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const [followUserId, setFollowUserId] = useState(null);
  const [userId, setUserId] = useState(null);

  const [userAvatar, setUserAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState();
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
      setUserAvatar(JSON.parse(userJson));
      setUsername(JSON.parse(userJson));
      setUserData(JSON.parse(userJson));
      console.log(followUserId);
    });
  }, []);

  const getFollowUserIdCallback = useCallback((userFollowId) => {
    setFollowUserId(userFollowId);
  }, []);
  // =====================================================================
  // FEATURES

  // follow other users
  const followOtherUser = (userId) => {
    followOtherUsers(userId)
      .then(async (res) => {
        console.log(res.data.following.map((foll) => foll._id));
        console.log(userId);
        await SecureStore.setItemAsync("user", JSON.stringify(res.data));
      })
      .catch((error) => console.log(error));
  };

  // unfollow other users
  const unFollowOtherUser = (userId) => {
    unFollowOtherUsers(userId)
      .then(async (res) => {
        console.log(res.data.following.map((foll) => foll._id));
        console.log(userId);
        await SecureStore.setItemAsync("user", JSON.stringify(res.data));
      })
      .catch((error) => console.log(error));
  };

  // Options button (...)
  const renderOptionsContent = () => (
    <View style={globalStyles.bottomSheetContent}>
      <TouchableOpacity style={globalStyles.bottomSheetContent__btn}>
        <Text style={globalStyles.bottomSheetContent__label}>Save</Text>
      </TouchableOpacity>
      {userData?.following?.some(
        (getFollow) => getFollow._id === followUserId
      ) ? (
        <TouchableOpacity
          style={globalStyles.bottomSheetContent__btn}
          onPress={() => {
            unFollowOtherUser(followUserId);
          }}
        >
          <Text style={globalStyles.bottomSheetContent__label}>Unfollow</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={globalStyles.bottomSheetContent__btn}
          onPress={() => {
            followOtherUser(followUserId);
          }}
        >
          <Text style={globalStyles.bottomSheetContent__label}>Follow</Text>
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
    getFollowPosts()
      .then((res) => {
        setPosts(res.data);
        setRefreshing(false);
        console.log("Refreshed" + posts);
      })
      .catch((error) => console.log(error));
  }, [refreshing]);

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
      <Animated.View
        style={{
          flex: 1,
          // position: "relative",
          // opacity: Animated.add(0.1, Animated.multiply(animatedValue, 1.0)),
          opacity: animatedShadowOpacity,
        }}
      >
        {/* Header */}
        <Header
          avatar={userAvatar.profilePicture}
          username={username.username}
          navigation={navigation}
        />
        {/* Posts */}
        <View style={globalStyles.posts}>
          <View style={globalStyles.postDiv}>
            <FlatList
              data={ORDER}
              renderItem={({ item }) =>
                item.id === "0" ? (
                  <Title title="Posts" />
                ) : (
                  <HomePosts
                    posts={posts}
                    onPress={() => sheetRef.current.snapTo(0)}
                    // getUserFollowId={(userFollowId) => {
                    //   setFollowUserId(userFollowId);
                    // }}
                    getUserFollowId={getFollowUserIdCallback}
                    navigation={navigation}
                  />
                )
              }
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
