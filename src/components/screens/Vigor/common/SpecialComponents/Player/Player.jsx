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
  isBuffering,
  currentSongIndex,
  currentPosition,
  setcurrentPosition,
  setRewinding,
  updatePosition,
  pauseOrResumeSong,
  loop,
  songDuration,
}) {
  const opacity = isBuffering ? 0.5 : 1;

  // const PLAYERS = [
  //   {
  //     id: "1",
  //     url:
  //       "https://i.pinimg.com/564x/8d/e0/73/8de073c8e26147a67165fb701b878c89.jpg",
  //     name: "Demooo jfok fjwoef kjwef jwfjwe fjwejf wjfopwejf owejfowe jfopw",
  //     artist: "KHale",
  //     songUrl: require("../../../../../../assets/audio/demo.mp3"),
  //   },
  //   {
  //     id: "2",
  //     url:
  //       "https://i.pinimg.com/564x/19/80/73/198073be5e1abcc16858e919cf4f5d54.jpg",
  //     name: "Demooo jfok fjwoef kjwef jwfjwe fjwejf wjfopwejf owejfowe jfopw",
  //     artist: "KHale 2",
  //     songUrl: require("../../../../../../assets/audio/Synth-Whoosh-Small-01.m4a"),
  //   },
  //   {
  //     id: "2",
  //     url:
  //       "https://i.pinimg.com/564x/19/80/73/198073be5e1abcc16858e919cf4f5d54.jpg",
  //     name: "Demooo",
  //     artist: "KHale 3",
  //     songUrl: require("../../../../../../assets/audio/demo.mp3"),
  //   },
  // ];

  // const trackPlayerInit = async () => {
  //   // Set up the player
  //   await TrackPlayer.setupPlayer();

  //   // Add a track to the queue
  //   await TrackPlayer.add({
  //     id: "trackId",
  //     url: require("../../../../assets/audio/demo.mp3"),
  //     title: "Track Title",
  //     artist: "Track Artist",
  //     // artwork: require("track.png"),
  //   });

  //   // Start playing it
  //   // await TrackPlayer.play();
  //   return true;
  // };
  // // start();

  // //state to manage whether track player is initialized or not
  // const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  // //initialize the TrackPlayer when the App component is mounted
  // useEffect(() => {
  //   const startPlayer = async () => {
  //     let isInit = await trackPlayerInit();
  //     setIsTrackPlayerInit(isInit);
  //   };
  //   startPlayer();
  // }, []);

  // //start playing the TrackPlayer when the button is pressed
  // const onButtonPressed = () => {
  //   TrackPlayer.play();
  // };

  // const [sound, setSound] = useState();

  // async function playSound(aud) {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(
  //     // require("../../../../../assets/audio/demo.mp3")
  //     aud
  //   );
  //   setSound(sound);

  //   console.log("Playing Sound");
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // const [isAlreadyPlay, setIsAlreadyPlay] = useState(false);
  // const [duration, setDuration] = useState("00:00:00");
  // const [timeElapsed, setTimeElapsed] = useState("00:00:00");
  // const [percent, setPercent] = useState(0);
  // const [current_track, setCurrentTrack] = useState(0);
  // const [inprogress, setInprogress] = useState(false);
  // // const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());
  // const audioRecorderPlayer = new AudioRecorderPlayer();

  // let dirs = RNFetchBlob.fs.dirs.DocumentDir;

  const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  const displayTime = (milliSeconds) => {
    let minutes = 0;
    let seconds = Math.round(milliSeconds / 1000);
    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;
    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}`;
  };

  // const changeTime = async () => {
  //   // 50 / duration
  //   let seektime = (seconds / 100) * duration;
  //   setTimeElapsed(seektime);
  //   audioRecorderPlayer.seekToPlayer(seektime);
  // };

  // const handleStart = async (aud) => {
  //   setIsAlreadyPlay(true);
  //   // setInprogress(true);
  //   // // const path = require("../../../../assets/audio/demo.mp3");
  //   // // const path = "file://" + "/" + PLAYERS[current_track].songUrl;
  //   // audioRecorderPlayer.startPlayer("../../../../assets/audio/demo.mp3");
  //   // audioRecorderPlayer.setVolume(1);

  //   // audioRecorderPlayer.addPlayBackListener(async (e) => {
  //   //   if (e.current_position === e.duration) {
  //   //     audioRecorderPlayer.stopPlayer();
  //   //   }
  //   //   let percent = Math.round(
  //   //     (Math.floor(e.current_position) / Math.floor(e.duration)) * 100
  //   //   );
  //   //   setTimeElapsed(e.current_position);
  //   //   setPercent(percent);
  //   //   setDuration(e.duration);
  //   // });

  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(
  //     // require("../../../../../assets/audio/demo.mp3")
  //     aud
  //   );
  //   setSound(sound);

  //   console.log("Playing Sound");
  //   await sound.playAsync();
  // };

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // const handlePause = async (aud) => {
  //   setIsAlreadyPlay(false);
  //   await sound.pauseAsync();
  // };

  // // const handleResume = async (aud) => {
  // //   setIsAlreadyPlay(true);
  // //   handlePause().then(async () => {
  // //     await sound.playAsync();
  // //   });
  // // };

  // const handleStop = async (aud) => {
  //   // setIsAlreadyPlay(true);
  //   await sound.stopAsync();
  // };

  // const handleNext = async (audStart) => {
  //   let curr_track = PLAYERS[current_track];
  //   let current_index = PLAYERS.indexOf(curr_track) + 1;
  //   if (current_index === PLAYERS.length) {
  //     setCurrentTrack(1);
  //   } else {
  //     setCurrentTrack((current_track) => current_track + 1);
  //   }
  //   handleStop().then(async () => {
  //     await handleStart(audStart);
  //   });
  //   console.log(current_index);
  // };

  // const handlePrev = async (audStart) => {
  //   let curr_track = PLAYERS[current_track];
  //   let current_index = PLAYERS.indexOf(curr_track);
  //   if (current_index === 0) {
  //     setCurrentTrack(PLAYERS.length - 1);
  //   } else {
  //     setCurrentTrack((current_track) => current_track - 1);
  //   }
  //   handleStop().then(async () => {
  //     await handleStart(audStart);
  //   });
  //   console.log(current_index);
  // };

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
              source={{ uri: playingSong.coverImage }}
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
                {/* {PLAYERS[current_track].name} */}
                {playingSong.name}
              </TextTicker>
              <Text style={globalStyles.playerInfo__details_artist}>
                {playingSong.singer}
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
                disabled={isBuffering}
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
                  // onPress={() => loop(currentSongIndex - 1)}
                  // disabled={isBuffering}
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
                  disabled={isBuffering}
                >
                  <FontAwesome5
                    name={isPlaying ? "pause" : "play"}
                    size={24}
                    color={COLOR.white}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={globalStyles.playerControl__control_next}
                  // onPress={() => loop(currentSongIndex + 1)}
                  // disabled={isBuffering}
                >
                  <MaterialIcons
                    name="skip-next"
                    size={35}
                    style={globalStyles.playerControl__control_nextIcon}
                  />
                </TouchableOpacity>
              </View>
              <Ionicons
                name="repeat"
                size={30}
                color={COLOR.gray}
                onPress={() => loop()}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
