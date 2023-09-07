"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMobileMenu = () => {
    setNav(false);
  };

  return (
    <div className="relative bg-black left-0 top-0 w-full z-20 ease-in duration-300 text-white text-xl">
      <div className="pl-5 m-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-5xl p-2 hover:scale-125 transition duration-700 ease-in-out">
            SFT
          </h1>
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-2 hover:scale-125 transition duration-700 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 hover:scale-125 transition duration-700 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 hover:scale-125 transition duration-700 ease-in-out">
            <Link href="/shows">Shows</Link>
          </li>
          <li className="p-2 hover:scale-125 transition duration-700 ease-in-out">
            <Link href="/listen">Listen</Link>
          </li>

          <li className="p-2 hover:scale-125 transition duration-700 ease-in-out">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="p-2 hover:scale-125 transition duration-700 ease-in-out">
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
              <Link href="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/shows" onClick={closeMobileMenu}>
                Shows
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/listen" onClick={closeMobileMenu}>
                Listen
              </Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
