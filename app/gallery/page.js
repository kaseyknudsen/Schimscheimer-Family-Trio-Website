import Slider from "../components/Slider";
// import ArkinFamily from "../../public/Edited-Schim-Pics/aronsonarkin2.jpg";
import michael from "../../public/Edited-Schim-Pics/michael.jpg";
import playingCards from "../../public/Edited-Schim-Pics/Playing-cards.jpg";
import studio from "../../public/Edited-Schim-Pics/studio.jpg";
import mic from "../../public/Edited-Schim-Pics/mic.jpg";
import michael2 from "../../public/Edited-Schim-Pics/michael2.jpeg";
import trioAndEli from "../../public/Edited-Schim-Pics/trio-and-eli.jpeg";
import trio from "../../public/Edited-Schim-Pics/trio.jpeg";
import michaelJonEli from "../../public/Edited-Schim-Pics/michael-jon-eli.jpeg";
import trioAtElis from "../../public/Edited-Schim-Pics/trioAtElis.jpg";

const page = () => {
  const imagesArray = [
    // ArkinFamily,
    michael,
    playingCards,
    studio,
    mic,
    michael2,
    trioAndEli,
    trio,
    michaelJonEli,
    trioAtElis,
  ];
  return (
    <div className="custom-img6 bg-center md:p-8 h-screen z-[-1] flex flex-col justify-center items-center">
      <div className="">
        <Slider images={imagesArray} title={"Gallery"} className="" />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/50" />
    </div>
  );
};

export default page;
