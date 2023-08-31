import YouTubeEmbed from "../components/YouTubeEmbed";
import { videoData } from "../data/videoData";
export const metadata = {
  title: "Listen To The Schimscheimer Family Trio",
  description: "Check us out on Bandcamp and YouTube",
};

const page = () => {
  return (
    <div className="custom-img5 bg-fixed bg-center min-h-screen relative top-0 left-0 right-0 bottom-0 z-[-1]">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/50" />

      <div className="h-full flex flex-col ml-10 z-10 relative text-white text-3xl">
        <p className="text-white text-6xl mt-60 z-10 relative">
          Listen to the Schimscheimers
        </p>
        <div className="mt-5 flex flex-col gap-20">
          <div class="h-0.5 w-[83%] bg-white my-8" />
          {videoData.map((video, idx) => {
            return <YouTubeEmbed videoId={video.id} title={video.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
