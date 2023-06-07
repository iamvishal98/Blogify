import React, { useEffect, useState } from "react";
import Post from "../Post";
import axios from "axios";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("/api/post");
    if (response.data) {
      console.log(response.data);
      setPosts(response.data);
    } else {
      console.log(`Error ${response}`);
    }
  };

  useEffect(() => {
    getPosts();
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
