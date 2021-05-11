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
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { globalStyles } from "../../../../styles/global";
import Title from "../common/SpecialComponents/Title";

export default function Explore() {
  const LAYOUT = [{ id: "0" }, { id: "1" }];
  const GENRES = [
    {
      id: "1",
      url:
        "https://i.pinimg.com/564x/c9/4f/ea/c94fea83c106aae300adba72a4941051.jpg",
      genre: "Rap",
    },
    {
      id: "2",
      url:
        "https://i.pinimg.com/564x/57/88/00/5788002984cabcfff17007b467421140.jpg",
      genre: "Pop",
    },
    {
      id: "3",
      url:
        "https://i.pinimg.com/564x/e1/a3/de/e1a3de3ac657755084807f547c12064e.jpg",
      genre: "Indie",
    },
    {
      id: "4",
      url:
        "https://i.pinimg.com/564x/e1/a3/de/e1a3de3ac657755084807f547c12064e.jpg",
      genre: "R&B",
    },
    {
      id: "5",
      url:
        "https://i.pinimg.com/564x/e1/a3/de/e1a3de3ac657755084807f547c12064e.jpg",
      genre: "Soul",
    },
    {
      id: "6",
      url:
        "https://i.pinimg.com/564x/e1/a3/de/e1a3de3ac657755084807f547c12064e.jpg",
      genre: "EDM",
    },
  ];

  const [search, setSearch] = useState("");

  const onChangeSearch = (searchText) => {
    setSearch(searchText);
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.exploreTitle}>
          <Title title="Explore" />
        </View>
      </TouchableWithoutFeedback>

      <View style={globalStyles.explore}>
        <FlatList
          data={LAYOUT}
          renderItem={({ item, index }) =>
            item.id === "0" ? (
              <TouchableOpacity style={globalStyles.explore__search}>
                <Feather name="search" size={20} color="grey" />
                <TextInput
                  style={globalStyles.explore__searchInput}
                  onChangeText={(text) => onChangeSearch(text)}
                  value={search}
                  placeholder="Find artists, songs or videos"
                />
              </TouchableOpacity>
            ) : (
              <FlatList
                data={GENRES}
                renderItem={({ item }) => (
                  <View style={globalStyles.explore__explore}>
                    <TouchableOpacity style={globalStyles.explore__row}>
                      <ImageBackground
                        source={{ uri: item.url }}
                        style={globalStyles.explore__genreAvatar}
                        imageStyle={{ borderRadius: 150 / 2 }}
                        blurRadius={6}
                      >
                        <Text
                          numberOfLines={1}
                          style={globalStyles.explore__genre}
                        >
                          {item.genre}
                        </Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
              />
            )
          }
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
