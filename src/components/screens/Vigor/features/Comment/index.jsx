import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { globalStyles } from "../../../../../styles/global";
import Title from "../../common/SpecialComponents/Title";
import { comment, deleteComments } from "../../../../../api/";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import * as SecureStore from "expo-secure-store";
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { Easing } from "react-native-reanimated";

export default function Comment({ navigation, route }) {
  const CMT_LAYOUT = [{ id: "0" }, { id: "1" }];

  const [newComment, setNewComment] = useState([]);
  const [textComment, setTextComment] = useState("");

  const [userData, setUserData] = useState(null);

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

  //
  const rowActionAnimatedValue = new Animated.Value(75);
  const rowHeightAnimatedValue = new Animated.Value(80);

  // ======================================================================
  // FEATURES

  // comment
  const comments = (text, postId) => {
    comment(text, postId)
      .then((res) => {
        console.log(res.data);
        setTextComment("");
      })
      .catch((error) => console.log(error));
  };

  // delete comment
  const deleteComment = (postId, commentId) => {
    deleteComments(postId, commentId)
      .then((res) => {
        console.log(res.data);
        console.log("post id " + route.params?.item._id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={globalStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={70}
      >
        <View style={globalStyles.comment}>
          <SwipeListView
            data={route.params?.item.comments}
            renderItem={(data) => (
              <View key={data.item._id} style={globalStyles.comment__comments}>
                <View style={globalStyles.comment__user}>
                  {data.item.creator.profilePicture ? (
                    <TouchableOpacity
                      onPress={() => {
                        data.item.creator._id === userData._id
                          ? navigation.push("Profile")
                          : navigation.push("ArtistDetail", {
                              item: data.item.creator,
                            });
                      }}
                    >
                      <Image
                        source={{ uri: data.item.creator.profilePicture }}
                        style={globalStyles.comment__user_avatar}
                      />
                    </TouchableOpacity>
                  ) : (
                    <Image
                      source={require("../../../../../assets/images/noAvatar.png")}
                      style={globalStyles.comment__user_avatar}
                    />
                  )}
                  <View style={globalStyles.comment__content}>
                    <View style={globalStyles.comment__userComment}>
                      <Text style={globalStyles.comment__userComment_username}>
                        {data.item.creator.username}
                      </Text>
                      <Text style={globalStyles.comment__userComment_text}>
                        {data.item.text}
                      </Text>
                    </View>
                    <View style={globalStyles.comment__stats}>
                      <TouchableOpacity>
                        <Text style={globalStyles.comment__stats_createdAt}>
                          {moment(data.item.createdAt).fromNow()}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={globalStyles.comment__stats_likes}>
                          100 likes
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={globalStyles.comment__likeComment}>
                  <AntDesign name="hearto" size={16} color="red" />
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={(data) =>
              userData &&
              data.item.creator._id === userData._id && (
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "red",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      bottom: 0,
                      justifyContent: "center",
                      position: "absolute",
                      top: 0,
                      width: 75,
                      backgroundColor: "red",
                      right: 0,
                    }}
                    onPress={() =>
                      deleteComment(route.params?.item._id, data.item._id)
                    }
                  >
                    <MaterialIcons
                      name="delete-outline"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              )
            }
            rightOpenValue={-80}
            disableRightSwipe
            useNativeDriver={true}
          />
        </View>
        <View style={globalStyles.comment__input}>
          <TouchableOpacity style={globalStyles.comment__input_comment}>
            <TextInput
              style={globalStyles.comment__inputComment}
              placeholder="Add a comment"
              underlineColorAndroid="transparent"
              // multiline
              value={textComment}
              onChangeText={(text) => setTextComment(text)}
            />
            {textComment ? (
              <TouchableOpacity
                onPress={() => comments(textComment, route.params?.item._id)}
              >
                <Text style={globalStyles.comment__input_postBtn}>Post</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity disabled>
                <Text style={globalStyles.comment__input_postBtn_disabled}>
                  Post
                </Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
