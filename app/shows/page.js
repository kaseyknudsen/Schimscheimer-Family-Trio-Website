import ShowCard from "../components/ShowCard";
import { showData } from "../data/showData";
export const metadata = {
  title: "Come see the Schimscheimer Family Trio",
  description: "We'd love to play music for you!",
};

const page = () => {
  return (
    <>
      <div className="custom-img6 bg-fixed bg-cover h-screen">Shows</div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/60">
        <div className="container mt-[20%] ml-10 mr-[4em] flex flex-col gap-10">
          {showData.map((show, idx) => {
            return (
              <ShowCard
                date={show.date}
                venue={show.venue}
                location={show.location}
                time={show.time}
                website={show.website}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
