import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  Vibration,
} from "react-native";
import { globalStyles } from "../../../../../../styles/global";
import { AntDesign } from "@expo/vector-icons";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  followOtherUsers,
  getUserPosts,
  sendPushFollowNotification,
  unFollowOtherUsers,
} from "../../../../../../api";
import * as SecureStore from "expo-secure-store";
import { Feather } from "@expo/vector-icons";
import COLOR from "../../../../../../constants/color";
import SongsProfile from "../../SpecialComponents/Player/SongsProfile";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export function ArtistDetailLayoutArtist({
  avatar,
  artistName,
  artistPosts,
  artistListeners,
  artistFollowers,
  userId,
  navigation,
  followers,
  following,
  expoPushToken,
}) {
  //   const [userPosts, setUserPosts] = useState(null);
  //   // Get all my posts from DB
  //   useEffect(() => {
  //     getUserPosts(userId)
  //       .then((res) => {
  //         setUserPosts(res.data);
  //         console.log(userPosts);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  let _notificationSubscription;

  // const [expoPushToken, setExpoPushToken] = useState("");
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

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
      //   console.log("data " + userData);
    });
  }, []);

  //   ======================================================================
  // FEATURES

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );

  //   // This listener is fired whenever a notification is received while the app is foregrounded
  //   notificationListener.current = Notifications.addNotificationReceivedListener(
  //     (notification) => {
  //       setNotification(notification);
  //     }
  //   );

  //   // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(
  //     (response) => {
  //       console.log(response);
  //       // navigation.navigate("Notification");
  //     }
  //   );

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);
  // follow other users
  const followOtherUser = (userId) => {
    followOtherUsers(userId)
      .then(async (res) => {
        console.log(res.data.following.map((foll) => foll._id));
        console.log(userId);
        await SecureStore.setItemAsync("user", JSON.stringify(res.data));
        await sendPushFollowNotification(
          expoPushToken,
          userData.username,
          "started following you"
        )
          .then((res) => {
            console.log(res.data);
            // _notificationSubscription = Notifications.addListener(
            //   Vibration.vibrate()
            // );
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  // unfollow other users
  const unFollowOtherUser = (userId) => {
    unFollowOtherUsers(userId)
      .then(async (res) => {
        console.log(res.data.following.map((foll) => foll._id));
        console.log(userId);
        await SecureStore.setItemAsync("user", JSON.stringify(res.data));
      })
      .catch((error) => console.log(error));
  };

  // Register for push notifications async
  // async function registerForPushNotificationsAsync() {
  //   let token;
  //   if (Constants.isDevice) {
  //     const {
  //       status: existingStatus,
  //     } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== "granted") {
  //       alert("Failed to get push token for push notification!");
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log(token);
  //   } else {
  //     alert("Must use physical device for Push Notifications");
  //   }

  //   if (Platform.OS === "android") {
  //     Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: "#FF231F7C",
  //     });
  //   }

  //   return token;
  // }

  return (
    <View style={globalStyles.artistDetail__artist}>
      <View style={globalStyles.artistDetail__intro}>
        {avatar ? (
          userData && userData._id === userId ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProfileSetting", { item: userData })
              }
            >
              <Image
                source={{ uri: avatar }}
                style={globalStyles.artistDetail__intro_avatar}
              />
              <View style={globalStyles.artistDetail__intro_edit}>
                <Feather
                  name="edit-2"
                  size={18}
                  color={COLOR.white}
                  style={globalStyles.artistDetail__intro_editIcon}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <Image
              source={{ uri: avatar }}
              style={globalStyles.artistDetail__intro_avatar}
            />
          )
        ) : userData && userData._id === userId ? (
          <TouchableOpacity>
            <Image
              source={require("../../../../../../assets/images/noAvatar.png")}
              style={globalStyles.artistDetail__intro_avatar}
            />
          </TouchableOpacity>
        ) : (
          <Image
            source={require("../../../../../../assets/images/noAvatar.png")}
            style={globalStyles.artistDetail__intro_avatar}
          />
        )}
        <View style={globalStyles.artistDetail__intro_username}>
          <Text
            numberOfLines={1}
            style={globalStyles.artistDetail__intro_username_name}
          >
            {artistName}
          </Text>
        </View>
        <View style={globalStyles.artistDetail__intro_stats}>
          <View style={globalStyles.artistDetail__intro_stats_songs}>
            <Text style={globalStyles.artistDetail__intro_stats_postsNumber}>
              {artistPosts}
            </Text>
            <Text style={globalStyles.artistDetail__intro_stats_postsLabel}>
              Posts
            </Text>
          </View>
          <TouchableOpacity
            style={globalStyles.artistDetail__intro_stats_followers}
            onPress={() =>
              navigation.push("ArtistList", { followers: followers })
            }
          >
            <Text
              style={globalStyles.artistDetail__intro_stats_followersNumber}
            >
              {artistFollowers}
            </Text>
            <Text style={globalStyles.artistDetail__intro_stats_followersLabel}>
              followers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.artistDetail__intro_stats_following}
            onPress={() =>
              navigation.push("ArtistList", { following: following })
            }
          >
            <Text
              style={globalStyles.artistDetail__intro_stats_followingNumber}
            >
              {artistListeners}
            </Text>
            <Text style={globalStyles.artistDetail__intro_stats_followingLabel}>
              following
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={globalStyles.artistDetail__btns}>
        {userData && userId === userData._id ? (
          <TouchableOpacity style={globalStyles.artistDetail__playBtn_unique}>
            <Ionicons name="shuffle" size={24} color="white" />
            <Text style={globalStyles.artistDetail__playBtn_label_unique}>
              Shuffle
            </Text>
          </TouchableOpacity>
        ) : userData &&
          userData.following.some((getFollow) => getFollow._id === userId) ? (
          <>
            <TouchableOpacity
              style={globalStyles.artistDetail__followBtn}
              onPress={() => unFollowOtherUser(userId)}
            >
              <SimpleLineIcons name="user-follow" size={21} color="black" />
              <Text style={globalStyles.artistDetail__followBtn_label}>
                Following
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.artistDetail__playBtn}>
              <Ionicons name="shuffle" size={24} color="white" />
              <Text style={globalStyles.artistDetail__playBtn_label}>
                Shuffle
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={globalStyles.artistDetail__followBtn}
              onPress={() => followOtherUser(userId)}
            >
              <SimpleLineIcons name="user-follow" size={21} color="black" />
              <Text style={globalStyles.artistDetail__followBtn_label}>
                Follow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.artistDetail__playBtn}>
              <Ionicons name="shuffle" size={24} color="white" />
              <Text style={globalStyles.artistDetail__playBtn_label}>
                Shuffle
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

export function ArtistDetailLayoutContent({
  contentData,
  songData,
  videoData,
  playlistData,
  albumData,
  navigation,
}) {
  return (
    <View style={globalStyles.artistDetail__body}>
      <FlatList
        data={contentData}
        renderItem={({ item }) =>
          item.id === "0" ? (
            <ArtistDetailLayoutSongs label="Songs" songData={songData} />
          ) : item.id === "1" ? (
            <ArtistDetailLayoutVideos label="Videos" videoData={videoData} />
          ) : item.id === "2" ? (
            <ArtistDetailLayoutPlaylists
              label="Playlists"
              playlistData={playlistData}
              navigation={navigation}
            />
          ) : (
            item.id === "3" && (
              <ArtistDetailLayoutAlbums label="Albums" albumData={albumData} />
            )
          )
        }
        keyExtractor={(item) => item.id}
        listKey="fhwioejf"
      />
    </View>
  );
}

export function ArtistDetailLayoutSongs({ label, songData }) {
  return (
    <>
      <Text style={globalStyles.artistDetail__songs_title}>{label}</Text>
      <View style={globalStyles.artistDetail__songs}>
        <SongsProfile
          PLAY_LIST={songData?.filter((song) => song.selectedAudFile)}
        />
      </View>
    </>
  );
}
export function ArtistDetailLayoutVideos({ label, videoData }) {
  const video = useRef(null);

  return (
    <>
      <Text style={globalStyles.artistDetail__videos_title}>{label}</Text>
      <View style={globalStyles.artistDetail__videos}>
        <FlatList
          data={videoData}
          renderItem={({ item, index }) =>
            item.selectedVidFile && index >= 4 ? (
              <>
                {item.selectedVidFile && (
                  <TouchableOpacity style={globalStyles.artistDetail__list_Vid}>
                    <View style={globalStyles.artistDetail__list_video}>
                      <>
                        <Video
                          ref={video}
                          style={
                            globalStyles.artistDetail__list_video_thumbVideo
                          }
                          source={{
                            uri: item.selectedVidFile,
                          }}
                          useNativeControls
                          isLooping
                          // onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View
                          style={globalStyles.artistDetail__list_video_content}
                        >
                          <View
                            style={globalStyles.artistDetail__list_video_info}
                          >
                            <Text
                              numberOfLines={1}
                              style={
                                globalStyles.artistDetail__list_info_infoTitle
                              }
                            >
                              {item.hashtag[0].replace("#", "")}
                            </Text>
                          </View>
                          <View style={globalStyles.artistDetail__list_options}>
                            <AntDesign
                              name="hearto"
                              size={18}
                              color="#ff9f67"
                            />
                          </View>
                        </View>
                      </>
                    </View>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={globalStyles.artistDetail__video_moreBtn}
                >
                  <Text style={globalStyles.artistDetail__video_moreBtn_label}>
                    More
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              item.selectedVidFile && (
                <TouchableOpacity style={globalStyles.artistDetail__list_Vid}>
                  <View style={globalStyles.artistDetail__list_video}>
                    <>
                      <Video
                        ref={video}
                        style={globalStyles.artistDetail__list_video_thumbVideo}
                        source={{
                          uri: item.selectedVidFile,
                        }}
                        useNativeControls
                        isLooping
                        // onPlaybackStatusUpdate={status => setStatus(() => status)}
                      />
                      <View
                        style={globalStyles.artistDetail__list_video_content}
                      >
                        <View
                          style={globalStyles.artistDetail__list_video_info}
                        >
                          <Text
                            numberOfLines={1}
                            style={
                              globalStyles.artistDetail__list_info_infoTitle
                            }
                          >
                            {item.hashtag[0].replace("#", "")}
                          </Text>
                        </View>
                        <View style={globalStyles.artistDetail__list_options}>
                          <AntDesign name="hearto" size={18} color="#ff9f67" />
                        </View>
                      </View>
                    </>
                  </View>
                </TouchableOpacity>
              )
            )
          }
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}
export function ArtistDetailLayoutPlaylists({
  label,
  playlistData,
  navigation,
}) {
  return (
    <>
      <Text style={globalStyles.artistDetail__playlists_title}>{label}</Text>
      <View style={globalStyles.artistDetail__playlists}>
        <FlatList
          data={playlistData}
          renderItem={({ item, index }) =>
            index >= 4 ? (
              <>
                <TouchableOpacity
                  style={globalStyles.artistDetail__list_Pll}
                  onPress={() =>
                    navigation.navigate("PlaylistDetail", { item: item })
                  }
                >
                  <View style={globalStyles.artistDetail__list_playlist}>
                    {playlistData.length ? (
                      <>
                        <Image
                          source={{
                            uri:
                              "https://i.pinimg.com/564x/d3/d3/62/d3d362c198d7483aaf3e5852be209526.jpg",
                          }}
                          style={
                            globalStyles.artistDetail__list_playlist_thumbPlaylist
                          }
                        />
                        <View
                          style={
                            globalStyles.artistDetail__list_playlist_content
                          }
                        >
                          <View
                            style={
                              globalStyles.artistDetail__list_playlist_info
                            }
                          >
                            <Text
                              numberOfLines={2}
                              style={
                                globalStyles.artistDetail__list_info_infoTitle
                              }
                            >
                              {item.title}
                            </Text>
                          </View>
                          <View style={globalStyles.artistDetail__list_options}>
                            <AntDesign
                              name="hearto"
                              size={18}
                              color="#ff9f67"
                            />
                          </View>
                        </View>
                      </>
                    ) : (
                      <Text
                        style={{
                          color: COLOR.gray,
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        No playlist
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={globalStyles.artistDetail__playlist_moreBtn}
                >
                  <Text
                    style={globalStyles.artistDetail__playlist_moreBtn_label}
                  >
                    More
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={globalStyles.artistDetail__list_Pll}
                onPress={() =>
                  navigation.navigate("PlaylistDetail", { item: item })
                }
              >
                <View style={globalStyles.artistDetail__list_playlist}>
                  {playlistData.length ? (
                    <>
                      <Image
                        source={{
                          uri:
                            "https://i.pinimg.com/564x/d3/d3/62/d3d362c198d7483aaf3e5852be209526.jpg",
                        }}
                        style={
                          globalStyles.artistDetail__list_playlist_thumbPlaylist
                        }
                      />
                      <View
                        style={globalStyles.artistDetail__list_playlist_content}
                      >
                        <View
                          style={globalStyles.artistDetail__list_playlist_info}
                        >
                          <Text
                            numberOfLines={2}
                            style={
                              globalStyles.artistDetail__list_info_infoTitle
                            }
                          >
                            {item.title}
                          </Text>
                        </View>
                        <View style={globalStyles.artistDetail__list_options}>
                          <AntDesign name="hearto" size={18} color="#ff9f67" />
                        </View>
                      </View>
                    </>
                  ) : (
                    <Text
                      style={{
                        color: COLOR.gray,
                        fontSize: 25,
                        fontWeight: "bold",
                      }}
                    >
                      No playlist
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            )
          }
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}
export function ArtistDetailLayoutAlbums({ label, albumData }) {
  return (
    <>
      <Text style={globalStyles.artistDetail__albums_title}>{label}</Text>
      <View style={globalStyles.artistDetail__albums}>
        <FlatList
          data={albumData}
          renderItem={({ item, index }) =>
            index >= albumData.length - 1 ? (
              <>
                <TouchableOpacity style={globalStyles.artistDetail__list_Pll}>
                  <View style={globalStyles.artistDetail__list_album}>
                    <Image
                      source={{ uri: item.url }}
                      style={globalStyles.artistDetail__list_album_thumbAlbum}
                    />
                    <View style={globalStyles.artistDetail__list_album_content}>
                      <View style={globalStyles.artistDetail__list_album_info}>
                        <Text
                          numberOfLines={2}
                          style={globalStyles.artistDetail__list_info_infoTitle}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <View style={globalStyles.artistDetail__list_options}>
                        <AntDesign name="hearto" size={18} color="#ff9f67" />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={globalStyles.artistDetail__album_moreBtn}
                >
                  <Text style={globalStyles.artistDetail__album_moreBtn_label}>
                    More
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity style={globalStyles.artistDetail__list_Ab}>
                <View style={globalStyles.artistDetail__list_album}>
                  <Image
                    source={{ uri: item.url }}
                    style={globalStyles.artistDetail__list_album_thumbAlbum}
                  />
                  <View style={globalStyles.artistDetail__list_album_content}>
                    <View style={globalStyles.artistDetail__list_album_info}>
                      <Text
                        numberOfLines={1}
                        style={globalStyles.artistDetail__list_info_infoTitle}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View style={globalStyles.artistDetail__list_options}>
                      <AntDesign name="hearto" size={18} color="#ff9f67" />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}
