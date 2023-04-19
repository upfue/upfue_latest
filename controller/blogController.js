import Blog from "../models/Blog.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const createBlog = async (req, res) => {
  const { title, blogImage } = req.body;
  if (!title || !blogImage) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const blog = await Blog.create(req.body);
  res.status(StatusCodes.CREATED).json({ blog });
};
const getAllblog = async (req, res) => {
  const blogs = await Blog.find({
    createdBy: req.user.userId,
  }).populate("createdBy", ["name"]);
  res
    .status(StatusCodes.OK)
    .json({ blogs, totalBlogs: blogs.length, numOfPages: 1 });
};
const deleteBlog = async (req, res) => {
  res.status(200).json({ msg: `Blog created1` });
};

const updateBlog = async (req, res) => {
  res.status(200).json({ msg: `Blog created1` });
};
const showStats = async (req, res) => {
  res.status(200).json({ msg: `Blog created1` });
};

export { createBlog, deleteBlog, getAllblog, updateBlog, showStats };
