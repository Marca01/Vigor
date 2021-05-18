import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function AddButton({ navigation }) {
  // let mode = useRef(new Animated.Value(0)).current;
  let mode = new Animated.Value(0);

  const handlePress = () => {
    Animated.timing(mode, {
      toValue: mode._value === 0 ? 1 : 0,
      useNativeDriver: true,
    }).start();
  };

  const videoX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-14, -50],
  });

  const videoY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -50],
  });

  const audioX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-14, 8],
  });

  const audioY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -50],
  });

  return (
    <View style={styles.newPostBtn}>
      <Animated.View
        style={{
          position: "absolute",
          transform: [{ translateX: videoX }, { translateY: videoY }],
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
          <View style={styles.newPostBtn_optionsBtn}>
            <Ionicons name="videocam-outline" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          transform: [{ translateX: audioX }, { translateY: audioY }],
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
          <View style={styles.newPostBtn_optionsBtn}>
            <MaterialIcons name="multitrack-audio" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </Animated.View>
      <TouchableHighlight style={styles.newPostBtn_rout} onPress={handlePress}>
        <View style={styles.newPostBtn_rin}>
          <Image
            source={require("../../../../../../assets/images/new.png")}
            resizeMode="contain"
            style={{
              width: 22,
              height: 22,
            }}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
}
