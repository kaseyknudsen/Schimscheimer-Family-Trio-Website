import { SliderData } from "../data/SliderData";
import Image from "next/image";
import Link from "next/link";
import genogram from "../../public/Edited-Schim-Pics/Genogram.jpg";
const AlternateHero = () => {
  return (
    <>
      <div className="relative h-screen custom-img6 bg-fixed bg-cover bg-center flex items-center justify-center">
        <div className="container flex flex-col gap-5 justify-center items-center text-white text-center z-10 mb-10">
          <h2 className="text-4xl sm:text-6xl">Schimscheimer Family Trio</h2>

          <p className="px-20">
            Continuing with their tradition of composing sonnets to beloved,
            albeit often fabricated relatives, the Schimscheimer Family Trio’s
            3rd album “Genogram” is a musical voyage into an unhinged family
            reunion–-a multidimensional soundscape of sometimes delicate, other
            times maniacal moments.
          </p>
          <div className="homePageImage z-2 relative hidden sm:block">
            <Image
              src={genogram}
              width={700}
              height={700}
              alt="Picture of the author"
            />
          </div>
          <div className="mt-5">
            <Link
              href="https://schimscheimerfamilytrio.bandcamp.com/album/genogram"
              target="_blank"
            >
              <button className="px-8 py-2 border">
                Listen to Genogram on Bandcamp
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-black/60 absolute h-screen top-0 bottom-0 left-0 right-0" />
      </div>
    </>
  );
};

export default AlternateHero;
