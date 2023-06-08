import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../redux/post/postSlice";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const handleEditorChange = (value) => {
    setValue("content", value); // Update the form value for the editor
  };
  const onSubmit = async (data) => {
    // Handle form submission
    const postData = new FormData();
    postData.set("title", data.title);
    postData.set("summary", data.summary);
    postData.set("content", data.content);
    postData.set("file", data.file[0]);

    dispatch(createPost(postData));

    // const response = await axios.post("/api/post/", postData);
    // if (response.data) {
    //   console.log(response.data);
    // } else {
    //   console.log(`Error: ${response}`);
    // }
  };
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
      <button style={{ marginTop: "5px" }}>Create post</button>
    </form>
  );
};

export default CreatePost;
