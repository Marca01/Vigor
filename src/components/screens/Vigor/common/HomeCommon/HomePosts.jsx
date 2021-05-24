import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../../../../../styles/global";
import { Video } from "expo-av";
import { Audio } from "expo-av";
import ViewMoreText from "react-native-view-more-text";
import COLOR from "../../../../../constants/color";
import { likePosts, disLikePosts } from "../../../../../api";
import * as SecureStore from "expo-secure-store";
import { memo } from "react";
import moment from "moment";
import BottomTab from "../SpecialComponents/Player/BottomTab";
import { FontAwesome5 } from "@expo/vector-icons";

function HomePosts({ posts, onPress, getUserFollowId, getPostId, navigation }) {
  const video = useRef(null);

  const [refreshing, setRefreshing] = useState(false);

  const [userData, setUserData] = useState();
  const [parsed, setParsed] = useState("");
  console.log("====================================");
  console.log("render");
  console.log("====================================");
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
      console.log(userData._id);
    });
  }, []);

  // Pass data to parent
  // useEffect(() => {
  //   if (getUserFollowId) {
  //     getUserFollowId(posts.map((post) => post.creator._id));
  //   }
  //   console.log("fowhie");
  // }, [getUserFollowId]);

  const renderViewMore = (onPress) => {
    return (
      <AntDesign
        name="pluscircleo"
        size={12}
        color={COLOR.gray}
        onPress={onPress}
      />
    );
  };

  const renderViewLess = (onPress) => {
    return (
      <AntDesign
        name="minuscircleo"
        size={12}
        color={COLOR.gray}
        onPress={onPress}
      />
    );
  };

  // =================================================================
  // FEATURES

  // Like posts
  const likePost = (postId) => {
    likePosts(postId)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  // Dislike posts
  const disLikePost = (postId) => {
    disLikePosts(postId)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <View>
        {!posts.length ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLOR.gray,
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              No post
            </Text>
          </View>
        ) : (
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <View style={globalStyles.post}>
                <View style={globalStyles.post__content}>
                  <View style={globalStyles.post__contentType}>
                    {item.selectedVidFile && (
                      <Video
                        ref={video}
                        style={globalStyles.post__contentType__image}
                        source={{
                          uri: item.selectedVidFile,
                        }}
                        useNativeControls
                        isLooping
                        // onPlaybackStatusUpdate={status => setStatus(() => status)}
                      />
                    )}
                    {item.selectedAudFile && (
                      <BottomTab
                        PLAY_LIST={{
                          sourceUri: item.selectedAudFile,
                          name: item.hashtag[0].replace("#", ""),
                          coverImage:
                            "https://i.pinimg.com/564x/92/d4/39/92d4397cfce1cc12813775b3da352bbe.jpg",
                          singer: item.creator.username,
                        }}
                      />
                    )}
                  </View>
                  <View style={globalStyles.post__contentTitle}>
                    <View style={globalStyles.post__contentTitleDiv}>
                      <ViewMoreText
                        numberOfLines={1}
                        renderViewMore={renderViewMore}
                        renderViewLess={renderViewLess}
                      >
                        <Text style={globalStyles.post__contentTitle_title}>
                          {item.title}
                        </Text>
                      </ViewMoreText>
                    </View>
                    {getPostId && getPostId(item._id)}
                    <SimpleLineIcons
                      name="options"
                      size={16}
                      color="black"
                      // onPress={() => getPostId(item._id)}
                      onPress={onPress}
                    />
                  </View>
                </View>
                <View style={globalStyles.post__stats}>
                  {getUserFollowId && getUserFollowId(item.creator._id)}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push("ViewLikers", { item: item.likers })
                    }
                  >
                    <Text style={globalStyles.post__stats_like}>
                      {item.likers.length} likes
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.push("Comment", { item: item })}
                  >
                    <Text style={globalStyles.post__stats_comment}>
                      {item.comments.length} comments
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={globalStyles.post__user}>
                  <View style={globalStyles.post__userInfo}>
                    {item.creator.profilePicture ? (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("ArtistDetail", {
                            item: item.creator,
                          })
                        }
                      >
                        <Avatar.Image
                          size={42}
                          source={{ uri: item.creator.profilePicture }}
                          style={globalStyles.post__userInfo_avatar}
                        />
                      </TouchableOpacity>
                    ) : (
                      userData && (
                        <TouchableOpacity>
                          <Avatar.Image
                            size={42}
                            source={{ uri: userData.profilePicture }}
                            style={globalStyles.post__userInfo_avatar}
                          />
                        </TouchableOpacity>
                      )
                    )}
                    <View style={globalStyles.post__userInfo_createdAt}>
                      <Text style={globalStyles.post__userInfo_name}>
                        {item.creator.username}
                      </Text>
                      <Text style={globalStyles.post__userInfo_dotSeparator}>
                        .
                      </Text>
                      <Text style={globalStyles.post__userInfo_time}>
                        {moment(item.createdAt).fromNow()}
                      </Text>
                    </View>
                  </View>
                  {userData &&
                  item.likers.some(
                    (postLiker) => postLiker._id === userData._id
                  ) ? (
                    <AntDesign
                      name="heart"
                      size={24}
                      color="red"
                      onPress={() => disLikePost(item._id)}
                    />
                  ) : (
                    <AntDesign
                      name="hearto"
                      size={24}
                      color="red"
                      onPress={() => likePost(item._id)}
                    />
                  )}
                </View>
                {/* <View style={globalStyles.post__createdAt}>
						</View> */}
              </View>
            )}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
}

export default HomePosts;
