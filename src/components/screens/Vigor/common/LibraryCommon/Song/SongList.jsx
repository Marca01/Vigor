import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import { SimpleLineIcons } from "@expo/vector-icons";
import NewPlaylistAddSongModal from "../Playlist/NewPlaylistAddSongModal";

export default function SongList({
  songData,
  onPress,
  onOptionsPress,
  songId,
  isModalPlaylistVisible,
  toggleModal,
}) {
  return (
    <>
      <TouchableOpacity
        style={globalStyles.songs__list}
        onPress={onPress}
        key={songData._id}
      >
        <View style={globalStyles.songs__list_content}>
          <Image
            source={{
              uri:
                "https://i.pinimg.com/564x/92/d4/39/92d4397cfce1cc12813775b3da352bbe.jpg",
            }}
            style={globalStyles.songs__list_avatar}
          />
          <View style={globalStyles.songs__list_info}>
            <Text numberOfLines={2} style={globalStyles.songs__list_info_name}>
              {songId && songId(songData._id)}
              {songData.hashtag[0].replace("#", "")}
            </Text>
            <Text
              numberOfLines={1}
              style={globalStyles.songs__list_info_artist}
            >
              {songData.creator.username}
            </Text>
          </View>
        </View>
        <View style={globalStyles.songs__list_options}>
          <SimpleLineIcons
            name="options"
            size={16}
            color="black"
            onPress={onOptionsPress}
          />
        </View>
      </TouchableOpacity>
      <NewPlaylistAddSongModal
        isModalVisible={isModalPlaylistVisible}
        closeModal={toggleModal}
        postId={songData._id}
      />
    </>
  );
}
