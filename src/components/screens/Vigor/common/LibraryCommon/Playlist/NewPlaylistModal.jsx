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
import { createPlaylist } from "../../../../../../api";
import Toast from "react-native-toast-message";

export default function NewPlaylistAddSongModal({
  isModalVisible,
  closeModal,
}) {
  const [playlistName, setPlaylistName] = useState("");

  const onChangePlaylistName = (name) => {
    setPlaylistName(name);
  };

  //   ======================================================================
  // FEATURES
  // Create playlist
  const createNewPlaylist = (newPlaylist) => {
    createPlaylist(newPlaylist)
      .then((res) => {
        console.log(res.data);
        setPlaylistName("");
        Toast.show({
          type: "success",
          position: "top",
          text1: "Playlist created",
          visibilityTime: 5000,
          autoHide: true,
          topOffset: 30,
        });
      })
      .catch((err) => console.log(err));
  };

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
                onPress={() => createNewPlaylist(playlistName)}
              >
                <Text style={globalStyles.createPlaylist__body_createBtn_label}>
                  CREATE
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={globalStyles.createPlaylist__body_createBtn_disabled}
                onPress={() => createNewPlaylist(playlistName)}
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
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Modal>
  );
}
