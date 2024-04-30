import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: String,
      required: [true, "Genre"],
    },
  ],
  publishingYear: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Movie || mongoose.model("Movie", movieSchema);
