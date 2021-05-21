import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Audio } from "expo-av";
import Constants from "expo-constants";
import Player from "./Player";
import { globalStyles } from "../../../../../../styles/global";
import COLOR from "../../../../../../constants/color";
import { FontAwesome5 } from "@expo/vector-icons";
// import PlayerModal from "./PlayerModal";

export default function BottomTab({ PLAY_LIST }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [playingSong, setPlayingSong] = useState({});
  const [isBuffering, setBuffering] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [isRewinding, setRewinding] = useState(false);
  const [currentPosition, setcurrentPosition] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [songDuration, setSongDuration] = useState(0);

  //   const PLAY_LIST = [
  //     {
  //       sourceUri:
  //         "https://github.com/robinhuy/robinhuy/blob/master/musics/hoa-hai-duong.mp3?raw=true",
  //       name: "Hoa Hải Đường",
  //       coverImage:
  //         "https://user-images.githubusercontent.com/12640832/100078185-d4224880-2e75-11eb-8cc0-e09b3dce7c7a.jpg",
  //       singer: "Jack",
  //       duration: 229632,
  //     },
  //     {
  //       sourceUri:
  //         "https://github.com/robinhuy/robinhuy/blob/master/musics/ai-mang-co-don-di.mp3?raw=true",
  //       name: "Ai Mang Cô Đơn Đi",
  //       coverImage:
  //         "https://user-images.githubusercontent.com/12640832/100081249-637d2b00-2e79-11eb-924b-0b4cdd4e1f9a.jpg",
  //       singer: "K-ICM, APJ",
  //       duration: 221231,
  //     },
  //     {
  //       sourceUri:
  //         "https://github.com/robinhuy/robinhuy/blob/master/musics/bong-hoa-dep-nhat.mp3?raw=true",
  //       name: "Bông Hoa Đẹp Nhất",
  //       coverImage:
  //         "https://user-images.githubusercontent.com/12640832/100080805-d76b0380-2e78-11eb-9aad-648e5cd1749e.jpg",
  //       singer: "Quân A.P",
  //       duration: 315312,
  //     },
  //     {
  //       sourceUri:
  //         "https://github.com/robinhuy/robinhuy/blob/master/musics/thien-dang.mp3?raw=true",
  //       name: "Thiên Đàng",
  //       coverImage:
  //         "https://user-images.githubusercontent.com/12640832/100080888-f10c4b00-2e78-11eb-931c-74272c77cad4.jpg",
  //       singer: "Wowy, JoliPoli",
  //       duration: 232200,
  //     },
  //   ];

  const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  const displayTime = (milliSeconds) => {
    let minutes = 0;
    let seconds = Math.round(milliSeconds / 1000);
    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;
    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}`;
  };

  const playSong = async (song, index) => {
    setModalVisible(true);
    setBuffering(true);
    setPlaying(false);
    setcurrentPosition(0);
    setCurrentSongIndex(index);
    setPlayingSong(song);

    try {
      // Unload playback when change sound
      if (playbackObject !== null) {
        await playbackObject.unloadAsync();
      }

      // Play new sound
      const { sound } = await Audio.Sound.createAsync(
        { uri: song.sourceUri },
        { shouldPlay: true }
      );
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      setPlaybackObject(sound);
    } catch (error) {
      alert("Can't play this song!");
    }
  };

  const onPlaybackStatusUpdate = ({
    isLoaded,
    isBuffering,
    isPlaying,
    error,
  }) => {
    if (!isLoaded) {
      if (error) {
        alert(`Encountered a fatal error during playback: ${error}`);
      }
    } else {
      setBuffering(isBuffering);
      setPlaying(isPlaying);
    }
  };

  const updatePosition = async (position) => {
    await playbackObject.setPositionAsync(position);
    setcurrentPosition(position);
    setRewinding(false);
  };

  const pauseOrResumeSong = async () => {
    if (isPlaying) {
      setPlaying(false);
      playbackObject.pauseAsync();
    } else {
      // if (currentPosition === playingSong.duration) {
      if (currentPosition === songDuration) {
        setcurrentPosition(0);
        await playbackObject.replayAsync();
      } else {
        await playbackObject.playAsync();
      }
    }
  };

  const loop = async () => {
    if (currentPosition === songDuration) {
      setcurrentPosition(0);
      await playbackObject.replayAsync();
    } else {
      await playbackObject.playAsync();
    }
  };

  const stopPlaySong = () => {
    setModalVisible(false);
    setPlaying(false);
    playbackObject.unloadAsync();
  };

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    // Run time slider
    if (isPlaying && !isBuffering) {
      const interval = setInterval(async () => {
        const {
          positionMillis,
          durationMillis,
        } = await playbackObject.getStatusAsync();

        // Set song duration
        setSongDuration(durationMillis);

        // Don't update position when user rewinding
        if (!isRewinding) setcurrentPosition(positionMillis || 0);

        // Stop sound if positionMillis equals durationMillis or less than 1 second
        if (positionMillis >= durationMillis - 900) {
          await playbackObject.setPositionAsync(durationMillis);
          setcurrentPosition(durationMillis);
          setPlaying(false);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, isBuffering, isRewinding]);

  return (
    //   <SafeAreaView style={styles.container}>
    <>
      <TouchableOpacity
        style={globalStyles.post__contentType__audio}
        onPress={() => playSong(PLAY_LIST)}
      >
        <TouchableOpacity
          style={globalStyles.post__contentType__audio_playIcon}
        >
          <FontAwesome5
            // name={isPlaying ? "pause" : "play"}
            name={"play"}
            size={20}
            color={COLOR.white}
          />
        </TouchableOpacity>
        <View style={globalStyles.post__contentType__audio_waveform}>
          <Image
            source={{
              uri:
                "https://cdn2.iconfinder.com/data/icons/ui-elements-23/50/Exports_sound-wave-waveform-ui-512.png",
            }}
            style={globalStyles.post__contentType__audio_waveform_img}
          />
          <Image
            source={{
              uri:
                "https://cdn2.iconfinder.com/data/icons/ui-elements-23/50/Exports_sound-wave-waveform-ui-512.png",
            }}
            style={globalStyles.post__contentType__audio_waveform_img}
          />
          <Image
            source={{
              uri:
                "https://cdn2.iconfinder.com/data/icons/ui-elements-23/50/Exports_sound-wave-waveform-ui-512.png",
            }}
            style={globalStyles.post__contentType__audio_waveform_img}
          />
          <Image
            source={{
              uri:
                "https://cdn2.iconfinder.com/data/icons/ui-elements-23/50/Exports_sound-wave-waveform-ui-512.png",
            }}
            style={globalStyles.post__contentType__audio_waveform_img}
          />
        </View>
      </TouchableOpacity>

      <Player
        isModalVisible={isModalVisible}
        closeModal={stopPlaySong}
        playingSong={playingSong}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        currentSongIndex={currentSongIndex}
        currentPosition={currentPosition}
        setcurrentPosition={setcurrentPosition}
        setRewinding={setRewinding}
        updatePosition={updatePosition}
        pauseOrResumeSong={pauseOrResumeSong}
        loop={loop}
        songDuration={songDuration}
      />
    </>
    //   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    padding: 15,
    marginBottom: 10,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#f39220",
  },
  listItem: {
    flexDirection: "row",
    margin: 15,
  },
  coverImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 15,
  },
  songName: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#686868",
  },
  songInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: 10,
  },
  singerName: {
    fontSize: 14,
    color: "#9a9a9a",
  },
  songDuration: {
    fontSize: 14,
    color: "#9a9a9a",
  },
});
