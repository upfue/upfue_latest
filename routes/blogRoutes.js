import {
  createBlog,
  deleteBlog,
  updateBlog,
  getUserBlog,
  getAllBlog,
  showStats,
  getBlogDetail,
} from "../controller/blogController.js";
import express from "express";
import multer from "multer";
import authenticateUser from "../middlleware/auth.js";
const upload = multer({ dest: "bloguploads/" });

const router = express.Router();

router
  .route("/")
  .post(upload.single("file"), authenticateUser, createBlog)
  .get(authenticateUser, getUserBlog);
router.route("/stats").get(showStats);
router.route("/allblogs").get(getAllBlog);
router
  .route("/:id")
  .delete(authenticateUser, deleteBlog)
  .patch(authenticateUser, updateBlog)
  .get(authenticateUser, getBlogDetail);

export default router;
