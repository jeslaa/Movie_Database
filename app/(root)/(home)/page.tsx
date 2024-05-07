"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("/api/banner");
        if (!response.ok) {
          throw new Error("Failed to fetch banners");
        }
        const bannersData = await response.json();
        setBanners(bannersData);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

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

    fetchBanners(), fetchMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextBanner();
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPreviousBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNextBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`relative h-full w-full bg-gradient-to-l from-gray ${
            index === currentIndex ? "" : "hidden"
          }`}
        >
          {/* Container for image and arrows */}
          <div className="relative">
            <div>
              <img
                src={banner.image}
                alt={banner.title}
                className="w-screen h-full mix-blend-overlay"
              />
            </div>

            {/* Absolute positioning for arrows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-white flex justify-between text-lg pl-5 pr-5">
              <FaArrowLeft
                className="cursor-pointer"
                onClick={goToPreviousBanner}
              />
              <FaArrowRight
                className="cursor-pointer"
                onClick={goToNextBanner}
              />
            </div>
          </div>
          {/* Details */}
          <Link href={"/postMovie"}>
            <div className="absolute top-20 left-10 sm:left-20 sm:top-1/4 w-3/4 cursor-pointer hover:underline">
              <h2 className="sm:text-6xl text-2xl w-full lg:w-2/6 font-bold cursor-pointer">
                {banner.title}
              </h2>
              <p className="w-4/6 md:mt-4 truncate sm:w-full lg:w-4/6">
                {banner.description}
              </p>
              <div className="flex gap-x-2 mt-2">
                <p>{banner.score}</p>
                <div className="w-px h-4 bg-white mt-1"></div>
                <p>{banner.publishingYear}</p>
                <div className="w-px h-4 bg-white mt-1"></div>
                <p>{banner.length}</p>
                <div className="w-px h-4 bg-white mt-1"></div>
                <p className="">{banner.genre.join(", ")}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
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
              <Link href={"/"} className="">
                <div className="absolute bottom-2 right-4 p-4 bg-black rounded-sm">
                  <FaArrowRight></FaArrowRight>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
