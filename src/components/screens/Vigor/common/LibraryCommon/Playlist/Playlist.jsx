import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import Title from "../../SpecialComponents/Title";
import PlaylistList from "./PlaylistList";
import { Ionicons } from "@expo/vector-icons";
import { getPlaylist } from "../../../../../../api";
import * as SecureStore from "expo-secure-store";
import NewPlaylistModal from "./NewPlaylistModal";

export default function Playlist({ navigation }) {
  const PLAYLIST_LAYOUT = [{ id: "0" }, { id: "1" }];
  const [PLAYLISTS, setPLAYLISTS] = useState([]);

  const [userData, setUserData] = useState([]);

  const [isModalVisible, setModalVisible] = useState(false);

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
  // Get all playlists
  useEffect(() => {
    getPlaylist()
      .then((res) => {
        setPLAYLISTS(res.data);
        console.log(PLAYLISTS);
      })
      .catch((error) => console.log(error));
  }, []);

  // ====================================================================
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.playlistTitle}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => navigation.navigate("Library")}
          style={globalStyles.playlistTitle__backIcon}
        />
        <Title title="Playlists" />
      </View>
      <View style={globalStyles.playlists}>
        <FlatList
          data={PLAYLIST_LAYOUT}
          renderItem={({ item }) =>
            item.id === "0" ? (
              <TouchableOpacity
                style={globalStyles.playlists__createBtn}
                onPress={toggleModal}
              >
                <Text style={globalStyles.playlists__createBtn_text}>
                  + create new playlist
                </Text>
              </TouchableOpacity>
            ) : PLAYLISTS ? (
              <FlatList
                data={PLAYLISTS.filter(
                  (playlistId) => playlistId.creator._id === userData._id
                )}
                renderItem={({ item }) => (
                  <View style={globalStyles.playlists__playlist}>
                    <PlaylistList
                      url={{
                        uri:
                          "https://i.pinimg.com/564x/d3/d3/62/d3d362c198d7483aaf3e5852be209526.jpg",
                      }}
                      playlistTitle={item.title}
                      playlistCreator={item.creator.username}
                      onPress={() =>
                        navigation.navigate("PlaylistDetail", {
                          item: item,
                        })
                      }
                    />
                  </View>
                )}
                keyExtractor={(item) => item._id}
              />
            ) : (
              <View style={{ flex: 1, backgroundColor: "red" }}>
                <Text>No playlist</Text>
              </View>
            )
          }
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <NewPlaylistModal
        isModalVisible={isModalVisible}
        closeModal={toggleModal}
      />
    </View>
  );
}
