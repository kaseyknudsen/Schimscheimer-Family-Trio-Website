import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="p-5 text-white z-[2]  mt-[-10rem]">
          <h2 className="text-4xl">Schimscheimer Family Trio</h2>
          <p className="py-5 pr-[4rem]">
            Continuing with their tradition of composing sonnets to beloved,
            albeit often fabricated relatives, the Schimscheimer Family Trio’s
            3rd album “Genogram” is a musical voyage into an unhinged family
            reunion–-a multidimensional soundscape of sometimes delicate, other
            times maniacal moments.
          </p>
          <Link
            href="https://schimscheimerfamilytrio.bandcamp.com/album/genogram"
            target="_blank"
          >
            <button className="px-8 py-2 border">
              Listen to the New Album
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
