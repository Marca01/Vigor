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
import { globalStyles } from "../../../../../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../SpecialComponents/Title";
import { Feather } from "@expo/vector-icons";
import SongList from "./SongList";
import * as SecureStore from "expo-secure-store";
import { getMyPosts } from "../../../../../../api";
import SongsLibrary from "../../SpecialComponents/Player/SongsLibrary";

export default function Song({ navigation }) {
  const SONG_LAYOUT = [{ id: "0" }, { id: "1" }];

  const [SONGS, setSONGS] = useState([]);
  const [userData, setUserData] = useState([]);

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

  return (
    <View style={globalStyles.container}>
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
                />
              </View>
            )
          }
        />
      </View>
    </View>
  );
}
