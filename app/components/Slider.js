"use client";
import { SliderData } from "./SliderData";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

  return (
    <div id="gallery" >
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0"
            }
          >
            <div className="relative flex justify-center p-4">
              <FaArrowCircleLeft
                onClick={previousSlide}
                className="absolute top-[50%] left-[50px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />

              {index === current && (
                <Image
                  src={slide.image}
                  alt="Schimscheimer Family"
                  width="600"
                  height="200"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[50px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
