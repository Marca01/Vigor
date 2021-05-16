import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../../../styles/global";
import * as SecureStore from "expo-secure-store";

export default function Profile({ navigation }) {
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
        <Text onPress={() => logout()}>Logout</Text>
      </View>
    </View>
  );
}
