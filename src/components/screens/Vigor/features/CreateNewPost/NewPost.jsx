import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Platform,
  Modal,
} from "react-native";
import { globalStyles } from "../../../../../styles/global";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { createPost, createVideoPost } from "../../../../../api";

export default function NewPost({ navigation }) {
  const [title, setTitle] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  // let isLoading = false;

  const [video, setVideo] = useState(null);
  const [selectedVidFile, setSelectedVidFile] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const videoRef = useRef(null);
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setVideo(result.uri);
    }
  };

  // ====================================================================
  // FEATURES

  // Create new post with only title
  const uploadNewPost = (event) => {
    // setIsLoading(true);
    console.log(isLoading);
    const newPosts = {
      title,
    };

    createPost(newPosts)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });

    setTitle("");
  };

  // Upload video only
  const uploadVideo = (event) => {
    // setIsLoading(true);
    const uri = video;
    const uriParts = uri.split(".");
    const fileType = uriParts[uriParts.length - 1];
    // Video
    const dataVid = new FormData();
    dataVid.append("file", {
      uri,
      name: `video.${fileType}`,
      type: `videoT/${fileType}`,
    });
    dataVid.append("upload_preset", "Vigor-video");
    dataVid.append("cloud_name", "marca");

    createVideoPost(dataVid)
      .then((res) => {
        setSelectedVidFile(res.data.url);
        const newVidPost = {
          selectedVidFile: res.data.url,
        };
        createPost(newVidPost)
          .then((res) => {
            console.log(res.data);
            setIsLoading(false);
            navigation.navigate("Home");
          })
          .catch((err) => console.log(err));

        console.log(selectedVidFile);
      })
      .catch((err) => console.log(err));

    setVideo("");
  };

  // Upload video and title
  const uploadVidNTitle = (event) => {
    // setIsLoading(true);
    const uri = video;
    const uriParts = uri.split(".");
    const fileType = uriParts[uriParts.length - 1];
    // Video
    const dataVid = new FormData();
    dataVid.append("file", {
      uri,
      name: `videoT.${fileType}`,
      type: `videoTT/${fileType}`,
    });
    dataVid.append("upload_preset", "Vigor-video");
    dataVid.append("cloud_name", "marca");

    createVideoPost(dataVid)
      .then((res) => {
        setSelectedVidFile(res.data.url);
        const newVidNTitlePost = {
          title,
          selectedVidFile: res.data.url,
        };
        createPost(newVidNTitlePost)
          .then((res) => {
            console.log(res.data);
            setIsLoading(false);
            navigation.navigate("Home");
          })
          .catch((err) => console.log(err));

        console.log(selectedVidFile);
      })
      .catch((err) => console.log(err));

    setVideo("");
    setTitle("");
  };

  const Loading = () => (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={isLoading}
      onRequestClose={() => {
        console.log("close modal");
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "#00000040",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            height: 100,
            width: 100,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <ActivityIndicator animating={isLoading} />
        </View>
      </View>
    </Modal>
  );

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      keyboardDismissMode="on-drag"
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={5}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ alignItems: "center", marginBottom: 15 }}>
            <View
              style={{
                width: 320,
                height: 200,
                marginBottom: 10,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#ff9f67",
                borderWidth: 1,
                backgroundColor: "#c2c2c2",
              }}
            >
              {video ? (
                <Video
                  ref={videoRef}
                  style={{ width: 320, height: 200 }}
                  source={{
                    uri: video,
                  }}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                />
              ) : (
                <Text style={{ fontSize: 18 }}>No Video Picked</Text>
              )}
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  height: 45,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                  width: 300,
                  borderRadius: 30,
                  backgroundColor: "transparent",
                  backgroundColor: "#ff9f67",
                  shadowColor: "#808080",
                  shadowOffset: {
                    width: 0,
                    height: 9,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 12.35,
                  elevation: 10,
                }}
                onPress={pickVideo}
              >
                <Text style={{ color: "white" }}>Pick Video</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignSelf: "flex-start", marginLeft: 16 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                padding: 5,
                color: "black",
              }}
            >
              Title
            </Text>
          </View>
          <View
            style={{
              // borderBottomColor: '#F5FCFF',
              backgroundColor: "white",
              borderRadius: 20,
              // borderBottomWidth: 1,
              width: 300,
              height: 160,
              marginBottom: 20,
              paddingHorizontal: 16,
              // paddingTop: 16,
              // paddingBottom: 16,
              paddingVertical: 16,
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "#808080",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <TextInput
              style={{
                height: 160,
                borderBottomColor: "white",
                flex: 1,
                // paddingRight: 15,
              }}
              placeholder="Title"
              underlineColorAndroid="transparent"
              multiline
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          {video ? (
            title ? (
              <TouchableOpacity
                style={{
                  height: 45,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                  width: 300,
                  borderRadius: 30,
                  backgroundColor: "transparent",
                  backgroundColor: "#ff9f67",
                  shadowColor: "#808080",
                  shadowOffset: {
                    width: 0,
                    height: 9,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 12.35,
                  elevation: 10,
                }}
                onPress={uploadVidNTitle}
              >
                {isLoading ? (
                  <Loading />
                ) : (
                  <Text style={{ color: "white" }}>Post</Text>
                )}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  height: 45,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                  width: 300,
                  borderRadius: 30,
                  backgroundColor: "transparent",
                  backgroundColor: "#ff9f67",
                  shadowColor: "#808080",
                  shadowOffset: {
                    width: 0,
                    height: 9,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 12.35,
                  elevation: 10,
                }}
                onPress={uploadVideo}
              >
                {isLoading ? (
                  <Loading />
                ) : (
                  <Text style={{ color: "white" }}>Post</Text>
                )}
              </TouchableOpacity>
            )
          ) : title ? (
            <TouchableOpacity
              style={{
                height: 45,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
                width: 300,
                borderRadius: 30,
                backgroundColor: "transparent",
                backgroundColor: "#ff9f67",
                shadowColor: "#808080",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.5,
                shadowRadius: 12.35,
                elevation: 10,
              }}
              onPress={uploadNewPost}
            >
              {isLoading ? (
                <Loading />
              ) : (
                <Text style={{ color: "white" }}>Post</Text>
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                height: 45,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
                width: 300,
                borderRadius: 30,
                backgroundColor: "transparent",
                backgroundColor: "#acacac",
                shadowColor: "#808080",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.5,
                shadowRadius: 12.35,
                elevation: 10,
              }}
              disabled
            >
              <Text style={{ color: "white" }}>Post</Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
