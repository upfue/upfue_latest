import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import "express-async-errors";
import morgan from "morgan";


//middleware
import notFoundMiddleware from "./middlleware/not-found.js";
import errorHandlerMiddleware from "./middlleware/error-handler.js";
import authRouter from "./routes/authRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import authenticateUser from "./middlleware/auth.js";
const app = express();

dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blog", authenticateUser, blogRouter);

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
