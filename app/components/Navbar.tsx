import React from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-transparent p-5 top-0 z-10">
      <div className="flex-1 flex flex-row justify-between text-white items-center text-lg ">
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

          <div className="w-px h-5 bg-white"></div>

          <BsSearch className="text-lg cursor-pointer mr-2 md:mr-20 md:text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
