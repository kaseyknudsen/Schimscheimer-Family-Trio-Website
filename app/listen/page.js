"use client";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { videoData } from "../data/videoData";
import BandcampAlbums from "../components/BandcampAlbums";
import { bandcampData } from "../data/bandCampData";
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
    <div className="custom-img5 bg-fixed bg-center min-h-screen z-[-1]">
      <div className="h-full flex flex-col justify-center items-center z-10  text-white text-3xl">
        <p className="text-white text-6xl mt-60 relative z-10 fadeIn3s">Listen</p>
        <div class="h-0.5 w-[83%] bg-white my-8 z-1 img" />
        <div className="container flex flex-col sm:flex-row justify-center relative text-lg gap-10 sm:gap-20 md:gap-40 z-10 fadeIn4s">
          {bandcampData.map((album, idx) => {
            return (
              <div className="flex flex-col items-center">
                <BandcampAlbums
                  key={idx}
                  albumTitle={album.albumTitle}
                  link={album.link}
                  image={album.image}
                  alt={album.albumTitle}
                />
              </div>
            );
          })}
        </div>
        <div class="h-0.5 w-[83%] bg-white my-8 z-10" />

        <div className="mt-5 flex flex-col gap-20 z-20 fadeIn5s">
          {videoData.map((video, idx) => {
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
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
    </div>
  );
};

export default page;
