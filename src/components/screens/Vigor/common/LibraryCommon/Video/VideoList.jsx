import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function VideoList({ videoData }) {
  const video = useRef(null);

  return (
    <View style={globalStyles.videoDetail__videos}>
      <FlatList
        data={videoData}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={globalStyles.videoDetail__list_Vid}>
            <View style={globalStyles.videoDetail__list_video}>
              <Video
                ref={video}
                style={globalStyles.videoDetail__list_video_thumbVideo}
                source={{
                  uri: item.selectedVidFile,
                }}
                useNativeControls
                isLooping
                // onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
              <View style={globalStyles.videoDetail__list_video_content}>
                <View style={globalStyles.videoDetail__list_video_info}>
                  <Text
                    numberOfLines={2}
                    style={globalStyles.videoDetail__list_info_infoTitle}
                  >
                    {item.hashtag[0].replace("#", "")}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={globalStyles.videoDetail__list_info_infoVideo}
                  >
                    {item.creator.username}
                  </Text>
                </View>
                <View style={globalStyles.videoDetail__list_options}>
                  <SimpleLineIcons
                    name="options"
                    size={16}
                    color="black"
                    onPress={() => console.log(2)}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
        // horizontal
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
