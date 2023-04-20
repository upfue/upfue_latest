import {
  createSingleImage,
  getAllImages,
} from "../controller/galleryController.js";
import express from "express";
import multer from "multer";
import authenticateUser from "../middlleware/auth.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router
  .route("/")
  .post(upload.single("file"), authenticateUser, createSingleImage)
  .get(getAllImages);
export default router;
