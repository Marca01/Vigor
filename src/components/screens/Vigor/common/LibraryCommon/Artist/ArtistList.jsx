import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import * as SecureStore from "expo-secure-store";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../SpecialComponents/Title";

export default function ArtistList({
  url,
  artistName,
  artistFollowersNumber,
  onPress,
  navigation,
  route,
}) {
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
  return url || artistName || artistFollowersNumber || onPress ? (
    <TouchableOpacity style={globalStyles.artists__list} onPress={onPress}>
      <View style={globalStyles.artists__list_content}>
        <Image
          source={{ uri: url }}
          style={globalStyles.artists__list_avatar}
        />
        <View style={globalStyles.artists__list_info}>
          <Text numberOfLines={2} style={globalStyles.artists__list_info_name}>
            {artistName}
          </Text>
          <Text
            numberOfLines={1}
            style={globalStyles.artists__list_info_followersNumber}
          >
            {artistFollowersNumber} followers
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ) : route.params?.followers ? (
    <View style={globalStyles.followersList}>
      <View style={globalStyles.followersList__title}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
          style={globalStyles.followersList__backIcon}
        />
        <Title title="Followers" />
      </View>
      <FlatList
        data={route.params?.followers}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalStyles.artists__list}
            onPress={
              userData?._id === item._id
                ? () => navigation.push("Profile")
                : () => navigation.push("ArtistDetail", { item: item })
            }
          >
            <View style={globalStyles.artists__list_content}>
              {item.profilePicture ? (
                <Image
                  source={{ uri: item.profilePicture }}
                  style={globalStyles.artists__list_avatar}
                />
              ) : (
                <Image
                  source={{
                    uri:
                      "https://image.flaticon.com/icons/png/512/1077/1077063.png",
                  }}
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
                <Text
                  numberOfLines={1}
                  style={globalStyles.artists__list_info_followersNumber}
                >
                  {item.followers.length} followers
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  ) : (
    route.params?.following && (
      <View style={globalStyles.followingList}>
        <View style={globalStyles.followingList__title}>
          <Ionicons
            name="chevron-back"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
            style={globalStyles.followingList__backIcon}
          />
          <Title title="Following" />
        </View>
        <FlatList
          data={route.params?.following}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={globalStyles.artists__list}
              onPress={
                userData?._id === item._id
                  ? () => navigation.push("Profile")
                  : () => navigation.push("ArtistDetail", { item: item })
              }
            >
              <View style={globalStyles.artists__list_content}>
                {item.profilePicture ? (
                  <Image
                    source={{ uri: item.profilePicture }}
                    style={globalStyles.artists__list_avatar}
                  />
                ) : (
                  <Image
                    source={{
                      uri:
                        "https://image.flaticon.com/icons/png/512/1077/1077063.png",
                    }}
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
                  <Text
                    numberOfLines={1}
                    style={globalStyles.artists__list_info_followersNumber}
                  >
                    {item.followers.length} followers
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    )
  );
}
