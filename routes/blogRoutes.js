import {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllblog,
  showStats,
} from "../controller/blogController.js";

import express from "express";
import multer from "multer";
const uploadMiddleware = multer({ dest: "uploads/" });

const router = express.Router();

router.route("/").post(uploadMiddleware.single('file'), createBlog).get(getAllblog);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteBlog).patch(updateBlog);

export default router;
