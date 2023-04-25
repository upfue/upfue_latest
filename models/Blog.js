import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
    },
    blogImage: {
      type: String,
    },
    blogContent: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
