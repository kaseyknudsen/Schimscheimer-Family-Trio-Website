import React from "react";
import Slider from "../components/Slider";
import { SliderData } from "../data/SliderData";
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="custom-img6 flex justify-center">
        {/* overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-black/60" />
        <h1 className="text-white text-5xl absolute mt-[5em] z-10">Gallery</h1>
        <div className="h-screen">
          <Slider slides={SliderData} />
        </div>
      </div>
    </>
  );
};

export default page;
