import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import Gallery from "../models/Gallery.js";
import fs from "fs";

const createSingleImage = async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  const gallery = await Gallery.create({
    GalleryImage: newPath,
  });
  res.json({ files: req.file });
};

const getAllImages = async (req, res) => {
  const gallery = await Gallery.find();
  res.status(StatusCodes.OK).json({ gallery });
};

const deleteSingleImage = async (req, res) => {};
const updateImage = async (req, res) => {};

export { createSingleImage, getAllImages, deleteSingleImage, updateImage };
