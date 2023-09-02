import Link from "next/link";
import Image from "next/image";

const BandcampAlbums = ({ albumTitle, link, image }) => {
  return (
    <>
      <p className="mb-4">{albumTitle}</p>
      <Link href={link}>
        <Image
          src={image}
          width={200}
          height={200}
          alt={albumTitle}
          priority={true}
        />
      </Link>
    </>
  );
};

export default BandcampAlbums;
