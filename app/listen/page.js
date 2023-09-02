"use client";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { videoData } from "../data/videoData";
import BandcampAlbums from "../components/BandcampAlbums";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Listen To The Schimscheimer Family Trio",
//   description: "Check us out on Bandcamp and YouTube",
// };

const page = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 640
  );
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  const embedWidth =
    windowWidth < 640 ? "300" : windowWidth < 768 ? "500" : "700";
  return (
    <div className="custom-img5 bg-fixed bg-center min-h-screen relative z-[-1]">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/50" />

      <div className="h-full flex flex-col justify-center items-center z-10 relative text-white text-3xl">
        <p className="text-white text-6xl mt-60 z-10 relative">Listen</p>
        <div class="h-0.5 w-[83%] bg-white my-8" />
        <BandcampAlbums />
        <div class="h-0.5 w-[83%] bg-white my-8" />
        <div className="mt-5 flex flex-col gap-20">
          {videoData.map((video, idx, width, height) => {
            return (
              <YouTubeEmbed
                videoId={video.id}
                title={video.title}
                key={idx}
                width={embedWidth}
                height={"300"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
