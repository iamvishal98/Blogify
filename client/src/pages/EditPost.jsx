import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPost, reset } from "../redux/post/postSlice";
import ReactQuill from "react-quill";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, isLoading, isError, isCreatePostSuccess } = useSelector(
    (state) => state.posts
  );

  const onFinish = (data) => {
    const postData = new FormData();
    postData.set("title", data.title);
    postData.set("summary", data.summary);
    postData.set("content", data.content);
    postData.set("id", id);
    if (data.file?.fileList) {
      postData.set("file", data.file.fileList[0].originFileObj);
    }
    dispatch(editPost(postData));
  };
  useEffect(() => {
    dispatch(getPost(id));
    if (isError) {
      toast.error("Somwthing went wrong");
    }
    if (isCreatePostSuccess) {
      navigate("/");
      dispatch(reset());
    }
    return () => {
      dispatch(reset());
    };
  }, [isError, isCreatePostSuccess, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="deploy-post-container">
      <div className="deploy-title">
        <h3>Update your Post </h3>
      </div>
      {post && (
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            title: post?.title,
            summary: post?.summary,
            content: post?.content,
          }}
          className="deploy-post"
        >
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
          <Button htmlType="submit">Update</Button>
        </Form>
      )}
    </div>
  );
};

export default EditPost;
