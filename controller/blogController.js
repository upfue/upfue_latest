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
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  const { blogTitle, blogContent } = req.body;

  if (!newPath) {
    throw new BadRequestError("Please upload an image");
  }
  const blog = await Blog.create({
    blogTitle,
    blogContent,
    blogImage: newPath,
    createdBy: req.user.userId,
  });
  res.status(StatusCodes.CREATED).json(blog);
};

//GET BLOGS
const getUserBlog = async (req, res) => {
  const blogsBackend = await Blog.find({ createdBy: req.user.userId }).populate(
    "createdBy",
    ["name"]
  );
  res
    .status(StatusCodes.OK)
    .json({ blogsBackend, totalBlogs: blogsBackend.length, numOfPages: 1 });
};

const getAllBlog = async (req, res) => {
  const blogs = await Blog.find()
    .populate("createdBy", ["name"])
    .sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json(blogs);
};

//UPDATE BLOG
const updateBlog = async (req, res) => {
  const { id: blogId } = req.params;
  const { blogImage } = req.file;
  const { blogTitle, blogContent } = req.body;
  // if (!blogTitle || !blogImage || blogContent) {
  //   throw new BadRequestError("Please provide all values");
  // }
  const blog = await Blog.findOne({ _id: blogId });

  if (!blog) {
    throw new NotFoundError(`No Blog with ID :${blogId}`);
  }
  //CHECK PERMISSIONS

  checkPermissions(req.user, blog.createdBy);

  blog.blogTitle = blogTitle;
  blog.blogImage = blogImage;
  blog.blogContent = blogContent;

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

const getBlogDetail = async (req, res) => {
  const { id: blogId } = req.params;
  const blogDetail = await Blog.findOne({ _id: blogId }).populate("createdBy", [
    "name",
  ]);
  res.status(StatusCodes.OK).json(blogDetail);
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

  res.status(StatusCodes.OK).json({ defaultStats, stats, monthlyApplications });
};

export {
  createBlog,
  deleteBlog,
  getUserBlog,
  getAllBlog,
  updateBlog,
  showStats,
  getBlogDetail,
};
