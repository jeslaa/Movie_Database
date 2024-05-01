import connectToDB from "@/lib/server";
import Movie from "@/models/Movie";
import { NextRequest, NextResponse } from "next/server";
import MovieModel from "@/models/Movie";

export const GET = async () => {
  await connectToDB();
  const data = await Movie.find();

  return NextResponse.json(data);
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    const data = await req.json(); // Parse the JSON body
    const newMovie = new MovieModel(data); // Create a new movie instance
    await newMovie.save(); // Save the new movie to the database
    return NextResponse.json(newMovie);
  } catch (error) {
    console.error("Error occurred while adding movie:", error);
    return NextResponse.error();
  }
};
