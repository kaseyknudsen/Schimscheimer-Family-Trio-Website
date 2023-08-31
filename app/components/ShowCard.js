const ShowCard = ({ date, venue, location, time, website, link }) => {
  return (
    <div className="h-48 bg-white/80 rounded flex flex-row justify-between text-black font-semibold z-20">
      <div className="p-4 flex flex-col gap-2 items-start">
        <p className="text-md">{date}</p>
        <p className="text-xl">{venue}</p>
        <p className="text-md">{location}</p>
        <p className="text-md">{time}</p>
      </div>
      <a href={link} className="block hover:no-underline">
        <div className="h-[4em] w-[15em] bg-black relative flex flex-col justify-center mt-[4em] mr-5">
          <p className=" text-white/80 text-center">{website}</p>
        </div>
      </a>
    </div>
  );
};

export default ShowCard;
