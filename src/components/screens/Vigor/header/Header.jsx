import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../../../../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Easing } from "react-native-reanimated";
import { searchUsers } from "../../../../api";

export default function Header({ avatar, username, navigation }) {
  // Calculate window size
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  // Animation values
  let inputBoxX = useRef(new Animated.Value(width)).current;
  let backButtonOpacity = useRef(new Animated.Value(0)).current;
  let contentY = useRef(new Animated.Value(height)).current;
  let contentOpacity = useRef(new Animated.Value(0)).current;

  //
  const [search, setSearch] = useState("");

  const onChangeSearch = (searchText) => {
    setSearch(searchText);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(inputBoxX, {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    Animated.timing(backButtonOpacity, {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    Animated.timing(contentY, {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    Animated.timing(contentOpacity, {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(inputBoxX, {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    Animated.timing(backButtonOpacity, {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    Animated.timing(contentY, {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    Animated.timing(contentOpacity, {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    Keyboard.dismiss();
  };

  //   =======================================================================
  // FEATURES

  const [searchU, setSearchU] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [searchOptionOpen, setSearchOptionOpen] = useState(false);

  // Search other users
  const searchUser = (query) => {
    setSearchU(query);
    searchUsers(query)
      .then((res) => {
        setUserDetails(res.data.user);
        console.log(res.data.user);
        console.log(userDetails);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <View style={globalStyles.headerDiv}>
        <View style={globalStyles.header}>
          <Image
            source={require("../../../../assets/images/logo.png")}
            resizeMode="contain"
            style={globalStyles.header__logo}
          />
          {/* <View style={globalStyles.header__user}> */}
          <TouchableOpacity
            style={{
              marginRight: -100,
            }}
            onPress={handleFocus}
          >
            <Feather name="search" size={30} color="black" />
          </TouchableOpacity>
          <Animated.View
            style={{
              height: 68,
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 5,
              backgroundColor: "#fff2f2",
              width: width - 15,
              transform: [{ translateX: inputBoxX }],
              zIndex: 200,
            }}
          >
            <Animated.View style={{ opacity: backButtonOpacity }}>
              <TouchableOpacity
                activeOpacity={1}
                underlayColor="#ccd0d5"
                onPress={handleBlur}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                <Ionicons
                  name="chevron-back"
                  size={30}
                  color="black"
                  //   onPress={() => navigation.goBack()}
                  style={globalStyles.artistTitle__backIcon}
                />
              </TouchableOpacity>
            </Animated.View>
            <TextInput
              style={{
                flex: 1,
                height: 40,
                // backgroundColor: "#e4e6eb",
                backgroundColor: "#e5e5e5",
                borderRadius: 16,
                paddingHorizontal: 16,
                fontSize: 16,
                fontWeight: "600",
                marginLeft: -10,
              }}
              onChangeText={(text) => searchUser(text)}
              value={searchU}
              placeholder="Search Vigor"
              clearButtonMode="always"
            />
          </Animated.View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{ borderRadius: 100, backgroundColor: "red" }}
          >
            <Avatar.Image size={42} source={{ uri: avatar }} />
          </TouchableOpacity>
          {/* </View> */}
        </View>
        {/* My mood */}
        {/* <View style={globalStyles.home__userMoods}>
						<View style={globalStyles.home__userMoods__mood}>
							<LinearGradient
								colors={['#FFEFC2', '#FFBE0A']}
								style={globalStyles.home__userMoods__moodLinearBg}
							>
								<Image 
									// source={require('../../../assets/images/smiling.png')}
									source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/smiling-face-with-smiling-eyes_1f60a.png'}}
									style={globalStyles.home__userMoods__moodIcon}
								/>
							</LinearGradient>
						</View>
						<View style={globalStyles.home__userMoods__mood}>
							<LinearGradient
								colors={['#FFEFC2', '#FFBE0A']}
								style={globalStyles.home__userMoods__moodLinearBg}
							>
								<Image 
									// source={require('../../../assets/images/smiling.png')}
									source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/beaming-face-with-smiling-eyes_1f601.png'}}
									style={globalStyles.home__userMoods__moodIcon}
								/>
							</LinearGradient>
						</View>
						<View style={globalStyles.home__userMoods__mood}>
							<LinearGradient
								colors={['#FFEFC2', '#FFBE0A']}
								style={globalStyles.home__userMoods__moodLinearBg}
							>
								<Image 
									// source={require('../../../assets/images/smiling.png')}
									source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/smiling-face-with-heart-eyes_1f60d.png'}}
									style={globalStyles.home__userMoods__moodIcon}
								/>
							</LinearGradient>
						</View>
						<View style={globalStyles.home__userMoods__mood}>
							<LinearGradient
								colors={['#FFEFC2', '#FFBE0A']}
								style={globalStyles.home__userMoods__moodLinearBg}
							>
								<Image 
									// source={require('../../../assets/images/smiling.png')}
									source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/smiling-face_263a-fe0f.png'}}
									style={globalStyles.home__userMoods__moodIcon}
								/>
							</LinearGradient>
						</View>
						<View style={globalStyles.home__userMoods__mood}>
							<LinearGradient
								colors={['#FFEFC2', '#FFBE0A']}
								style={globalStyles.home__userMoods__moodLinearBg}
							>
								<Image 
									// source={require('../../../assets/images/smiling.png')}
									source={{uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/pensive-face_1f614.png'}}
									style={globalStyles.home__userMoods__moodIcon}
								/>
							</LinearGradient>
						</View>
					</View> */}
      </View>
      <Animated.View
        style={{
          width: width,
          height: height,
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: 999,
          opacity: contentOpacity,
          transform: [{ translateY: contentY }],
          backgroundColor: "blue",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flex: 1,
              paddingTop: 150,
            }}
          >
            {!searchU ? (
              <ScrollView keyboardDismissMode="on-drag">
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                  <View style={globalStyles.albumDetail__emptyAlbum}>
                    <Text style={globalStyles.albumDetail__emptyAlbum_label}>
                      Enter to search on Vigor 🥰
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </ScrollView>
            ) : (
              <ScrollView keyboardDismissMode="on-drag">
                {userDetails.map((userDetail) =>
                  username === userDetail.username ? (
                    <TouchableOpacity
                      key={userDetail._id}
                      onPress={() => navigation.navigate("Profile")}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          height: 40,
                          alignItems: "center",
                          borderBottomWidth: 1,
                          borderBottomColor: "#e6e4eb",
                          marginLeft: 16,
                        }}
                      >
                        <Text>{userDetail.username}</Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      key={userDetail._id}
                      onPress={() =>
                        navigation.navigate("ArtistFound", {
                          item: userDetail,
                        })
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          height: 40,
                          alignItems: "center",
                          borderBottomWidth: 1,
                          borderBottomColor: "#e6e4eb",
                          marginLeft: 16,
                        }}
                      >
                        <Text>{userDetail.username}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                )}
              </ScrollView>
            )}
          </View>
        </View>
      </Animated.View>
    </>
  );
}
