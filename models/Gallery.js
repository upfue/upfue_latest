import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    GalleryImage: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", GallerySchema);
