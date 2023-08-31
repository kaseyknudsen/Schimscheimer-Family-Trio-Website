"use client";
import { SliderData } from "../data/SliderData";
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
  // Auto change slides every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval);
  }, [current]); // Re-run effect when current slide changes

  return (
    <div className="relative">
      <div className="mt-[25%]">
        {SliderData.map((slide, index) => {
          return (
            <>
              <div
                key={index}
                className={
                  index === current
                    ? "opacity-[1] ease-in duration-1000"
                    : "opacity-0"
                }
              >
                <FaArrowCircleLeft
                  onClick={previousSlide}
                  className="absolute top-[50%] left-[25px] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />

                {index === current && (
                  <div className="border-2 border-white rounded-md">
                    <Image
                      src={slide.image}
                      alt={slide.caption}
                      width="600"
                      height="200"
                      // style={{ objectFit: "contain" }}
                      priority={true}
                    />
                  </div>
                )}

                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[25px] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
                <div className="p-2">
                  <p className="text-white relative ">{slide.caption}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
