import Link from "next/link";
import Image from "next/image";
import iceCream from "../../public/Edited-Schim-Pics/iceCream.jpg";
import genogram from "../../public/Edited-Schim-Pics/Genogram.jpg";
import brokenHome from "../../public/Edited-Schim-Pics/brokenHome.jpg";

const BandcampAlbums = () => {
  return (
    <div className="container flex flex-col sm:flex-row justify-center relative text-white text-xl gap-10 sm:gap-20 md:gap-40">
      <div className="flex flex-col items-center">
        <p className="mb-2">Genogram</p>
        <Image
          src={genogram}
          width={200}
          height={200}
          alt="Genogram"
          priority={true}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2">Broken Home</p>
        <Image
          src={brokenHome}
          width={200}
          height={200}
          alt="Broken Home"
          priority={true}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2">Family Fun Time</p>
        <Image
          src={iceCream}
          width={200}
          height={200}
          alt="Family Fun Time"
          priority={true}
        />
      </div>
    </div>
  );
};

export default BandcampAlbums;
