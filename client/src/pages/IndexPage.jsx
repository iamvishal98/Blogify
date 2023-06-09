import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { getPosts } from "../redux/post/postSlice";

const IndexPage = () => {
  const dispatch = useDispatch();
  const { posts, isError, message } = useSelector((state) => state.posts);

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
