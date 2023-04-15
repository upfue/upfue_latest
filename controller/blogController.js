import Blog from "../models/Blog.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createBlog = async (req, res) => {
  const { title, image, description } = req.body;
  if (!title || !image || !description) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const blog = await Blog.create(req.body);
  res.status(StatusCodes.CREATED).json({ blog });
  res.json(req.files);
};

const deleteBlog = async (req, res) => {
  res.status(200).json({ msg: `Blog created1` });
};
const getAllblog = async (req, res) => {
  res.status(200).json({ msg: `Blog created1` });
};
const updateBlog = async (req, res) => {
  res.status(200).json({ msg: `Blog created1` });
};
const showStats = async (req, res) => {
  res.status(200).json({ msg: `Blog created1` });
};

export { createBlog, deleteBlog, getAllblog, updateBlog, showStats };
