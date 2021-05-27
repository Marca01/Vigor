import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Modal from "react-native-modal";
import { globalStyles } from "../../../../../../styles/global";
import { AntDesign } from "@expo/vector-icons";
import COLOR from "../../../../../../constants/color";
import { addPostToPlaylist, createPlaylist } from "../../../../../../api";

export default function NewPlaylistAddSongModal({
  isModalVisible,
  closeModal,
  postId,
}) {
  const [playlistName, setPlaylistName] = useState("");

  const onChangePlaylistName = (name) => {
    setPlaylistName(name);
  };

  //   ======================================================================
  // FEATURES
  // Create playlist
  const createNewPlaylistAddSong = (newPlaylist) => {
    createPlaylist(newPlaylist)
      .then((res) => {
        addPostToPlaylist(postId, res.data._id)
          .then((res) => {
            console.log("song added" + res.data);
          })
          .catch((err) => console.log(err));
        console.log(res.data);
        console.log("postId " + postId);
        setPlaylistName("");
      })
      .catch((err) => console.log(err));
  };

  //   const addPostsToPlaylist = (postId, playlistId) => {
  //     addPostToPlaylist(postId, playlistId)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //     // sheetPlaylistRef.current.snapTo(0);
  //   };

  return (
    <Modal isVisible={isModalVisible} hasBackdrop={false} style={{ margin: 0 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
          <View style={globalStyles.createPlaylist__header}>
            <AntDesign
              name="close"
              size={30}
              color="black"
              style={globalStyles.playlistTitle__backIcon}
              onPress={closeModal}
            />
          </View>
          <View style={globalStyles.createPlaylist__body}>
            <View style={globalStyles.createPlaylist__body_title}>
              <Text style={globalStyles.createPlaylist__body_title_text}>
                Name your playlist
              </Text>
            </View>
            <TouchableOpacity style={globalStyles.createPlaylist__body_input}>
              <TextInput
                style={globalStyles.createPlaylist__body_nameInput}
                onChangeText={(text) => onChangePlaylistName(text)}
                value={playlistName}
                placeholder="Playlist name"
                placeholderTextColor={COLOR.grey}
              />
            </TouchableOpacity>
            {playlistName ? (
              <TouchableOpacity
                style={globalStyles.createPlaylist__body_createBtn}
                onPress={() => createNewPlaylistAddSong(playlistName)}
              >
                <Text style={globalStyles.createPlaylist__body_createBtn_label}>
                  CREATE
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={globalStyles.createPlaylist__body_createBtn_disabled}
                onPress={() => createNewPlaylistAddSong(playlistName)}
                disabled
              >
                <Text style={globalStyles.createPlaylist__body_createBtn_label}>
                  CREATE
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
