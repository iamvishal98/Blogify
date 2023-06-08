import React, { useEffect, useState } from "react";
import Editor from "../components/Editor";
import { Navigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPost, reset } from "../redux/post/postSlice";
import ReactQuill from "react-quill";

const EditPost = () => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleEditorChange = (value) => {
    setValue("content", value); // Update the form value for the editor
  };

  const onSubmit = (data) => {
    const postData = new FormData();
    postData.set("title", data.title);
    postData.set("summary", data.summary);
    postData.set("content", data.content);
    postData.set("id", id);
    if (data.file?.[0]) {
      postData.set("file", data.file?.[0]);
    }
    dispatch(editPost(postData));
  };
  useEffect(() => {
    dispatch(getPost(id));
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="title"
        placeholder="Title"
        name="title"
        {...register("title")}
      />
      <input
        type="summary"
        placeholder="Summary"
        name="summary"
        {...register("summary")}
      />
      <input type="file" name="file" {...register("file")} />
      <ReactQuill
        name="content"
        onChange={handleEditorChange}
        ref={{ register }}
      />
      <button style={{ marginTop: "5px" }}>Update post</button>
    </form>
  );
};

export default EditPost;
