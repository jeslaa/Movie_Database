"use server";

import Movie from "@/models/Movie";

const addPost = async ({
  title,
  description,
  genre,
  publishingYear,
  image,
  score,
  length,
}: Movie) => {
  try {
    const newMovie = new Movie({
      title,
      description,
      genre,
      publishingYear,
      image,
      score,
      length,
    });

    await newMovie.save();

    console.log("Movie added successfully:", newMovie);
  } catch (error) {
    console.error("Error occurred while adding movie:", error);
  }
};

export default addPost;
