export const metadata = {
  title: "Come see the Schimscheimer Family Trio",
  description: "We'd love to play music for you!",
};

const page = () => {
  return (
    <>
      <div className="custom-img6 bg-fixed bg-cover h-screen">Shows</div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/60">
        <div className="container mt-[20%] ml-10">
          <div className="h-48 bg-white/40 relative rounded flex flex-row justify-between text-black font-semibold">
            <div className="p-4 flex flex-col gap-2 items-start">
              <p className="text-md">Wednesday, October 4th</p>
              <p className="text-xl">Sonoma State University</p>
              <p className="text-md">Rohnert Park, CA</p>
              <p className="text-md">1pm-3pm</p>
            </div>
            <div className="h-[4em] w-[15em] bg-white relative flex flex-col justify-center mt-[4em] mr-5">
              <p className=" text-black text-center">Venue Website</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
