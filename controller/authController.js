import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already registered !");
  }
  const user = await User.create({ name, email, password });
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
