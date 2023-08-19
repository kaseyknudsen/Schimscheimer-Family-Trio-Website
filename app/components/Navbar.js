"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" fixed left-0 top-0 w-full z-10 ease-in duration-300 text-white text-xl">
      <div className="max-w-[1240px] m-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-5xl p-2">SFT</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-2">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2">
            <Link href="/shows">Shows</Link>
          </li>
          <li className="p-2">
            <Link href="/listen">Listen</Link>
          </li>
          <li className="p-2">
            <Link href="/store">Store</Link>
          </li>
          <li className="p-2">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="p-2">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* mobile button */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/shows">Shows</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/listen">Listen</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/store">Store</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
