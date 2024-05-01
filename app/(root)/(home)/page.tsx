"use client";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const moviesData = await response.json();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="">
      {movies.map((movie, key) => (
        <div key={key} className="relative h-full bg-gradient-to-l from-gray">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-screen h-full mix-blend-overlay"
          />
          <div className="absolute top-20 left-10 sm:left-20 sm:top-1/4">
            {/*Title*/}
            <h2 className="sm:text-6xl text-2xl w-full lg:w-2/6 font-bold">
              {movie.title}
            </h2>

            {/*Description*/}
            <p className="w-4/6 md:mt-4">{movie.description}</p>

            {/*Score*/}
            <div className="flex gap-x-2 mt-2">
              <p>{movie.score}</p>

              {/*Year*/}
              <div className="w-px h-4 bg-white mt-1"></div>
              <p>{movie.publishingYear}</p>

              {/*Length*/}
              <div className="w-px h-4 bg-white mt-1"></div>
              <p>{movie.length}</p>

              {/*Genre*/}
              <div className="w-px h-4 bg-white mt-1"></div>
              <p className="">{movie.genre.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
