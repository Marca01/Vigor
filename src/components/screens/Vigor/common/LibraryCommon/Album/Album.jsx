import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../SpecialComponents/Title";
import { Feather } from "@expo/vector-icons";
import AlbumList from "./AlbumList";

export default function Album({ navigation }) {
  const ALBUMS = [
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
        <View style={globalStyles.albumTitle}>
          <Ionicons
            name="chevron-back"
            size={30}
            color="black"
            onPress={() => navigation.navigate("Library")}
            style={globalStyles.albumTitle__backIcon}
          />
          <Title title="Albums" />
        </View>
      </TouchableWithoutFeedback>

      <View style={globalStyles.albums}>
        <FlatList
          data={ALBUMS}
          renderItem={({ item }) =>
            item.id === "0" ? (
              <TouchableOpacity style={globalStyles.albums__search}>
                <Feather name="search" size={20} color="grey" />
                <TextInput
                  style={globalStyles.albums__searchInput}
                  onChangeText={(text) => onChangeSearch(text)}
                  value={search}
                  placeholder="Find albums"
                />
              </TouchableOpacity>
            ) : (
              <View style={globalStyles.albums__album}>
                <AlbumList
                  url={{ uri: item.url }}
                  albumTitle={item.title}
                  albumArtist={item.artist}
                  onPress={() =>
                    navigation.navigate("AlbumDetail", { item: item })
                  }
                />
              </View>
            )
          }
        />
      </View>
    </View>
  );
}
