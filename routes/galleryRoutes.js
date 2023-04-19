import {
  createSingleImage,
  getAllImages,
} from "../controller/galleryController.js";
import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router
  .route("/")
  .post(upload.single("file"), createSingleImage)
  .get(getAllImages);
export default router;
