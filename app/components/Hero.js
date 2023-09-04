import Image from "next/image";
import Link from "next/link";
import genogram from "../../public/Edited-Schim-Pics/Genogram.jpg";
const Hero = () => {
  return (
    <>
      <div className="min-h-screen custom-img6 bg-fixed bg-cover bg-center flex items-center justify-center z-[-1]">
        <div className="container flex flex-col gap-10 justify-center items-center text-white z-10 text-center mb-10 pt-[15%]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl fadeIn3s ">
            Schimscheimer Family Trio
          </h2>

          <p className="px-20 md:text-xl fadeIn4s">
            Continuing with their tradition of composing sonnets to beloved,
            albeit often fabricated relatives, the Schimscheimer Family Trio’s
            3rd album “Genogram” is a musical voyage into an unhinged family
            reunion–-a multidimensional soundscape of sometimes delicate, other
            times maniacal moments.
          </p>
          <div className="homePageImage z-2 hidden sm:block fadeIn5s">
            <Image src={genogram} width={700} height={700} alt="Genogram" />
          </div>
          <div className="mt-5">
            <Link
              href="https://schimscheimerfamilytrio.bandcamp.com/album/genogram"
              target="_blank"
            >
              <button className="px-8 py-2 border fadeIn6s  hover:scale-110 transition duration-700 ease-in-out">
                Listen to Genogram on Bandcamp
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-black/60 absolute top-0 bottom-0 left-0 right-0" />
      </div>
    </>
  );
};

export default Hero;
