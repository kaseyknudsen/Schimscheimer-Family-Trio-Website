import YouTubeEmbed from "../components/YouTubeEmbed";
export const metadata = {
  title: "Listen To The Schimscheimer Family Trio",
  description: "Check us out on Bandcamp and YouTube",
};

const page = () => {
  return (
    <div className="custom-img5 bg-fixed bg-center min-h-screen">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/50" />
      <div className="absolute z-10 mt-40 flex flex-col gap-10 text-white video-responsive ml-20">
        <div>
          <p className="text-3xl text-center mb-5">Ursula</p>
          {<YouTubeEmbed videoId={"DUsGf6sjZWE"} />}
        </div>
        <div>
          <p className="text-3xl text-center mb-5">Marcel</p>
          {<YouTubeEmbed videoId={"W-01_HLA8GI"} />}
        </div>
        <div>
          <p className="text-3xl text-center mb-5">Dottie</p>
          {<YouTubeEmbed videoId={"zsf2ytoJkEw"} />}
        </div>
      </div>
    </div>
  );
};

export default page;
