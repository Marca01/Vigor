import React, { useState } from "react";
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
} from "react-native";
import { globalStyles } from "../../../../../styles/global";
import Title from "../../common/SpecialComponents/Title";
import { comment } from "../../../../../api/";
import { AntDesign } from "@expo/vector-icons";

export default function Comment({ navigation, route }) {
  const CMT_LAYOUT = [{ id: "0" }, { id: "1" }];

  const [newComment, setNewComment] = useState([]);
  const [textComment, setTextComment] = useState("");

  // ======================================================================
  // FEATURES

  // comment
  const comments = (text, postId) => {
    comment(text, postId)
      .then((res) => console.log(res.data))
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
          <FlatList
            data={route.params?.item.comments}
            keyboardDismissMode="on-drag"
            renderItem={({ item }) =>
              !item.text ? (
                <View style={{ flex: 1 }}>
                  <Text>No comment</Text>
                </View>
              ) : (
                <View style={globalStyles.comment__comments}>
                  <View style={globalStyles.comment__user}>
                    <Image
                      source={{ uri: item.creator.profilePicture }}
                      style={globalStyles.comment__user_avatar}
                    />
                    <View style={globalStyles.comment__content}>
                      <View style={globalStyles.comment__userComment}>
                        <Text
                          style={globalStyles.comment__userComment_username}
                        >
                          {item.creator.username}
                        </Text>
                        <Text style={globalStyles.comment__userComment_text}>
                          {item.text}
                        </Text>
                      </View>
                      <View style={globalStyles.comment__stats}>
                        <TouchableOpacity>
                          <Text style={globalStyles.comment__stats_createdAt}>
                            2h ago
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
              )
            }
            keyExtractor={(item) => item._id}
            keyExtractor={(item) => item.id}
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
