import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL + "/api/post/";

const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData, {
    withCredentials: true,
  });
  return response.data;
};

const getPosts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getPost = async (postId) => {
  const response = await axios.get(API_URL + postId);
  return response.data;
};

const editPost = async (postData) => {
  const response = await axios.put(API_URL, postData, {
    withCredentials: true,
  });
  return response.data;
};

export const deletePost = async (postId) => {
  const response = await axios.delete(API_URL + postId, {
    withCredentials: true,
  });
  return response.data;
};
const postService = {
  createPost,
  getPosts,
  getPost,
  editPost,
  deletePost,
};

export default postService;
