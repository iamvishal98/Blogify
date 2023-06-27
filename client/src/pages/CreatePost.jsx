import React, { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useSelector, useDispatch } from "react-redux";
import { createPost, reset } from "../redux/post/postSlice";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isCreatePostSuccess } = useSelector(
    (state) => state.posts
  );

  const onFinish = (data) => {
    const postData = new FormData();
    postData.set("title", data.title);
    postData.set("summary", data.summary);
    postData.set("content", data.content);
    if (data.file) {
      postData.set("file", data.file.fileList[0].originFileObj);
    }
    dispatch(createPost(postData));
  };

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
    }
    if (isCreatePostSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isCreatePostSuccess]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="deploy-post-container">
      <div className="deploy-title">
        <h3>Create your Post </h3>
      </div>
      <Form onFinish={onFinish} className="deploy-post" layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your Title!",
            },
          ]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          label="Summary"
          name="summary"
          rules={[
            {
              required: true,
              message: "Please input your Summary!",
            },
          ]}
        >
          <Input placeholder="Summary" />
        </Form.Item>
        <Form.Item name="file" label="File">
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[
            {
              required: true,
              message: "Please input your Content!",
            },
          ]}
        >
          <ReactQuill theme="snow" style={{ minHeight: "30vh" }} />
        </Form.Item>
        <Button htmlType="submit">Create a Post</Button>
      </Form>
    </div>
  );
};

export default CreatePost;
