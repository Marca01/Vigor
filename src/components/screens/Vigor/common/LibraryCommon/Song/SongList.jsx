import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function SongList({ url, songName, songArtist }) {
  return (
    <TouchableOpacity style={globalStyles.songs__list}>
      <View style={globalStyles.songs__list_content}>
        <Image source={url} style={globalStyles.songs__list_avatar} />
        <View style={globalStyles.songs__list_info}>
          <Text numberOfLines={2} style={globalStyles.songs__list_info_name}>
            {songName}
          </Text>
          <Text numberOfLines={1} style={globalStyles.songs__list_info_artist}>
            {songArtist}
          </Text>
        </View>
      </View>
      <View style={globalStyles.songs__list_options}>
        <SimpleLineIcons
          name="options"
          size={16}
          color="black"
          onPress={() => console.log(2)}
        />
      </View>
    </TouchableOpacity>
  );
}
