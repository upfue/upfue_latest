import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
//middleware
import notFoundMiddleware from "./middlleware/not-found.js";
import errorHandlerMiddleware from "./middlleware/error-handler.js";
import authRouter from "./routes/authRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import galleryRouter from "./routes/galleryRoutes.js";
import newsRouter from "./routes/newsRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, "./Frontend/build")));

console.log(__dirname);
app.use(
  "/api/v1/gallery/uploads",
  express.static(path.join(__dirname, "/uploads"))
);
app.use(
  "/api/v1/blog/bloguploads",
  express.static(path.join(__dirname, "/bloguploads"))
);
app.use(
  "/api/v1/blog/:id/bloguploads",
  express.static(path.join(__dirname, "/bloguploads"))
);
app.use(
  "/api/v1/blog/allblogs/bloguploads",
  express.static(path.join(__dirname, "/bloguploads"))
);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("welcome!");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/gallery", galleryRouter);
app.use("/api/v1/news", newsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Frontend/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
