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
import authenticateUser from "../middlleware/auth.js";
import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
const router = express.Router();
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  region: process.env.AWS_BUCKET_REGION,
  
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "upfueweb",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `blogimage-${Date.now()}.${file.mimetype}`);
    },
  }),
});
router
  .route("/")
  .post(upload.single("file"), authenticateUser, createBlog)
  .get(authenticateUser, getUserBlog);
router.route("/stats").get(showStats);
router.route("/allblogs").get(getAllBlog);
router
  .route("/:id")
  .delete(authenticateUser, deleteBlog)
  .patch(upload.single("file"), authenticateUser, updateBlog)
  .get(getBlogDetail);

export default router;
