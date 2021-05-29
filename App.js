import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeNavigation from "./src/navigation/HomeNavigation";

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

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StatusBar style="dark" />
      <HomeNavigation />
    </NavigationContainer>
    // </Provider>
  );
}
