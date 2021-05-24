import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import Title from "../../SpecialComponents/Title";
import PlaylistList from "./PlaylistList";
import { Ionicons } from "@expo/vector-icons";
import { getPlaylist } from "../../../../../../api";
import * as SecureStore from "expo-secure-store";

export default function Playlist({ navigation }) {
  const PLAYLIST_LAYOUT = [{ id: "0" }, { id: "1" }];
  const [PLAYLISTS, setPLAYLISTS] = useState([]);

  const [userData, setUserData] = useState([]);

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

  // Get all playlists
  useEffect(() => {
    getPlaylist()
      .then((res) => {
        setPLAYLISTS(res.data);
        console.log(PLAYLISTS);
      })
      .catch((error) => console.log(error));
  }, []);

  // const PLAYLISTS = [
  // 	{
  // 		id: '0'
  // 	},
  // 	{
  // 		id: '1',
  // 		url: 'https://i.pinimg.com/564x/d3/d3/62/d3d362c198d7483aaf3e5852be209526.jpg',
  // 		title: 'Lofi',
  // 		creator: 'Marca',
  // 	},
  // 	{
  // 		id: '2',
  // 		url: 'https://i.pinimg.com/564x/9a/54/fb/9a54fb3f939fbcd3a79bf1783d4aabaf.jpg',
  // 		title: 'Best of 2018 whfjhweofhjweihijwhejrhweprheo;jik',
  // 		creator: 'Marca',
  // 	},
  // 	{
  // 		id: '3',
  // 		url: 'https://i.pinimg.com/564x/64/63/c4/6463c4f1447a1811eef2413de528c226.jpg',
  // 		title: 'Best of 2019 and to speak of solitude sfsdjfkl aslkdfjlf lhfsd fklgjs gersjf ;lasjdflkjas dfjkw',
  // 		creator: 'Marca',
  // 	},
  // ]

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
              <TouchableOpacity style={globalStyles.playlists__createBtn}>
                <Text style={globalStyles.playlists__createBtn_text}>
                  + create new playlist
                </Text>
              </TouchableOpacity>
            ) : userData._id ===
              PLAYLISTS.map((playlistId) => playlistId.creator._id)[0] ? (
              <FlatList
                data={PLAYLISTS}
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
              <Text style={globalStyles.noAssetText}>No playlist</Text>
            )
          }
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
