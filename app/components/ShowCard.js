import Link from "next/link";

const ShowCard = ({ date, venue, location, time, website, link }) => {
  return (
    <div className="show-card bg-white rounded flex flex-row sm:justify-between text-black font-semibold overflow-hidden">
      <div className="p-3 flex flex-col gap-2 md:gap-3 items-start">
        <p className="text-xs md:text-md">{date}</p>
        <p className="text-s md:text-xl">{venue}</p>
        <p className="text-xs md:text-lg">{location}</p>
        <p className="text-xs md:text-lg">{time}</p>
      </div>
      <div className="hidden sm:flex flex-col justify-center">
        {link ? (
          <Link
            href={link}
            className="block hover:cursor-pointer"
            target="_blank"
          >
            <button className="bg-black text-white w-32 md:w-42 py-2 md:py-4 px-5 mr-5 z-40">
              {website}
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ShowCard;
