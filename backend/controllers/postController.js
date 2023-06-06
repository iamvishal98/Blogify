import fs from "fs";
import asynchandler from "express-async-handler";
import Post from "../models/postModel.js";

export const createPost = asynchandler(async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  fs.renameSync(path, path + "." + ext);
  const { title, summary, content } = req.body;
  const post = await Post.create({
    title,
    summary,
    content,
    author: req.user.id,
  });

  res.json(post);
});
