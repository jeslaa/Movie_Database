import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export const MovieCards = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/movies");
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        const movieData = await res.json();
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="mt-10 sm:mx-20 relative flex flex-col justify-center items-center">
      {/* "Movies" title */}
      <h1 className="text-3xl underline mb-5">Movies</h1>

      {/* Movie banners */}
      <div className="w-full flex flex-wrap justify-center m-0 p-0">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="max-w-64 bg-lighterBlack h-56 relative sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-5 sm:mr-5"
          >
            <div className="">
              <img src={movie.image} alt={movie.title} className="" />
            </div>
            <div className="flex m-2 flex-col w-48">
              <p>{movie.score}</p>
              <p>{movie.title}</p>
            </div>
            <Link
              href={`/movie/${movie._id}`}
              passHref
              className="absolute bottom-2 right-4 p-4 bg-black rounded-sm"
            >
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
