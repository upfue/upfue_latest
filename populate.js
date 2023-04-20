import { readFile } from "fs/promises";

import dotenv from "dotenv";

dotenv.config();
import connectDB from "./db/connect.js";
import Blog from "./models/Blog.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Blog.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    await Blog.create(jsonProducts);
    console.log("SUCCESS!!!");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
start();
