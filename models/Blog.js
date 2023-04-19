import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      unique: true,
    },
    blogImage: {
      type: String,
      required: [true, "Please provide image"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    author: {
      type: String,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
