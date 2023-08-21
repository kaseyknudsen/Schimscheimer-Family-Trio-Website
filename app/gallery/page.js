import React from "react";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="custom-img6 h-screen relative flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl relative z-10">Gallery</h1>

        <Slider slides={SliderData} />
      </div>
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-black/60" />
    </>
  );
};

export default page;
