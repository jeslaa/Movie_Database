import React from "react";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-transparent m-5 top-0 z-10">
      <div className="flex-1 flex flex-row justify-between text-white items-center text-lg mr-10 md">
        <div className="flex flex-row">
          <div className="bg-yellow rounded-md p-2 font-bold text-black">
            New
          </div>
          <div className="text-yellow p-2 font-bold">Movie</div>
        </div>

        <div className="flex text-white flex-row items-center gap-x-2 md:gap-x-10 md:text-xl">
          <Link href="/" className="m-4 hover:underline">
            Home
          </Link>

          <Link href="/postMovie" className="hover:underline md:mr-20">
            Post
          </Link>

          <div className="w-px h-5 bg-white max-sm:hidden"></div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
