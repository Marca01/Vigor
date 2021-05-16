import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../../../../../styles/global";
import { Video } from "expo-av";
import { Audio } from "expo-av";
import Player from "../../pages/Player";
import ViewMoreText from "react-native-view-more-text";
import COLOR from "../../../../../constants/color";
import { likePosts, disLikePosts } from "../../../../../api";
import * as SecureStore from "expo-secure-store";
import { memo } from "react";
import moment from "moment";

function HomePosts({ posts, onPress, getUserFollowId, navigation }) {
  const video = useRef(null);

  // const [sound, setSound] = useState();

  // async function playSound(aud) {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(
  //     // require("../../../../../assets/audio/demo.mp3")
  //     aud
  //   );
  //   setSound(sound);

  //   console.log("Playing Sound");
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

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
                    // <View>
                    <Button
                      title="Play Sound"
                      // onPress={() => playSound(item.audContent)}
                      onPress={() =>
                        navigation.navigate("Player", { playerData: item })
                      }
                    />
                    // {/* </View> */}
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
                  <SimpleLineIcons
                    name="options"
                    size={16}
                    color="black"
                    onPress={onPress}
                  />
                </View>
              </View>
              <View style={globalStyles.post__stats}>
                <Text style={globalStyles.post__stats_like}>
                  {item.likers.length} likes
                </Text>
                <Text style={globalStyles.post__stats_comment}>
                  {item.comments.length} comments
                  {getUserFollowId(item.creator._id)}
                </Text>
              </View>
              <View style={globalStyles.post__user}>
                <View style={globalStyles.post__userInfo}>
                  <Avatar.Image
                    size={42}
                    source={{ uri: item.creator.profilePicture }}
                    style={globalStyles.post__userInfo_avatar}
                  />
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
                {item.likers.some(
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
      </View>
    </>
  );
}

export default HomePosts;
