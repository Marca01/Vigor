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
import PlayerProfile from "./PlayerProfile";
import COLOR from "../../../../../../constants/color";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import PlayerModal from "./PlayerModal";
import PropTypes from "prop-types";
import SongList from "../../LibraryCommon/Song/SongList";
import { SimpleLineIcons } from "@expo/vector-icons";
import { globalStyles } from "../../../../../../styles/global";

export default function SongsPlaylist({
  playlistId,
  songName,
  artistName,
  onPress,
  playlistData,
  playlistIndex,
  playlistLength,
}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [playingSong, setPlayingSong] = useState({});
  const [isBuffering, setBuffering] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [isRewinding, setRewinding] = useState(false);
  const [currentPosition, setcurrentPosition] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [songDuration, setSongDuration] = useState(0);

  const [isSongId, setIsSongId] = useState(null);

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
        { uri: song.selectedAudFile },
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
    await playbackObject.setIsLoopingAsync(true);
  };

  const changeSong = (index) => {
    if (index < 0) index = playlistLength.length - 1;
    else if (index == playlistLength.length) index = 0;

    playSong(playlistLength[index], index);
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
    <>
      <TouchableOpacity
        style={globalStyles.playlistDetail__list}
        key={playlistId}
        onPress={() => playSong(playlistData, playlistIndex)}
      >
        <View style={globalStyles.playlistDetail__list_content}>
          <Image
            source={{
              uri:
                "https://i.pinimg.com/564x/92/d4/39/92d4397cfce1cc12813775b3da352bbe.jpg",
            }}
            style={globalStyles.playlistDetail__list_thumb}
          />
          <View style={globalStyles.playlistDetail__list_info}>
            <Text
              numberOfLines={1}
              style={globalStyles.playlistDetail__list_info_title}
            >
              {songName}
            </Text>
            <View style={globalStyles.playlistDetail__list_info_user}>
              <Text style={globalStyles.playlistDetail__list_info_creator}>
                {artistName}
              </Text>
            </View>
          </View>
        </View>
        <View style={globalStyles.playlistDetail__list_options}>
          <SimpleLineIcons
            name="options"
            size={16}
            color="black"
            onPress={onPress}
          />
        </View>
      </TouchableOpacity>

      <PlayerProfile
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
        changeSong={changeSong}
        songDuration={songDuration}
      />
    </>
  );
}
