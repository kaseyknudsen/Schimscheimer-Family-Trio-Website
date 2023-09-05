const ShowCard = ({ date, venue, location, time, website, link }) => {
  return (
    <div className="h-20 show-card md:h-40 bg-white rounded flex flex-row sm:justify-between text-black font-semibold z-20 overflow-hidden">
      <div className="p-3 flex flex-col md:gap-2 items-start">
        <p className="text-xs md:text-md">{date}</p>
        <p className="text-xs md:text-xl">{venue}</p>
        <p className="text-xs md:text-lg">{location}</p>
        <p className="text-xs md:text-lg">{time}</p>
      </div>
      <div className=" hidden sm:flex flex-col justify-center">
        <a href={link} className="block hover:no-underline">
          <button className="bg-black text-white pt-3 pb-3 px-5 md:pt-5 md:pb-5 md:px-10 mr-5">{website}</button>
        </a>
      </div>
    </div>
  );
};

export default ShowCard;
