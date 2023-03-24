import {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllblog,
  showStats,
} from "../controller/blogController.js";

import express from "express";

const router = express.Router();

router.route("/").post(createBlog).get(getAllblog);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteBlog).patch(updateBlog);

export default router;
