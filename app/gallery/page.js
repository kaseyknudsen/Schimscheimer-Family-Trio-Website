import React from "react";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="custom-img6 flex justify-center">
        <h1 className="text-white text-5xl absolute mt-[5em] z-10">Gallery</h1>
        <div className="h-screen flex flex-col items-center justify-center">
          <Slider slides={SliderData} />
        </div>
        {/* overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-black/60" />
      </div>
    </>
  );
};

export default page;
