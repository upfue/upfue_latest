import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createSingleImage = async (req, res) => {
  res.json({ files: req.files });
};
const getAllImages = async (req, res) => {};
const deleteSingleImage = async (req, res) => {};
const updateImage = async (req, res) => {};

export { createSingleImage, getAllImages, deleteSingleImage, updateImage };
