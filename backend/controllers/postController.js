import fs from "fs";
import asynchandler from "express-async-handler";
import Post from "../models/postModel.js";

export const createPost = asynchandler(async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const cover = path + "." + ext;
  fs.renameSync(path, cover);
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

export const getAllPost = asynchandler(async (req, res) => {
  const posts = await Post.find()
    .populate("author", "name")
    .sort({ createdAt: "-1" })
    .limit(20);
  res.send(posts);
});
