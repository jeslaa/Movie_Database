"use client";
import { useState } from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);

  const handleSearch = async (searchQuery: string) => {
    try {
      const response = await fetch(`/api/search?query=${searchQuery}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
      }
      const data: Movie[] = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setQuery(inputValue);
    if (inputValue.trim() !== "") {
      setSearchVisible(true); // Show search results if input is not empty
      handleSearch(inputValue);
    } else {
      setSearchVisible(false); // Hide search results if input is empty
      setMovies([]); // Clear search results
    }
  };

  return (
    <>
      <div className="relative max-sm:hidden">
        <div className="flex items-center relative">
          <BsSearch
            className="text-lg cursor-pointer md:text-xl"
            onClick={toggleSearchBar}
          />
          <input
            id="search-input"
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for movies..."
            className={`ml-2 px-2 py-1 bg-gray-100 text-black rounded-md w-full ${
              !searchVisible && "hidden"
            }`}
          />
        </div>
        {searchVisible && (
          <div
            className="absolute bg-white shadow-md mt-1 rounded-md overflow-hidden ml-7"
            style={{ top: "calc(100% + 5px)", left: "0" }}
          >
            <ul className="divide-y divide-gray-200">
              {movies.map((movie) => (
                <Link
                  href={`/movie/${movie._id}`}
                  key={movie._id}
                  onClick={toggleSearchBar}
                >
                  <li className="px-4 py-3 text-black hover:cursor-pointer hover:bg-gray">
                    {movie.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
