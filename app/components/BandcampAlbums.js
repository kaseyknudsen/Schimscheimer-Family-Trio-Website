import Link from "next/link";
import Image from "next/image";

const BandcampAlbums = ({ albumTitle, link, image }) => {
  return (
    <div className="text-center">
      <p className="mb-3">{albumTitle}</p>
      <div className="border rounded-lg overflow-hidden transition ">
      <Link href={link}>
        <Image
          src={image}
          width={200}
          height={200}
          alt={albumTitle}
          priority={true}
        />
      </Link>
      </div>
    </div>
  );
};

export default BandcampAlbums;
