import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import { globalStyles } from "../../../../styles/global";

export default function ProfileSetting() {
  // Logout
  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("jwt");
      console.log("Logout successful");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={globalStyles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
