import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { globalStyles } from "../../../../../styles/global";
import * as ImagePicker from "expo-image-picker";
import { createImagePost, signUp } from "../../../../../api";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [image, setImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");

  //   const history = useHistory();

  const handleNameChange = (text) => {
    setName(text);
  };
  const handleUsernameChange = (text) => {
    setUsername(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  //   Choose avatar
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
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const signup = (event) => {
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
        setImage(null);
      })
      .catch((err) => console.log(err));

    const newUser = {
      name,
      username,
      email,
      password,
      profilePicture,
    };

    signUp(newUser)
      .then((res) => {
        console.log(res.data);
        navigation.navigate("Login");
      })
      .catch((err) => console.log(err));

    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={globalStyles.loginTitle}>Signup</Text>
        <View style={{ width: "100%" }}>
          <TextInput
            placeholder="Enter your name"
            onChangeText={(text) => handleNameChange(text)}
            style={{
              borderWidth: 2,
              borderColor: "orange",
              margin: 20,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }}
          />
          <TextInput
            placeholder="Enter username"
            onChangeText={(text) => handleUsernameChange(text)}
            style={{
              borderWidth: 2,
              borderColor: "orange",
              margin: 20,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }}
          />
          <TextInput
            placeholder="Enter email"
            onChangeText={(text) => handleEmailChange(text)}
            style={{
              borderWidth: 2,
              borderColor: "orange",
              margin: 20,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }}
          />
          <TextInput
            placeholder="Enter password"
            onChangeText={(text) => handlePasswordChange(text)}
            style={{
              borderWidth: 2,
              borderColor: "orange",
              margin: 20,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={pickImage}>
            <Text>Choose avatar</Text>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 150, height: 150, resizeMode: "contain" }}
            />
          )}
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signup}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
