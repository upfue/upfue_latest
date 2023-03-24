import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ user });
};
const login = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201), json({ user });
  } catch (error) {
    res.status(500).json({ msg: `There was an error!` });
  }
};
const updateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: `There was an error!` });
  }
};

export { register, login, updateUser };
