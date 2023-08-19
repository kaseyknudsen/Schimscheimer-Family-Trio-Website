import React from "react";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import Image from "next/image";
const page = () => {
  return (
    <>
    <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/60" />
    <div className="custom-img4 h-screen relative flex items-center justify-center">
      <Slider slides={SliderData} />
      {/* {SliderData.map((slide, index) => {
          return (
            <Image src={slide.image} alt="Schimscheimer Family" width="400" />
          );
        })} */}
    </div>
    </>
  );
};

export default page;
