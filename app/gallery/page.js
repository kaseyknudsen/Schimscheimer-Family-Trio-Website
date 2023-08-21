import React from "react";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import Image from "next/image";
const page = () => {
  return (
    <>
    
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/60" />
      
      <div className="custom-img6 h-screen relative flex items-center justify-center">
        
        <Slider slides={SliderData} />
      </div>
    </>
  );
};

export default page;
