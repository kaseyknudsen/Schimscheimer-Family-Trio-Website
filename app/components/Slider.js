"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(images[slideIndex]);

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
  return (
    <div id="slider" className="text-white p-20 ">
      {images && (
        <div className="slider-container relative flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl text-center mb-4 text-white">
            Gallery
          </h1>
          <div className="slider-img max-w-screen-md rounded-lg overflow-hidden">
            <Image src={activeSlide} className="object-cover w-full h-full" />
          </div>
          <a
            className="button-previous absolute left-0 p-2 hover:cursor-pointer "
            onClick={() => setSlider(-1)}
          >
            <FaArrowCircleLeft className="w-7 h-7 md:w-10 md:h-10 lg:w-20 lg:h-20 " />
          </a>
          <a
            className="button-next absolute right-0 p-2 z-10 hover:cursor-pointer"
            onClick={() => setSlider(1)}
          >
            <FaArrowCircleRight className="w-7 h-7 md:w-10 md:h-10 lg:w-20 lg:h-20" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Slider;
