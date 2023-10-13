import ShowCard from "../components/ShowCard";
import { showData } from "../data/showData";
export const metadata = {
  title: "Come see the Schimscheimer Family Trio",
  description: "We'd love to play music for you!",
};

const page = () => {
  return (
    <div className="custom-img6 bg-fixed bg-center min-h-screen z-[-1]">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-black/50" />
      <div className="h-full flex flex-col ml-10 mr-[4em]">
        <div className="flex flex-col gap-5">
          <p className="text-white text-6xl mt-40 lg:mt-60 z-10 text-center fadeIn4s ">
            Shows
          </p>
          {showData && showData.length > 0 ? (
            <>
              <div class="h-0.5 w-[100%] bg-white my-8" />
              <div className="flex flex-col gap-5 fadeIn5s z-10 mb-5">
                {showData.map((show, idx) => {
                  return (
                    <ShowCard
                      key={idx}
                      date={show.date}
                      venue={show.venue}
                      location={show.location}
                      time={show.time}
                      website={show.website}
                      link={show.link ? show.link : null}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <p className="text-white text-3xl mt-40 lg:mt-60 z-10 text-center fadeIn4s ">
              No shows currently scheduled. Check back soon!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
