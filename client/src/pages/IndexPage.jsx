import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { getPosts, reset } from "../redux/post/postSlice";
import { toast } from "react-toastify";

const IndexPage = () => {
  const dispatch = useDispatch();
  const { posts, isError, message } = useSelector((state) => state.posts);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getPosts());

    return () => {
      dispatch(reset());
    };
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
