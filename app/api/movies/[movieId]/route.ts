import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export const getMoviesById = async (movieId: string) => {
  try {
    const movie = await Movie.findById(movieId);
    return movie;
  } catch (error) {
    throw new Error("Error fetching movie by ID");
  }
};

export const GET = async (req: Request, context: any) => {
  const { params } = context;
  const movieId = params.movieId;

  try {
    const movie = await getMoviesById(movieId);
    return NextResponse.json({
      movie,
    });
  } catch (error) {
    return NextResponse.error();
  }
};
