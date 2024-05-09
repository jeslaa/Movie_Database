import Movie from "@/models/Movie";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Extract the query parameter from the request URL
    const query = req.nextUrl.searchParams.get("query");

    let filteredMovies;

    // If a query parameter is provided, filter movies based on it
    if (query) {
      filteredMovies = await Movie.find({
        title: { $regex: query, $options: "i" }, // Case-insensitive search for movie titles
      });
    } else {
      // If no query parameter is provided, return all movies
      filteredMovies = await Movie.find();
    }

    return new Response(JSON.stringify(filteredMovies), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
