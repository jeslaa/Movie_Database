"use client";
import React, { useEffect, useState } from "react";

const MovieSpec = ({ params }: { params: { id: string } }) => {
  const [movie, setMovie] = useState<Banner | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`/api/banner/${params.id}`); // Include the dynamic ID in the URL
        if (!res.ok) {
          throw new Error("Failed to fetch movie");
        }
        const movieData = await res.json();
        setMovie(movieData.banner);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchMovie();
  }, [params.id]);

  return (
    <div className="flex text-white pt-24 px-px sm:px-16 w-full justify-center">
      {/* Render movie details */}
      {movie ? (
        <div className="w-5/6">
          <h1 className="text-4xl font-bold mb-5 ">{movie.title}</h1>
          <div className="flex w-full justify-center">
            <img src={movie.image} alt={movie.title} className="" />
          </div>
          <div className="flex flex-wrap gap-x-2 sm:gap-x-6 text-sm mt-5">
            {/* Container for genre */}
            <div className="flex items-center">
              <p className="rounded-lg bg-gray-dark p-px md:p-2">
                {movie.genre}
              </p>
            </div>
            {/* Container for other details */}
            <div className="flex items-center gap-x-2 sm:gap-x-6">
              <div className="w-px h-4 bg-white mt-1"></div>

              <p className="rounded-lg bg-gray-dark p-px md:p-2">
                {movie.score}
              </p>
              <div className="w-px h-4 bg-white mt-1"></div>
              <p className="rounded-lg bg-gray-dark p-px md:p-2">
                {movie.publishingYear}
              </p>
              <div className="w-px h-4 bg-white mt-1"></div>
              <p className="rounded-lg bg-gray-dark p-px md:p-2">
                {movie.length}
              </p>
            </div>
          </div>
          <p className="mt-5 text-lg mb-5 sm:mb-10">{movie.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieSpec;
