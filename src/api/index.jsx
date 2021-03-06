import React, { useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const baseUrl = "http://192.168.1.13:5000/";
// Cloudinary
const imgUrl = "https://api.cloudinary.com/v1_1/marca/image/upload";
const vidUrl = "https://api.cloudinary.com/v1_1/marca/video/upload";
const audUrl = "https://api.cloudinary.com/v1_1/marca/video/upload";
// Expo notification
const notiUrl = "https://exp.host/--/api/v2/push/send";

// function Api() {
//   // useEffect(() => {
//   //   const init = async () => {
//   //     const token = await SecureStore.getItemAsync("jwt");
//   //     setUserToken(token);
//   //   };
//   //   init();
//   // }, []);
//   const [userToken, setUserToken] = useState("");
// }
// const userToken = "";
const token = async () => {
  try {
    const token = await SecureStore.getItemAsync("jwt");
    return token;
  } catch (error) {
    console.log(error);
  }
};
token().then((token) => {
  process.env.TOKEN = token;
});
// }, []);
// console.log(`"${userToken}"`);
// console.log(process.env.TOKEN);

// Get all posts
export const getPosts = () =>
  axios.get(baseUrl, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Get my posts
export const getMyPosts = () =>
  axios.get(`http://192.168.1.13:5000/profile/myPosts`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Get other user posts
export const getUserPosts = (userId) =>
  axios.get(`http://192.168.1.13:5000/profile/${userId}/posts/`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Get follow posts
export const getFollowPosts = () =>
  axios.get(`http://192.168.1.13:5000/followingUser`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Create new post
export const createPost = (newPost) =>
  axios.post(baseUrl, newPost, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Like posts
export const likePosts = (postId) =>
  axios.patch(
    `http://192.168.1.13:5000/like`,
    { postId: postId },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
      body: JSON.stringify({
        postId,
      }),
    }
  );

// Dislike posts
export const disLikePosts = (postId) =>
  axios.patch(
    `http://192.168.1.13:5000/unlike`,
    { postId: postId },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
      body: JSON.stringify({
        postId,
      }),
    }
  );

// Delete posts
export const deletePosts = (postId) =>
  axios.delete(`http://192.168.1.13:5000/${postId}`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Follow other users
export const followOtherUsers = (userId) =>
  axios.put(
    `http://192.168.1.13:5000/follow`,
    { followId: userId },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
      body: JSON.stringify({
        followId: userId,
      }),
    }
  );

// UnFollow other users
export const unFollowOtherUsers = (userId) =>
  axios.put(
    `http://192.168.1.13:5000/unfollow`,
    { unFollowId: userId },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
      body: JSON.stringify({
        unFollowId: userId,
      }),
    }
  );

// Search other users
export const searchUsers = (query) =>
  axios.post(
    `http://192.168.1.13:5000/searchUser`,
    { query: query },
    {
      body: JSON.stringify({
        query: query,
      }),
    }
  );

// Comment
export const comment = (text, postId) =>
  axios.put(
    baseUrl,
    { text: text, postId: postId },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
      body: JSON.stringify({
        text,
        postId,
      }),
    }
  );

// Delete comment
export const deleteComments = (postId, commentId) =>
  axios.delete(
    `http://192.168.1.13:5000/deleteComment/${postId}/${commentId}`,
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    }
  );

// Get playlist
export const getPlaylist = () =>
  axios.get(`http://192.168.1.13:5000/getPlaylist`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Create playlist
export const createPlaylist = (newPlaylist) =>
  axios.post(
    `http://192.168.1.13:5000/createPlaylist`,
    { title: newPlaylist },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    }
  );

// Delete playlist
export const deletePlaylist = (playlistId) =>
  axios.delete(`http://192.168.1.13:5000/deletePlaylist/${playlistId}`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Add posts to playlist
export const addPostToPlaylist = (postId, playlistId) =>
  axios.patch(
    `http://192.168.1.13:5000/addPostToPlaylist`,
    {
      id_post: postId,
      id_playlist: playlistId,
    },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    }
  );

// View posts from playlist
export const viewPostsFromPlaylist = (playlistId) =>
  axios.patch(
    `http://192.168.1.13:5000/viewPostFromPlaylist`,
    {
      id_playlist: playlistId,
    },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    }
  );

// Delete posts from playlist
export const removePostFromPlaylist = (postId, playlistId) =>
  axios.patch(
    `http://192.168.1.13:5000/removePostToPlaylist`,
    {
      id_post: postId,
      id_playlist: playlistId,
    },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    }
  );

// Update avatar
export const updateAvatar = (avatar) =>
  axios.put(
    `http://192.168.1.13:5000/updateAvatar`,
    { avatar: avatar },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }
  );

// Update user info
export const updateInfo = (email, name, username) =>
  axios.put(
    `http://192.168.1.13:5000/updateInfo`,
    {
      email: email,
      name: name,
      username: username,
    },
    {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
      body: JSON.stringify({
        email,
        name,
        username,
      }),
    }
  );

// ===========================================================================
// Push notification
export const sendPushFollowNotification = async (
  expoPushToken,
  username,
  content
) =>
  await axios.post(
    `https://exp.host/--/api/v2/push/send`,
    {
      to: expoPushToken,
      sound: "default",
      title: "Vigor",
      body: `${username} ${content}`,
      data: { data: "goes here" },
    },
    {
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({}),
    }
  );

// =============================================================================
// Store image to cloudinary
export const createImagePost = (newImagePost) =>
  axios.post(imgUrl, newImagePost);
// Store video to cloudinary
export const createVideoPost = (newVideoPost) =>
  axios.post(vidUrl, newVideoPost);
// Store audio to cloudinary
export const createSoundPost = (newSoundPost) =>
  axios.post(audUrl, newSoundPost);
// Auth
export const signUp = (newUser) =>
  axios.post(`http://192.168.1.13:5000/register`, newUser);
export const login = (oldUser) =>
  axios.post(`http://192.168.1.13:5000/login`, oldUser);
