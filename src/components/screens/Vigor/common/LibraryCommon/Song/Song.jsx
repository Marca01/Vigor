import React, { useState } from "react";
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

export default function Song({ navigation }) {
  const SONGS = [
    {
      id: "0",
    },
    {
      id: "1",
      url:
        "https://i.pinimg.com/564x/c9/4f/ea/c94fea83c106aae300adba72a4941051.jpg",
      title: "Ava Max fowenjfwuof",
      artist: "Ava Max",
      // listeners: '10M',
      // followers: '10.5k'
    },
    {
      id: "2",
      url:
        "https://i.pinimg.com/564x/57/88/00/5788002984cabcfff17007b467421140.jpg",
      title: "Alan Walker wfwefwef",
      artist: "Alan Walker",
      // listeners: '9M',
      // followers: '1.5k'
    },
    {
      id: "3",
      url:
        "https://i.pinimg.com/564x/e1/a3/de/e1a3de3ac657755084807f547c12064e.jpg",
      title:
        "Shawn Mendes wfwefwef folfow efwjf wjf oweikf wefjwefj wejf ;woekfjw ekofjweo foweif jf",
      artist:
        "Shawn Mendes lkfsd fkdsf f ưe w kfjwefkwf wkf elf jwf jowefj wijfowjfow jfwe fiwejf flk fiowe of",
      // listeners: '30M',
      // followers: '35.8k'
    },
  ];

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
          data={SONGS}
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
                <SongList
                  url={{ uri: item.url }}
                  songName={item.title}
                  songArtist={item.artist}
                />
              </View>
            )
          }
        />
      </View>
    </View>
  );
}
