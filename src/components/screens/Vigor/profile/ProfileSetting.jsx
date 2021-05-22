import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { globalStyles } from "../../../../styles/global";
import * as ImagePicker from "expo-image-picker";
import { createImagePost, updateAvatar, updateInfo } from "../../../../api";
import * as SecureStore from "expo-secure-store";
import { Ionicons } from "@expo/vector-icons";
import Title from "../common/SpecialComponents/Title";

export default function ProfileSetting({ navigation, route }) {
  const [name, setName] = useState(route.params?.item.name);
  const [userName, setUsername] = useState(route.params?.item.username);
  const [email, setEmail] = useState(route.params?.item.email);

  const [image, setImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");

  // UPdate avatar
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const updateProfilePicture = () => {
    const uri = image;
    const uriParts = uri.split(".");
    const fileType = uriParts[uriParts.length - 1];
    // Avatar
    const data = new FormData();
    data.append("file", {
      uri,
      name: `avatar.${fileType}`,
      type: `avatarT/${fileType}`,
    });
    data.append("upload_preset", "Vigor-image");
    data.append("cloud_name", "marca");

    createImagePost(data)
      .then((res) => {
        setProfilePicture(res.data.url);
        updateAvatar(res.data.url)
          .then(async (res) => {
            console.log(res.data);
            await SecureStore.setItemAsync("user", JSON.stringify(res.data));
          })
          .catch((err) => {
            console.log(err);
          });

        setImage(null);
      })
      .catch((err) => console.log(err));
  };

  const updateUserInfo = (email, name, userName) => {
    updateInfo(email, name, userName)
      .then(async (res) => {
        console.log(res.data);
        await SecureStore.setItemAsync("user", JSON.stringify(res.data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={globalStyles.playlistTitle}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
          style={globalStyles.playlistTitle__backIcon}
        />
        <Title title="Edit profile" />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        // keyboardVerticalOffset={10}
      >
        <ScrollView
          style={styles.scrollViewContainer}
          contentContainerStyle={styles.scrollViewContentContainerStyle}
          keyboardDismissMode="on-drag"
        >
          <ImageBackground
            source={{
              uri:
                "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='400' height='560' preserveAspectRatio='none' viewBox='0 0 400 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1392%26quot%3b)' fill='none'%3e%3crect width='400' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1393)'%3e%3c/rect%3e%3cpath d='M318.24387402459564 224.444397066293L233.06639923640552 198.40302965437178 207.0250318244843 283.5805044425619 292.2025066126744 309.6218718544831z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M150.73232663869794 358.13349654554685L127.09323388236157 289.48058622420706 82.07941631735817 381.7725893018832z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M353.6882821780931 319.2737421387277L285.3573603880361 319.2737421387277 353.6882821780931 387.6046639287847z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M62.76234011765195 328.55460575925315L55.07344777030886 217.07161039733427-26.85223589653063 270.2747714484771z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M131.0466365626956 412.96848504392744L189.91238676577342 451.276159135672 194.1950550892905 390.0311487528625z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M206.864812849817 456.3668659092944L143.09708394943533 487.46846539284365 174.19868343298458 551.2361942932254 237.96641233336626 520.1345948096761z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M103.11844455428243-3.969218415128836L45.89482622245177 33.19223383979828 130.24881377075778 100.44693521008071z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M191.40306685831044 221.4752060106983L275.4625325687556 253.74261170123089 307.7299382592882 169.6831459907857 223.670472548843 137.4157403002531z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M397.22901647699285 82.95880345926557L356.79868386299484-28.45287437051571 288.82716559334983 49.73941283772955z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M251.9784821783182 90.41503626713045L234.5909133405098 160.15276584235443 304.3286429157337 177.5403346801628 321.71621175354215 107.80260510493886z' fill='rgba(255%2c 159%2c 103%2c 1)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1392'%3e%3crect width='400' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='110%25' y1='7.14%25' x2='-10%25' y2='92.86%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1393'%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 159%2c 103%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e",
            }}
            style={styles.image}
          >
            <TouchableOpacity onPress={pickImage}>
              {image ? (
                <Image
                  style={styles.avatar}
                  source={{
                    uri: image,
                  }}
                />
              ) : (
                <Image
                  style={styles.avatar}
                  source={{
                    uri: route.params?.item.profilePicture,
                  }}
                />
              )}
            </TouchableOpacity>
            <View style={styles.form}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Name"
              />
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setUsername(text)}
                value={userName}
                placeholder="Username"
              />
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
              />
              {image ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={updateProfilePicture}
                >
                  <Text style={styles.button__title}>Save changes</Text>
                </TouchableOpacity>
              ) : email !== route.params?.item.email ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => updateUserInfo(email, name, userName)}
                >
                  <Text style={styles.button__title}>Save changes</Text>
                </TouchableOpacity>
              ) : name !== route.params?.item.name ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => updateUserInfo(email, name, userName)}
                >
                  <Text style={styles.button__title}>Save changes</Text>
                </TouchableOpacity>
              ) : userName !== route.params?.item.username ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => updateUserInfo(email, name, userName)}
                >
                  <Text style={styles.button__title}>Save changes</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button_disabled} disabled>
                  <Text style={styles.button__title_disabled}>
                    Save changes
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    overflow: "hidden",
    position: "relative",
  },
  scrollViewContainer: {
    flex: 1,
    paddingTop: 50,
  },
  scrollViewContentContainerStyle: {},
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderWidth: 5,
    borderColor: "#FF9F67",
    backgroundColor: "#fff",
  },
  form: {
    width: "90%",
    marginHorizontal: "auto",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginTop: 10,
  },
  input: {
    marginBottom: 10,
    width: "100%",
    height: 46,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1.5,
    borderColor: "gray",
    borderRadius: 12,
    color: "#FF9F67",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: 46,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#FF9F67",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button_disabled: {
    width: "100%",
    height: 46,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#acacac",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button__title: {
    color: "#FF9F67",
    fontSize: 16,
    fontWeight: "bold",
  },
  button__title_disabled: {
    color: "#acacac",
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    marginBottom: 5,
  },
});
