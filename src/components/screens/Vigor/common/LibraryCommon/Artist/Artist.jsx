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
import ArtistList from "./ArtistList";
import { StackActions } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

export default function Artist({ navigation }) {
  const ARTIST_LAYOUT = [{ id: "0" }, { id: "1" }];

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

  // const ARTISTS = [
  //   {
  //     id: "0",
  //   },
  //   {
  //     id: "1",
  //     url:
  //       "https://i.pinimg.com/564x/68/fa/e9/68fae9281f9f74e113b3224a50b13aac.jpg",
  //     artist: "Ava Max",
  //     songs: 10,
  //     listeners: "10M",
  //     followers: "10.5k",
  //   },
  //   {
  //     id: "2",
  //     url:
  //       "https://i.pinimg.com/564x/ac/64/61/ac6461fbc00057141005b768aedf7a3b.jpg",
  //     artist: "Alan Walker",
  //     songs: 15,
  //     listeners: "9M",
  //     followers: "1.5k",
  //   },
  //   {
  //     id: "3",
  //     url:
  //       "https://i.pinimg.com/564x/42/74/78/427478916a5f8a0923653bb131342633.jpg",
  //     artist: "Shawn Mendes lkfsd fkdsf f ưe",
  //     songs: 18,
  //     listeners: "30M",
  //     followers: "35.8k",
  //   },
  // ];

  const [search, setSearch] = useState("");

  const onChangeSearch = (searchText) => {
    setSearch(searchText);
  };

  // let uniqueFollower = [...new Set([userData.following.map((id) => id._id)])];
  // console.log(uniqueFollower);

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.artistTitle}>
          <Ionicons
            name="chevron-back"
            size={30}
            color="black"
            onPress={() => navigation.navigate("Library")}
            style={globalStyles.artistTitle__backIcon}
          />
          <Title title="Artists" />
        </View>
      </TouchableWithoutFeedback>

      <View style={globalStyles.artists}>
        <FlatList
          data={ARTIST_LAYOUT}
          renderItem={({ item }) =>
            item.id === "0" ? (
              <TouchableOpacity style={globalStyles.artists__search}>
                <Feather name="search" size={20} color="grey" />
                <TextInput
                  style={globalStyles.artists__searchInput}
                  onChangeText={(text) => onChangeSearch(text)}
                  value={search}
                  placeholder="Find artists"
                />
              </TouchableOpacity>
            ) : (
              <FlatList
                data={userData.following}
                renderItem={({ item }) =>
                  item.followers && (
                    <View style={globalStyles.artists__artist}>
                      <ArtistList
                        url={item.profilePicture}
                        artistName={item.username}
                        artistFollowersNumber={item.followers.length}
                        onPress={() =>
                          navigation.navigate("ArtistDetail", { item: item })
                        }
                      />
                    </View>
                  )
                }
                keyExtractor={(item) => item._id}
              />
            )
          }
        />
      </View>
    </View>
  );
}
