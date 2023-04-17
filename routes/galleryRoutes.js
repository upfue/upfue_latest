import {
  createSingleImage,
  getAllImages,
  deleteSingleImage,
  updateImage,
} from "../controller/galleryController.js";
import express from "express";
import multer from "multer";
const uploadMiddleware = multer({ dest: "uploads/" });
const router = express.Router();

router
  .route("/")
  .post(uploadMiddleware.single("file"), createSingleImage)
  .get(getAllImages);
// router.route("/stats").get(showStats);
router.route("/:id").delete(deleteSingleImage).patch(updateImage);

export default router;
