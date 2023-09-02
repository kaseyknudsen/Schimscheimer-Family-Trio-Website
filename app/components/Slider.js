"use client";
import { SliderData } from "../data/SliderData";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ images, title }) => {
  return (
    <div id="slider" className="text-white p-20 ">
      <h1 className="text-5xl">{title}</h1>
      {images && (
        <div className="slider-container relative flex flex-col items-center justify-center">
          <div className="slider-img max-w-screen-md rounded-md overflow-hidden">
            <Image src={images[0]} />
          </div>
          <a className="button-previous absolute left-0 p-2 z-10">
            <FaArrowCircleLeft size={50} />
          </a>
          <a className="button-next absolute right-0 p-2 z-10">
            <FaArrowCircleRight size={50} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Slider;
