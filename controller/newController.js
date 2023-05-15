import New from "../models/New.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";

//CREATE BLOGS
const createNews = async (req, res) => {
  const { newsTitle, newsContent } = req.body;

  if (!req.file) {
    throw new BadRequestError("Please upload an image");
  }
  const news = await New.create({
    newsTitle,
    newsContent,
    newsImage: req.file.location,
    createdBy: req.user.userId,
  });
  res.status(StatusCodes.CREATED).json(news);
};

// GET NEWS
const getUserNews = async (req, res) => {
  const newsBackend = await New.find({ createdBy: req.user.userId }).populate(
    "createdBy",
    ["name"]
  );
  res
    .status(StatusCodes.OK)
    .json({ newsBackend, totalNews: newsBackend.length, numOfPages: 1 });
};

const getAllNews = async (req, res) => {
  const news = await New.find()
    .populate("createdBy", ["name"])
    .sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json(news);
};

//UPDATE NEWS
const updateNews = async (req, res) => {
  const { id: newsId } = req.params;
  const { newsTitle, newsContent } = req.body;
  console.log(req.body);
  if (!newsTitle || !newsContent) {
    throw new BadRequestError("Please provide all values");
  }
  const news = await New.findOne({ _id: newsId });

  if (!news) {
    throw new NotFoundError(`No New with ID :${newsId}`);
  }
  //CHECK PERMISSIONS

  checkPermissions(req.user, news.createdBy);

  news.newsTitle = newsTitle;
  news.newsImage = req.file.location;
  news.newsContent = newsContent;

  await news.save();
  res.status(StatusCodes.OK).json({ news });
};

//DELETE News
const deleteNews = async (req, res) => {
  const { id: newsId } = req.params;

  const news = await New.findOne({ _id: newsId });

  if (!news) {
    throw new NotFoundError(`No News with ID :${newsId}`);
  }
  //CHECK PERMISSIONS

  checkPermissions(req.user, news.createdBy);

  await news.deleteOne();
  res.status(StatusCodes.OK).json({ msg: "Success! News deleted" });
};

const getNewsDetail = async (req, res) => {
  const { id: newsId } = req.params;
  const newsDetails = await New.findOne({ _id: newsId }).populate("createdBy", [
    "name",
  ]);
  res.status(StatusCodes.OK).json(newsDetails);
};

// const showStats = async (req, res) => {
//   let stats = await Blog.aggregate([
//     { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
//     { $group: { _id: "$title", count: { $sum: 1 } } },
//   ]);

//   stats = stats.reduce((acc, curr) => {
//     const { _id: title, count } = curr;
//     acc[title] = count;
//     return acc;
//   }, {});

//   const defaultStats = {
//     title: stats.Nurse || 0,
//   };

//   let monthlyApplications = [];

//   res.status(StatusCodes.OK).json({ defaultStats, stats, monthlyApplications });
// };

export {
  createNews,
  getAllNews,
  getUserNews,
  getNewsDetail,
  deleteNews,
  updateNews,
};
