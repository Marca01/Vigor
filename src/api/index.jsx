import React, { useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const baseUrl = "http://192.168.1.16:5000/";
// Cloudinary
const imgUrl = "https://api.cloudinary.com/v1_1/marca/image/upload";
const vidUrl = "https://api.cloudinary.com/v1_1/marca/video/upload";
const audUrl = "https://api.cloudinary.com/v1_1/marca/video/upload";

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
  axios.get(`http://192.168.1.16:5000/profile/myPosts`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Get other user posts
export const getUserPosts = (userId) =>
  axios.get(`http://192.168.1.16:5000/profile/${userId}/posts/`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Get follow posts
export const getFollowPosts = () =>
  axios.get(`http://192.168.1.16:5000/followingUser`, {
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
    `http://192.168.1.16:5000/like`,
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
    `http://192.168.1.16:5000/unlike`,
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
  axios.delete(`http://192.168.1.16:5000/${postId}`, {
    headers: {
      Authorization: "Bearer " + process.env.TOKEN,
    },
  });

// Follow other users
export const followOtherUsers = (userId) =>
  axios.put(
    `http://192.168.1.16:5000/follow`,
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
    `http://192.168.1.16:5000/unfollow`,
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

// Search other users '
export const searchUsers = (query) =>
  axios.post(
    `http://192.168.1.16:5000/searchUser`,
    { query: query },
    {
      body: JSON.stringify({
        query: query,
      }),
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
  axios.post(`http://192.168.1.16:5000/register`, newUser);
export const login = (oldUser) =>
  axios.post(`http://192.168.1.16:5000/login`, oldUser);
