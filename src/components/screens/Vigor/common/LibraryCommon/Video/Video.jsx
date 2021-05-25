import React, { useEffect, useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import Title from "../../SpecialComponents/Title";
import { Feather } from "@expo/vector-icons";
import { globalStyles } from "../../../../../../styles/global";
import VideoList from "./VideoList";
import * as SecureStore from "expo-secure-store";
import { getMyPosts } from "../../../../../../api";

export default function Video({ navigation }) {
  const VIDEO_LAYOUT = [{ id: "0" }, { id: "1" }];

  const [VIDEOS, setVIDEOS] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getMyPosts()
      .then((res) => {
        setVIDEOS(res.data);
        // console.log(VIDEOS.map((postId) => postId._id).map((id) => id));
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

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.videoTitle}>
          <Ionicons
            name="chevron-back"
            size={30}
            color="black"
            onPress={() => navigation.navigate("Library")}
            style={globalStyles.videoTitle__backIcon}
          />
          <Title title="Videos" />
        </View>
      </TouchableWithoutFeedback>

      <View style={globalStyles.videos}>
        <FlatList
          data={VIDEO_LAYOUT}
          renderItem={({ item }) =>
            item.id === "0" ? (
              <TouchableOpacity style={globalStyles.videos__search}>
                <Feather name="search" size={20} color="grey" />
                <TextInput
                  style={globalStyles.videos__searchInput}
                  onChangeText={(text) => onChangeSearch(text)}
                  value={search}
                  placeholder="Find videos"
                />
              </TouchableOpacity>
            ) : (
              <View style={globalStyles.videos__video}>
                <VideoList
                  videoData={VIDEOS.filter(
                    (videoPost) => videoPost.selectedVidFile
                  )}
                />
              </View>
            )
          }
        />
      </View>
    </View>
  );
}
