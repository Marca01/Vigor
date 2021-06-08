import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { globalStyles } from "../../../../../styles/global";
import * as ImagePicker from "expo-image-picker";
import { createImagePost, signUp } from "../../../../../api";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export default function Signup({ navigation }) {
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

    // This listener is fired whenever a notification is received while the app is foregrounded
    // notificationListener.current = Notifications.addNotificationReceivedListener(
    //   (notification) => {
    //     setNotification(notification);
    //   }
    // );

    // // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    // responseListener.current = Notifications.addNotificationResponseReceivedListener(
    //   (response) => {
    //     console.log(response);
    //     // navigation.navigate("Notification");
    //   }
    // );

    // return () => {
    //   Notifications.removeNotificationSubscription(
    //     notificationListener.current
    //   );
    //   Notifications.removeNotificationSubscription(responseListener.current);
    // };
  }, []);

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

  const signup = (event) => {
    const newUser = {
      name,
      username,
      email,
      password,
      notificationToken: expoPushToken,
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
        style={globalStyles.image_1_signup}
        source={require("../../../../../assets/images/authImage1.png")}
        resizeMode="cover"
      />
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.loginTitle}>Signup</Text>
        <TextInput
          placeholder="Enter your name"
          onChangeText={(text) => handleNameChange(text)}
          style={globalStyles.input}
        />
        <TextInput
          placeholder="Enter username"
          onChangeText={(text) => handleUsernameChange(text)}
          style={globalStyles.input}
        />
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
        <TouchableOpacity onPress={signup} style={globalStyles.button}>
          <Text style={globalStyles.button__title}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={globalStyles.image_2_signup}
        source={require("../../../../../assets/images/authImage2.png")}
        resizeMode="cover"
      />
    </View>
  );
}
