import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { globalStyles } from "../../../../../styles/global";
import * as ImagePicker from "expo-image-picker";
import { login } from "../../../../../api";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [image, setImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");

  async function saveJwt(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  async function saveUserData(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const signin = (event) => {
    const oldUser = {
      email,
      password,
    };

    login(oldUser)
      .then((res) => {
        console.log(res.data);
        // AsyncStorage.setItem("@jwt", res.data.token);
        // AsyncStorage.setItem("@user", JSON.stringify(res.data.user));
        saveJwt("jwt", res.data.token);
        saveUserData("user", JSON.stringify(res.data.user));
        navigation.navigate("Home");
      })
      .catch((err) => console.log(err));

    // setUsername('');
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
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 150, height: 150, resizeMode: "contain" }}
            />
          )}
        </View>
        <View>
          <TouchableOpacity onPress={signin}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
