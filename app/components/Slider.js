"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaCirclePlay,
} from "react-icons/fa";

import {
  AiFillPauseCircle,
  AiFillRightCircle,
  AiFillLeftCircle,
  AiFillPlayCircle,
  AiFillFastBackward,
  AiFillFastForward,
  AiOutlinePause,
  AiOutlinePlaySquare


} from "react-icons/ai";

const Slider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(images[slideIndex]);
  const [isPaused, setIsPaused] = useState(false);

  const setSlider = (number) => {
    let newNumber = slideIndex + number;
    console.log(slideIndex);
    setSlideIndex(newNumber);
    if (slideIndex === 0 && number === -1) {
      setSlideIndex(images.length - 1);
      return;
    }
    if (slideIndex === images.length - 1 && number === 1) {
      setSlideIndex(0);
      return;
    }
  };
  useEffect(() => {
    setActiveSlide(images[slideIndex]);
  }, [slideIndex]);

  useEffect(() => {
    if (isPaused) return;
    const setSlideAutomatically = setInterval(() => {
      setSlider(1);
    }, 5000);
    return () => clearInterval(setSlideAutomatically);
  }, [slideIndex, isPaused]);
  return (
    <div id="slider" className="text-white p-20 ">
      {images && (
        <div className="slider-container relative flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl text-center mb-10 text-white">
            Gallery
          </h1>
          <div className="slider-img max-w-screen-md rounded-lg overflow-hidden border">
            <Image src={activeSlide} className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-row gap-3 mt-5">
            <a
              className="button-previous  left-0 hover:cursor-pointer "
              onClick={() => setSlider(-1)}
            >
              <AiFillFastBackward className="w-5 h-5 md:w-10 md:h-10 lg:w-15 lg:h-15 z-40 bg-black/90 p-1 rounded-full" />
            </a>
            <a
              className="button-next right-0 z-10 hover:cursor-pointer"
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? (
                <AiOutlinePlaySquare className="w-5 h-5 md:w-10 md:h-10 lg:w-15 lg:h-15 z-40  p-1" />
              ) : (
                <AiOutlinePause className="w-5 h-5 md:w-10 md:h-10  lg:w-15 lg:h-15 z-40  p-1" />
              )}
            </a>
            <a
              className="button-next right-0 z-10 hover:cursor-pointer"
              onClick={() => setSlider(1)}
            >
              <AiFillFastForward className="w-5 h-5 md:w-10 md:h-10  lg:w-15 lg:h-15 z-40  bg-black/90 p-1 rounded-full" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
