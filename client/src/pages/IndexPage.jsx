import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../Post";
import axios from "axios";
import { getPosts, reset } from "../redux/post/postSlice";

const IndexPage = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (isError) {
      alert(`${message}`);
    }
    dispatch(getPosts());
  }, [isError]);
  return (
    <div style={{ padding: "2rem" }}>
      {posts.map((post) => (
        <Post {...post} key={post._id} />
      ))}
    </div>
  );
};

export default IndexPage;
