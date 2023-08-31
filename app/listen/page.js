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
      
      <div className="h-full flex flex-col gap-10 items-center justify-center z-10 relative text-white text-3xl">
        <div className="mt-60">
        <h1 className="text-white text-5xl mb-40 text-center">Listen to The Schimscheimers</h1>
          {videoData.map((video, idx) => {
            return <YouTubeEmbed videoId={video.id} title={video.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
