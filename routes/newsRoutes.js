import express from "express";
import multer from "multer";
import authenticateUser from "../middlleware/auth.js";

const router = express.Router();
const upload = multer({ dest: "newsuploads/" });

router.route("/").post(upload.single("file"), authenticateUser);

export default router;
