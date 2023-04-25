import {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllblog,
  getSingleblog,
  showStats,
} from "../controller/blogController.js";
import express from "express";
import multer from "multer";
import authenticateUser from "../middlleware/auth.js";
const upload = multer({ dest: "bloguploads/" });

const router = express.Router();

router
  .route("/")
  .post(upload.single("file"), authenticateUser, createBlog)
  .get(authenticateUser, getAllblog);
router.route("/stats").get(showStats);
router
  .route("/:id")
  .delete(authenticateUser, deleteBlog)
  .patch(authenticateUser, updateBlog)
  .get(authenticateUser, getSingleblog);

export default router;
