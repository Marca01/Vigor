import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../components/screens/Vigor/Home";
import SplashScreen from "../components/screens/Vigor/splashScreen/SplashScreen";
import OnboardingScreen from "../components/screens/Vigor/onboardingScreen/OnboardingScreen";
import Explore from "../components/screens/Vigor/pages/Explore";
import New from "../components/screens/Vigor/pages/New";
import Notification from "../components/screens/Vigor/pages/Notification";
import Library from "../components/screens/Vigor/pages/Library";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import COLOR from "../constants/color";
import Playlist from "../components/screens/Vigor/common/LibraryCommon/Playlist/Playlist";
import PlaylistDetail from "../components/screens/Vigor/common/LibraryCommon/Playlist/PlaylistDetail";
import Artist from "../components/screens/Vigor/common/LibraryCommon/Artist/Artist";
import ArtistDetail from "../components/screens/Vigor/common/LibraryCommon/Artist/ArtistDetail";
import {
  ArtistDetailLayoutArtist,
  ArtistDetailLayoutContent,
} from "../components/screens/Vigor/common/LibraryCommon/Artist/ArtistDetailLayout";
import HomePosts from "../components/screens/Vigor/common/HomeCommon/HomePosts";
import Album from "../components/screens/Vigor/common/LibraryCommon/Album/Album";
import AlbumDetail from "../components/screens/Vigor/common/LibraryCommon/Album/AlbumDetail";
import Video from "../components/screens/Vigor/common/LibraryCommon/Video/Video";
import Song from "../components/screens/Vigor/common/LibraryCommon/Song/Song";
import Player from "../components/screens/Vigor/pages/Player";
import Login from "../components/screens/Vigor/features/Login";
import Signup from "../components/screens/Vigor/features/Signup";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from "../components/screens/Vigor/profile/Profile";
import UserProfile from "../components/screens/Vigor/profile/UserProfile";

const HomeStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// Home navigator
const home = ({ navigation }) => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={profile}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="UserProfile"
        component={userProfile}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Library navigator
const library = ({ navigation }) => {
  return (
    <HomeStack.Navigator initialRouteName="Library">
      <HomeStack.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Playlists"
        component={playlist}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Artist"
        component={artist}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Album"
        component={album}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Video"
        component={video}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Song"
        component={song}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Playlist navigator
const playlist = ({ navigation }) => {
  return (
    <HomeStack.Navigator initialRouteName="Playlists">
      <HomeStack.Screen
        name="Playlists"
        component={Playlist}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="PlaylistDetail"
        component={PlaylistDetail}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Artist navigator
const artist = ({ navigation }) => {
  return (
    <HomeStack.Navigator initialRouteName="Artist">
      <HomeStack.Screen
        name="Artist"
        component={Artist}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ArtistDetail"
        component={ArtistDetail}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Album navigator
const album = ({ navigation }) => {
  return (
    <HomeStack.Navigator initialRouteName="Album">
      <HomeStack.Screen
        name="Album"
        component={Album}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="AlbumDetail"
        component={AlbumDetail}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Video navigator
const video = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Video"
        component={Video}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Song navigator
const song = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Song"
        component={Song}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Player navigator
const player = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Player"
        component={Player}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Profile navigator
const profile = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// User profile navigator
const userProfile = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// ArtistDetail navigator
// const artistsDetail = ({navigation}) => {
// 	return (
// 		<HomeStack.Navigator
// 			initialRouteName='ArtistDetail'
// 		>
// 			<HomeStack.Screen
// 				name='ArtistDetail'
// 				component={ArtistDetail}
// 				options={{
// 					headerShown: false
// 				}}
// 			/>
// 			{/* <HomeStack.Screen
// 				name='ArtistDetailTopTab'
// 				component={artistDetailTopTab}
// 				options={{
// 					headerShown: false
// 				}}
// 			/> */}
// 			{/* <HomeStack.Screen
// 				name='ArtistDetailLayoutArtist'
// 				component={ArtistDetailLayoutArtist}
// 				options={{
// 					headerShown: false
// 				}}
// 			/> */}
// 		</HomeStack.Navigator>
// 	)
// }
// const artistDetailTopTab = ({navigation}) => {
// 	return (
// 		<TopTab.Navigator
// 			initialRouteName='ArtistMusic'
// 		>
// 			<TopTab.Screen
// 				name='ArtistMusic'
// 				component={ArtistDetailLayoutContent}
// 			/>
// 			<TopTab.Screen
// 				name='ArtistPosts'
// 				component={HomePosts}
// 			/>
// 		</TopTab.Navigator>
// 	)
// }

// ======================================================================

// Auth
const auth = ({ navigation }) => {
  return (
    <HomeStack.Navigator initialRouteName="Login">
      <HomeStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

// Bottom tabs
const postNavigator = ({ navigation }) => {
  return (
    <HomeTabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLOR.main : COLOR.grey;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={require("../assets/images/home.png")}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 22,
                    height: 22,
                  }}
                />
              );
            case "Explore":
              return (
                <Image
                  source={require("../assets/images/explore.png")}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 22,
                    height: 22,
                  }}
                />
              );
            case "New":
              return (
                <View style={globalStyles.newPostBtn_rout}>
                  <View style={globalStyles.newPostBtn_rin}>
                    <Image
                      source={require("../assets/images/new.png")}
                      resizeMode="contain"
                      style={{
                        width: 22,
                        height: 22,
                      }}
                    />
                  </View>
                </View>
              );
            case "Notification":
              return (
                <Image
                  source={require("../assets/images/notification.png")}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 22,
                    height: 22,
                  }}
                />
              );
            case "Library":
              return (
                <Image
                  source={require("../assets/images/library.png")}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 22,
                    height: 22,
                  }}
                />
              );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
        },
      }}
    >
      <HomeTabs.Screen
        name="Home"
        component={home}
        options={{
          headerShown: false,
        }}
      />
      <HomeTabs.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
      <HomeTabs.Screen
        name="New"
        component={New}
        options={{
          headerShown: false,
        }}
      />
      <HomeTabs.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <HomeTabs.Screen
        name="Library"
        component={library}
        options={{
          headerShown: false,
        }}
      />
    </HomeTabs.Navigator>
  );
};

// ================================

export default function HomeNavigation({ navigation }) {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const getUserToken = async () => {
      try {
        const token = await SecureStore.getItemAsync("jwt");
        return token;
      } catch (e) {
        console.log(e);
      }
    };
    getUserToken().then((token) => {
      setUserToken(token);
    });
  }, []);
  console.log("====================================");
  console.log("render 1");
  console.log("====================================");
  return (
    <HomeStack.Navigator initialRouteName={!userToken ? "Login" : "Home"}>
      {/* <HomeStack.Screen 
				name='Splash' 
				component={SplashScreen} 
				options={{
					headerShown: false
				}}
			/> */}
      {/* <HomeStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      /> */}
      {/* <HomeStack.Screen
        name={userToken ? "Home" : "Login"}
        component={userToken ? postNavigator : auth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      /> */}
      {!userToken ? (
        <HomeStack.Screen
          name="Login"
          component={auth}
          options={{
            headerShown: false,
            //   gestureEnabled: false,
          }}
        />
      ) : (
        <>
          <HomeStack.Screen
            name="Home"
            component={postNavigator}
            options={{
              headerShown: false,
              //   gestureEnabled: false,
            }}
          />
          <HomeStack.Screen
            name="Player"
            component={player}
            options={{
              headerShown: false,
              //   gestureEnabled: false,
            }}
          />
        </>
      )}
    </HomeStack.Navigator>
  );
}
