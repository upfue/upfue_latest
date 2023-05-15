import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    newsTitle: {
      type: String,
    },
    newsImage: {
      type: String,
    },
    newsContent: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("New", newsSchema);
