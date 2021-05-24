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
        // navigation.navigate("Home");
      })
      .catch((err) => console.log(err));

    // setUsername('');
    setEmail("");
    setPassword("");
  };

  return (
    <View style={globalStyles.container}>
      <Image
        style={globalStyles.image_1}
        source={require("../../../../../assets/images/authImage1.png")}
        resizeMode="cover"
      />
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.loginTitle}>Login</Text>
        <TextInput
          placeholder="Enter email"
          onChangeText={(text) => handleEmailChange(text)}
          style={globalStyles.input}
        />
        <TextInput
          placeholder="Enter password"
          onChangeText={(text) => handlePasswordChange(text)}
          style={globalStyles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={signin} style={globalStyles.button}>
          <Text style={globalStyles.button__title}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={globalStyles.image_2}
        source={require("../../../../../assets/images/authImage2.png")}
        resizeMode="cover"
      />
    </View>
  );
}
