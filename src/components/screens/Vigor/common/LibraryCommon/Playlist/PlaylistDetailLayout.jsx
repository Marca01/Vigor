import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../../../../styles/global";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { removePostFromPlaylist } from "../../../../../../api";
import SongsPlaylist from "../../SpecialComponents/Player/SongsPlaylist";

export default function PlaylistDetailLayout({
  thumbUrl,
  title,
  creator,
  songs,
  playlistId,
  playlistData,
  onPress,
  onOptionPress,
}) {
  return (
    <>
      <View style={globalStyles.playlistDetail}>
        <View style={globalStyles.playlistDetail__intro}>
          <View style={globalStyles.playlistDetail__info}>
            <Image
              source={thumbUrl}
              style={globalStyles.playlistDetail__thumb}
            />
            <View style={globalStyles.playlistDetail__general}>
              <View style={globalStyles.playlistDetail__general_info}>
                <View style={globalStyles.playlistDetail__general_stats}>
                  <Text
                    style={
                      globalStyles.playlistDetail__general_stats_quantityNumber
                    }
                  >
                    {songs} {songs > 1 ? "songs" : "song"}
                  </Text>
                </View>
                <Text
                  numberOfLines={1}
                  style={globalStyles.playlistDetail__general_title}
                >
                  {title}
                </Text>
                {/* Add link to profile */}
                <Text style={globalStyles.playlistDetail__general_creator}>
                  {creator}
                </Text>
              </View>
              <View style={globalStyles.playlistDetail__general_options}>
                <Image
                  source={require("../../../../../../assets/images/addToLibrary.png")}
                  resizeMode="contain"
                  style={globalStyles.playlistDetail__general_optionsImg}
                />
                <SimpleLineIcons
                  name="options"
                  size={20}
                  color="black"
                  onPress={onPress}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={globalStyles.playlistDetail__btn}>
          <TouchableOpacity style={globalStyles.playlistDetail__playBtn}>
            <Ionicons name="shuffle" size={24} color="white" />
            <Text style={globalStyles.playlistDetail__playBtn_label}>
              Shuffle
            </Text>
          </TouchableOpacity>
        </View>
        <View style={globalStyles.playlistDetail__detail}>
          {playlistData.length ? (
            playlistData.map((playlistItem, index) => (
              <SongsPlaylist
                playlistId={playlistItem._id}
                songName={playlistItem.hashtag?.[0].replace("#", "")}
                artistName={playlistItem.creator.username}
                onPress={onOptionPress}
                playlistData={playlistItem}
                playlistIndex={index}
                playlistLength={playlistData}
              />
            ))
          ) : (
            <View style={globalStyles.playlistDetail__emptyPlaylist}>
              <Text style={globalStyles.playlistDetail__emptyPlaylist_label}>
                Add a song 🥰
              </Text>
            </View>
          )}
        </View>
      </View>
      {/* </Animated.View> */}
    </>
  );
}
