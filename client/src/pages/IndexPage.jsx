import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { getPosts, reset } from "../redux/post/postSlice";
import { toast } from "react-toastify";
import { Card, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import RecentPost from "../components/RecentPost";
const IndexPage = () => {
  const dispatch = useDispatch();
  const { posts, isError, message } = useSelector((state) => state.posts);
  const remainingPosts = posts?.slice(1, posts?.length);
  const recentPost = posts[0];

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
      <RecentPost recentPost={recentPost} />

      <Row gutter={[16, 16]}>
        {remainingPosts.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </Row>
    </div>
  );
};

export default IndexPage;
