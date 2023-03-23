import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";

//middleware
import notFoundMiddleware from "./middlleware/not-found.js";
import errorHandlerMiddleware from "./middlleware/error-handler.js";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("welcome!");
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
