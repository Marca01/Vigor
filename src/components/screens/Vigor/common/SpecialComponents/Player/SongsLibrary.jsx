import React, { useCallback, useEffect, useState } from "react";
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
import PlayerProfile from "./PlayerProfile";
import { globalStyles } from "../../../../../../styles/global";
import COLOR from "../../../../../../constants/color";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import PlayerModal from "./PlayerModal";
import PropTypes from "prop-types";
import SongList from "../../LibraryCommon/Song/SongList";
import NewPlaylistAddSongModal from "../../LibraryCommon/Playlist/NewPlaylistAddSongModal";

export default function SongsLibrary({
  PLAY_LIST,
  onOptionsPress,
  songPId,
  isModalPlaylistVisible,
  toggleModal,
}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [playingSong, setPlayingSong] = useState({});
  // const [isBuffering, setBuffering] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [isRewinding, setRewinding] = useState(false);
  const [currentPosition, setcurrentPosition] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [songDuration, setSongDuration] = useState(0);

  const [isSongId, setIsSongId] = useState(null);

  const [playlistAddSongId, setPlaylistAddSongId] = useState("");

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
        { uri: song.selectedAudFile },
        { shouldPlay: true }
      );
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      setPlaybackObject(sound);
    } catch (error) {
      alert("Can't play this song!");
    }
  };

  const onPlaybackStatusUpdate = ({ isLoaded, isPlaying, error }) => {
    if (!isLoaded) {
      if (error) {
        alert(`Encountered a fatal error during playback: ${error}`);
      }
    } else {
      setPlaying(isPlaying);
    }
  };

  const updatePosition = async (a) => {
    await playbackObject.setPositionAsync(a);
    setcurrentPosition(a);
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
    await playbackObject.setIsLoopingAsync(true);
  };

  const changeSong = (index) => {
    if (index < 0) index = PLAY_LIST.length - 1;
    else if (index == PLAY_LIST.length) index = 0;

    playSong(PLAY_LIST[index], index);
  };

  const stopPlaySong = () => {
    setModalVisible(false);
    setPlaying(false);
    playbackObject.unloadAsync();
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(async () => {
        const {
          positionMillis,
          durationMillis,
        } = await playbackObject.getStatusAsync();

        // Set song duration
        setSongDuration(durationMillis);

        if (!isRewinding) setcurrentPosition(positionMillis || 0);

        if (positionMillis >= durationMillis - 900) {
          await playbackObject.setPositionAsync(durationMillis);
          setcurrentPosition(durationMillis);
          setPlaying(false);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, isRewinding]);

  return (
    <>
      {PLAY_LIST.map(
        (item, index) =>
          item.selectedAudFile && (
            <>
              <SongList
                songData={item}
                onPress={() => playSong(item, index)}
                onOptionsPress={onOptionsPress}
                isModalPlaylistVisible={isModalPlaylistVisible}
                toggleModal={toggleModal}
                // songId={(songId) => setPlaylistAddSongId(songId)}
              />
              {/* <NewPlaylistAddSongModal
                isModalVisible={isModalPlaylistVisible}
                closeModal={toggleModal}
                postId={item._id}
              /> */}
            </>
          )
      )}
      <PlayerProfile
        isModalVisible={isModalVisible}
        closeModal={stopPlaySong}
        playingSong={playingSong}
        isPlaying={isPlaying}
        // isBuffering={isBuffering}
        currentSongIndex={currentSongIndex}
        currentPosition={currentPosition}
        setcurrentPosition={setcurrentPosition}
        setRewinding={setRewinding}
        updatePosition={updatePosition}
        pauseOrResumeSong={pauseOrResumeSong}
        loop={loop}
        changeSong={changeSong}
        songDuration={songDuration}
      />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//   },
//   header: {
//     padding: 15,
//     marginBottom: 10,
//   },
//   headerTitle: {
//     fontWeight: "bold",
//     fontSize: 24,
//     color: "#f39220",
//   },
//   listItem: {
//     flexDirection: "row",
//     margin: 15,
//   },
//   coverImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 6,
//     marginRight: 15,
//   },
//   songName: {
//     fontWeight: "bold",
//     fontSize: 16,
//     lineHeight: 24,
//     color: "#686868",
//   },
//   songInfo: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     flex: 1,
//     marginTop: 10,
//   },
//   singerName: {
//     fontSize: 14,
//     color: "#9a9a9a",
//   },
//   songDuration: {
//     fontSize: 14,
//     color: "#9a9a9a",
//   },
// });
