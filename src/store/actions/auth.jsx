// import React from "react";
// import { login } from "../../api";
// import * as SecureStore from "expo-secure-store";

// export const authenticate = (user, token) => {
//   return (dispatch) => {
//     dispatch({
//       type: "AUTHENTICATE",
//       token,
//       user,
//     });
//   };
// };

// export const signin = (email, password) => {
//   return async (dispatch) => {
//     const oldUser = {
//       email,
//       password,
//     };

//     login(oldUser)
//       .then((res) => {
//         console.log(res.data);
//         dispatch(authenticate(res.data.user, res.data.token));
//         saveJwt(res.data.token);
//         saveUserData(res.data.user);
//       })
//       .catch((err) => console.log(err));
//   };
// };

// export const logout = async () => {
//   try {
//     await SecureStore.deleteItemAsync("jwt");
//     console.log("Logout successful");
//     Alert.alert("Logout successful");
//     return {
//       type: "LOGOUT",
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

// const saveJwt = async (token) => {
//   await SecureStore.setItemAsync("jwt", token);
// };

// const saveUserData = async (userData) => {
//   await SecureStore.setItemAsync(
//     "user",
//     JSON.stringify({
//       userData,
//     })
//   );
// };
