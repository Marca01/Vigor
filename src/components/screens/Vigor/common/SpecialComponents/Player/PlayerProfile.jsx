import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import COLOR from "../../../../../../constants/color";
import TextTicker from "react-native-text-ticker";
import { Audio } from "expo-av";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import Slider from "@react-native-community/slider";
import Modal from "react-native-modal";
// import RNFetchBlob from "rn-fetch-blob";

export default function Player({
  onPress,
  isModalVisible,
  closeModal,
  playingSong,
  isPlaying,
  currentSongIndex,
  currentPosition,
  setcurrentPosition,
  setRewinding,
  updatePosition,
  pauseOrResumeSong,
  loop,
  changeSong,
  songDuration,
}) {
  const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  const displayTime = (milliSeconds) => {
    let minutes = 0;
    let seconds = Math.round(milliSeconds / 1000);
    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;
    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}`;
  };

  return (
    <Modal
      isVisible={isModalVisible}
      hasBackdrop={false}
      onBackButtonPress={closeModal}
      style={{ margin: 0 }}
    >
      <View style={globalStyles.container}>
        <TouchableOpacity
          style={globalStyles.playerHeader}
          onPress={closeModal}
        >
          <Feather name="chevron-down" size={28} color="black" />
        </TouchableOpacity>
        <View style={globalStyles.playerContent}>
          <View style={globalStyles.playerThumbnail}>
            <Image
              source={{
                uri:
                  "https://i.pinimg.com/564x/92/d4/39/92d4397cfce1cc12813775b3da352bbe.jpg",
              }}
              style={globalStyles.playerThumbnail__thumb}
            />
          </View>
          <View style={globalStyles.playerInfo}>
            <View style={globalStyles.playerInfo__heart}>
              <AntDesign
                name="heart"
                size={18}
                color="red"
                style={globalStyles.playerInfo__heartIcon}
              />
            </View>
            <View style={globalStyles.playerInfo__details}>
              <TextTicker
                style={globalStyles.playerInfo__details_name}
                duration={8000}
                // loop
                // bounce
                // repeatSpacer={50}
                shouldAnimateTreshold={0}
                marqueeDelay={500}
                useNativeDriver={true}
              >
                {playingSong?.hashtag?.[0].replace("#", "")}
              </TextTicker>
              <Text style={globalStyles.playerInfo__details_artist}>
                {playingSong?.creator?.username}
              </Text>
            </View>
            <View style={globalStyles.playerInfo__option}>
              <SimpleLineIcons
                name="options"
                size={18}
                color="black"
                style={globalStyles.playerInfo__optionIcon}
              />
            </View>
          </View>
          <View style={globalStyles.playerControl}>
            <View style={globalStyles.playerControl__track}>
              <Slider
                minimumValue={0}
                maximumValue={songDuration}
                thumbStyle={{ width: 2, height: 2 }}
                value={currentPosition}
                minimumTrackTintColor={COLOR.main}
                maximumTrackTintColor={COLOR.inputBackground}
                thumbImage={require("../../../../../../assets/images/thumbImage_slider.png")}
                onValueChange={setcurrentPosition}
                onSlidingStart={() => setRewinding(true)}
                onSlidingComplete={updatePosition}
                tapToSeek={true}
              />
              <View style={globalStyles.playerControl__track_time}>
                <Text style={globalStyles.playerControl__track_timeElapsed}>
                  {displayTime(currentPosition)}
                </Text>
                <Text style={globalStyles.playerControl__track_duration}>
                  {displayTime(songDuration)}
                </Text>
              </View>
            </View>
            <View style={globalStyles.playerControl__control}>
              <Ionicons name="shuffle" size={28} color={COLOR.gray} />
              <View style={globalStyles.playerControl__control_controller}>
                <TouchableOpacity
                  style={globalStyles.playerControl__control_prev}
                  onPress={() => changeSong(currentSongIndex - 1)}
                >
                  <MaterialIcons
                    name="skip-previous"
                    size={35}
                    style={globalStyles.playerControl__control_prevIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={globalStyles.playerControl__control_playPause}
                  onPress={pauseOrResumeSong}
                >
                  <FontAwesome5
                    name={isPlaying ? "pause" : "play"}
                    size={24}
                    color={COLOR.white}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={globalStyles.playerControl__control_next}
                  onPress={() => changeSong(currentSongIndex + 1)}
                >
                  <MaterialIcons
                    name="skip-next"
                    size={35}
                    style={globalStyles.playerControl__control_nextIcon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={loop}>
                <Ionicons name="repeat" size={30} color={COLOR.gray} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
