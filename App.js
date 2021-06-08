import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import linking from "./Linking";
import HomeNavigation from "./src/navigation/HomeNavigation";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Linking } from "react-native";

export default function App() {
  // SplashScreen.preventAutoHideAsync()

  // useEffect(() => {
  //   setTimeout(async () => {
  //     await SplashScreen.hideAsync()
  //   }, 5000)
  // }, [])

  // const rootReducer = combineReducers({
  //   auth: AuthReducer,
  // });

  // const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    registerForPushNotificationsAsync();

    // Notifications.addNotificationReceivedListener((notification) =>
    //   setDETAIL_NOTIFICATION([notification])
    // );
    Notifications.addNotificationResponseReceivedListener(
      (response) => console.log([response]),
      // Linking.openURL("demo://app/notifications")
      Linking.openURL("exp://192.168.1.13:19000/notifications")
    );
  });

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

    return token;
  }

  return (
    // <Provider store={store}>
    <NavigationContainer linking={linking}>
      <StatusBar style="dark" />
      <HomeNavigation />
    </NavigationContainer>
    // </Provider>
  );
}
