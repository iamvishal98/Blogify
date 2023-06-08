import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../Post";
import axios from "axios";
import { getPosts, reset } from "../redux/post/postSlice";

const IndexPage = () => {
  //const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );
  // const getPosts = async () => {
  //   const response = await axios.get("/api/post");
  //   if (response.data) {
  //     console.log(response.data);
  //     setPosts(response.data);
  //   } else {
  //     console.log(`Error ${response}`);
  //   }
  // };

  useEffect(() => {
    dispatch(getPosts());

    return () => {
      dispatch(reset());
    };
  }, []);
  return (
    <>
      {posts.map((post) => (
        <Post {...post} key={post._id} />
      ))}
    </>
  );
};

export default IndexPage;
