import Blog from "../models/Blog.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import fs from "fs";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";

//CREATE BLOGS
const createBlog = async (req, res) => {
  const { title, blogImage } = req.body;
  if (!title || !blogImage) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const blog = await Blog.create(req.body);
  res.status(StatusCodes.CREATED).json({ blog });
};

//GET BLOGS
const getAllblog = async (req, res) => {
  const blogs = await Blog.find({
    createdBy: req.user.userId,
  }).populate("createdBy", ["name"]);
  res
    .status(StatusCodes.OK)
    .json({ blogs, totalBlogs: blogs.length, numOfPages: 1 });
};

//UPDATE BLOG
const updateBlog = async (req, res) => {
  const { id: blogId } = req.params;
  const { title, blogImage } = req.body;
  if (!title || !blogImage) {
    throw new BadRequestError("Please provide all values");
  }
  const blog = await Blog.findOne({ _id: blogId });

  if (!blog) {
    throw new NotFoundError(`No Blog with ID :${blogId}`);
  }
  //CHECK PERMISSIONS

  checkPermissions(req.user, blog.createdBy);

  blog.title = title;
  blog.blogImage = blogImage;

  await blog.save();
  res.status(StatusCodes.OK).json({ blog });
};
//DELETE BLOG
const deleteBlog = async (req, res) => {
  const { id: blogId } = req.params;

  const blog = await Blog.findOne({ _id: blogId });

  if (!blog) {
    throw new NotFoundError(`No Blog with ID :${blogId}`);
  }
  //CHECK PERMISSIONS

  checkPermissions(req.user, blog.createdBy);

  await blog.deleteOne();
  res.status(StatusCodes.OK).json({ msg: "Success! Blog deleted" });
};
const showStats = async (req, res) => {
  let stats = await Blog.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$title", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    title: stats.Nurse || 0,
  };

  let monthlyApplications = [];

  res.status(StatusCodes.OK).json({ defaultStats,stats, monthlyApplications });
};

export { createBlog, deleteBlog, getAllblog, updateBlog, showStats };
