import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import Gallery from "../models/Gallery.js";
import checkPermissions from "../utils/checkPermissions.js";

const createSingleImage = async (req, res) => {
  console.log(req.file);
  if (!req.file) {
    throw new BadRequestError("Please upload an image");
  }
  const gallery = await Gallery.create({
    GalleryImage: req.file.location,
    createdBy: req.user.userId,
  });
  res.status(StatusCodes.CREATED).json(gallery);
};

const getUserImages = async (req, res) => {
  const gallery = await Gallery.find({ createdBy: req.user.userId }).populate(
    "createdBy",
    ["name"]
  );
  res.status(StatusCodes.OK).json({ gallery });
};
const getAllImages = async (req, res) => {
  const gallery = await Gallery.find()
    .populate("createdBy", ["name"])
    .sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({ gallery });
};

const deleteSingleImage = async (req, res) => {
  const { id: galleryId } = req.params;

  const gallery = await Gallery.findOne({ _id: galleryId });
  if (!gallery) {
    throw new NotFoundError(`No Gallery Image with ID: ${galleryId}`);
  }
  //CHECK PERMISSIONS
  checkPermissions(req.user, gallery.createdBy);

  await gallery.deleteOne();
  res.status(StatusCodes.OK).json({ msg: "Success! Gallery Image Deleted!" });
};
const updateImage = async (req, res) => {};

export {
  createSingleImage,
  getUserImages,
  getAllImages,
  deleteSingleImage,
  updateImage,
};
