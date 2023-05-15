import express from "express";
import authenticateUser from "../middlleware/auth.js";
import {
  createNews,
  getAllNews,
  getUserNews,
  getNewsDetail,
  deleteNews,
  updateNews,
} from "../controller/newController.js";
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
      cb(null, `newsimage-${Date.now()}.${file.mimetype}`);
    },
  }),
});
router
  .route("/")
  .post(upload.single("file"), authenticateUser, createNews)
  .get(authenticateUser, getUserNews);
router.route("/all-news").get(getAllNews);

router
  .route("/:id")
  .get(getNewsDetail)
  .delete(authenticateUser, deleteNews)
  .patch(upload.single("file"), authenticateUser, updateNews);
export default router;
