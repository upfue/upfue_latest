import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    GalleryImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", GallerySchema);
