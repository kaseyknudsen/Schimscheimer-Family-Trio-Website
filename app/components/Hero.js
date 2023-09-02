"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AudioComponent from "./AudioComponent";
const Hero = () => {
  return (
    <div className="flex items-center justify-center custom-img1 h-screen bg-fixed bg-center bg-cover">
      <div className="p-5 text-white font-medium  z-[5]  mt-[-10rem]">
        <h2 className="text-6xl">Schimscheimer Family Trio</h2>
        <p className="py-5 pr-[4rem] ">
          Continuing with their tradition of composing sonnets to beloved,
          albeit often fabricated relatives, the Schimscheimer Family Trio’s 3rd
          album “Genogram” is a musical voyage into an unhinged family
          reunion–-a multidimensional soundscape of sometimes delicate, other
          times maniacal moments.
        </p>
        <Link
          href="https://schimscheimerfamilytrio.bandcamp.com/album/genogram"
          target="_blank"
        >
          <button className="px-8 py-2 border">Listen to the New Album</button>
        </Link>
      </div>
      
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/70" />
      {/* <AudioComponent /> */}
      
    </div>
  );
};

export default Hero;
