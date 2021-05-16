import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../../../../styles/global";
import AlbumDetailLayout from "./AlbumDetailLayout";

export default function AlbumDetail({ navigation, route }) {
  const ALBUM_DETAIL = [
    {
      id: "1",
      detail_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn54en2MZIyiX1LCL0NKJGYZAaMZWxb__C1Q&usqp=CAU",
      detail_title: "Old Town Road - Remixfwefwe",
      detail_artists: "Lil Nas X, Billy Ray Cyrus",
    },
    {
      id: "2",
      detail_url:
        "https://i.pinimg.com/564x/8a/c4/a6/8ac4a6013eb7dceba9b140643985e177.jpg",
      detail_title: "bad guy",
      detail_artists: "Billie Eilish",
    },
    {
      id: "3",
      detail_url:
        "https://i.pinimg.com/564x/78/07/43/780743bd9fd6dde59b5e3bf076f3e2c3.jpg",
      detail_title: "Senorita",
      detail_artists: "Shawn Mendes, Camila Cabello",
    },
  ];

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.albumDetail__backBtn}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
          style={globalStyles.albumDetail__backIcon}
        />
      </View>
      <View style={globalStyles.albumDetail__content}>
        <FlatList
          data={[route.params?.item]}
          renderItem={({ item }) => (
            <AlbumDetailLayout
              thumbUrl={{ uri: item.url }}
              title={item.title}
              creator={item.artist}
              albumData={ALBUM_DETAIL}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
