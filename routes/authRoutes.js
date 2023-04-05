import { login, register, updateUser } from "../controller/authController.js";
import express from "express";
import authenticateUser from "../middlleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateuser").patch(authenticateUser, updateUser);

export default router;
