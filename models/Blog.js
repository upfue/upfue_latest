import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
    },
    image: {
      type: String,
      required: [true, "Please provide image"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
