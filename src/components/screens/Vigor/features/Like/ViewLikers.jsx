import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../../../../../styles/global";
import * as SecureStore from "expo-secure-store";

export default function ViewLikers({ navigation, route }) {
  const [userData, setUserData] = useState();

  const user = async () => {
    try {
      const user = await SecureStore.getItemAsync("user");
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user().then((userJson) => {
      setUserData(JSON.parse(userJson));
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={{ flex: 1 }}>
        <View style={globalStyles.artists}>
          <FlatList
            data={route.params?.item}
            renderItem={({ item }) =>
              !route.params?.item.length ? (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "red",
                  }}
                >
                  <Text>No like</Text>
                  <Text>No like</Text>
                  <Text>No like</Text>
                  <Text>No like</Text>
                  <Text>No like</Text>
                  <Text>No like</Text>
                  <Text>No like</Text>
                  <Text>No like</Text>
                  <Text>No like</Text>
                  <Text>{route.params?.item.length}</Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={globalStyles.artists__list}
                  onPress={() => {
                    item._id === userData._id
                      ? navigation.push("Profile")
                      : navigation.push("ArtistDetail", { item: item });
                  }}
                >
                  <View style={globalStyles.artists__list_content}>
                    {item.profilePicture ? (
                      <Image
                        source={{ uri: item.profilePicture }}
                        style={globalStyles.artists__list_avatar}
                      />
                    ) : (
                      <Image
                        source={require("../../../../../assets/images/noAvatar.png")}
                        style={globalStyles.artists__list_avatar}
                      />
                    )}
                    <View style={globalStyles.artists__list_info}>
                      <Text
                        numberOfLines={2}
                        style={globalStyles.artists__list_info_name}
                      >
                        {item.username}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
    </View>
  );
}
