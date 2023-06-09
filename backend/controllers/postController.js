import fs from "fs";
import asynchandler from "express-async-handler";
import Post from "../models/postModel.js";

export const createPost = asynchandler(async (req, res) => {
  let cover = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    cover = path + "." + ext;
    fs.renameSync(path, cover);
  }
  const { title, summary, content } = req.body;
  const post = await Post.create({
    title,
    summary,
    content,
    cover,
    author: req.user.id,
  });
  res.json(post);
});

export const editpost = asynchandler(async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }
  const { id, title, summary, content } = req.body;
  const postDoc = await Post.findById(id);
  const isAuthor =
    JSON.stringify(postDoc.author) === JSON.stringify(req.user.id);
  if (!isAuthor) {
    return res.status(400).json("you are not the author");
  }
  if (postDoc) {
    postDoc.title = req.body.title || postDoc.title;
    postDoc.summary = req.body.summary || postDoc.summary;
    postDoc.content = req.body.content || postDoc.content;
    postDoc.cover = newPath ? newPath : postDoc.cover;
    const updatedPost = await postDoc.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("post not found");
  }
});

export const getAllPost = asynchandler(async (req, res) => {
  const posts = await Post.find()
    .populate("author", "name")
    .sort({ createdAt: "-1" })
    .limit(20);
  res.send(posts);
});

export const getPost = asynchandler(async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", "name");
  if (postDoc) {
    res.send(postDoc);
  }
});
