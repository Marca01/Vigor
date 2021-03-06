import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { globalStyles } from "../../../../../styles/global";
import * as ImagePicker from "expo-image-picker";
import { login } from "../../../../../api";
import * as SecureStore from "expo-secure-store";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [image, setImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

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

  // dispatch
  // const dispatch = useDispatch();

  const signin = async () => {
    const oldUser = {
      email,
      password,
      notificationToken: expoPushToken,
    };

    login(oldUser)
      .then((res) => {
        console.log(res.data);
        saveJwt("jwt", res.data.token);
        saveUserData("user", JSON.stringify(res.data.user));
        console.log(res.data.token);
        navigation.navigate("Home");
      })
      .catch((err) => console.log(err));

    // setUsername('');
    setEmail("");
    setPassword("");
    // try {
    //   await dispatch(authActions.signin(email, password));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Register for push notifications async
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      setExpoPushToken(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  }

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
