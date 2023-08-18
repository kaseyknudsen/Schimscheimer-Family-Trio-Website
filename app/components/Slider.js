"use client";
import { SliderData } from "./SliderData";
import Image from "next/image";
import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState();
  return (
    <div id="gallery" className="flex items-center justify-center flex-col">
      <h1 className="text-4xl mb-10">Gallery</h1>
      <div>
        {SliderData.map((slide, index) => {
          return (
            <div key={index} className="">
              <Image
                src={slide.image}
                width="600"
                height="200"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
