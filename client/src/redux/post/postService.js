import axios from "axios";

const API_URL = "/api/post/";

// create new goal

const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData);
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
  const response = await axios.put(API_URL, postData);
  return response.data;
};
const postService = {
  createPost,
  getPosts,
  getPost,
  editPost,
};

export default postService;
