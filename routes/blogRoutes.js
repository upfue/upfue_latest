import {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllblog,
  showStats,
} from "../controller/blogController.js";
import express from "express";
import multer from "multer";

const upload = multer({ dest: "bloguploads/" });

const router = express.Router();

router.route("/").post(upload.single("file"), createBlog).get(getAllblog);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteBlog).patch(updateBlog);

export default router;
