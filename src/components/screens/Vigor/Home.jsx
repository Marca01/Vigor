import React from "react";
import { FlatList, Text, View } from "react-native";
import { globalStyles } from "../../../styles/global";
import HomePosts from "./common/HomeCommon/HomePosts";
import Title from "./common/SpecialComponents/Title";
import Header from "./header/Header";

export default function Home() {
  const ORDER = [{ id: "0" }, { id: "1" }];

  const POSTS = [
    {
      id: "1",
      creator: "KHale",
      avatar: require("../../../assets/images/avatar.jpg"),
      vidContent: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      title: "Cover Lorem Ipsum is simply dummy text of",
      likes: "10k",
      createdAt: "10 hours",
      comments: "1k",
    },
    {
      id: "2",
      creator: "Marca",
      avatar: require("../../../assets/images/avatar.jpg"),
      vidContent: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      title: "Cover Lorem Ipsum is simply dummy text of",
      likes: "10k",
      createdAt: "10 hours",
      comments: "1k",
    },
  ];

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <Header />

      {/* Posts */}
      <View style={globalStyles.posts}>
        <View style={globalStyles.postDiv}>
          <FlatList
            data={ORDER}
            renderItem={({ item }) =>
              item.id === "0" ? (
                <Title title="Posts" />
              ) : (
                <HomePosts posts={POSTS} />
              )
            }
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
