import Image from "next/image";
import michaelImage from "../../public/Edited-Schim-Pics/michael.jpg";
import kaseyImage from "../../public/Edited-Schim-Pics/kasey.jpg";
import jonImage from "../../public/Edited-Schim-Pics/jonarkinpromo.jpg";
export const metadata = {
  title: "About The Schimscheimer Family Trio",
  description: "Everyone's Favorite Fake Family Band",
};

const aboutPage = () => {
  return (
    <div className="flex relative custom-img2 bg-fixed bg-cover h-full bg-center flex-col pt-[25%] pl-4 text-">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/60" />

      <div className="z-10 text-white">
        <div className="mb-20 flex items-center justify-center flex-col px-10 pr-[4rem]">
          <h2 className="text-4xl pb-4">The Schimscheimer Family Trio</h2>

          <p>
            As if from an actual collection of blood relatives, the music of the
            Schimscheimer Family Trio opens a window into an alternate world—one
            in which songs become people, sounds describe stories, and music
            falls beyond categorization. The fake siblings (and their fake
            uncle) harness a mixture of woodwind, synthesizer, and percussion
            sounds in creating tuneful odes to their fake relatives,
            semi-traumatic childhood recollections, and intimidating animals of
            note.
          </p>

          {/* <div class="h-0.5 w-full bg-purple-400 lg:w-1/2 mt-3"></div> */}
        </div>
        <div className="pl-5 pt-10">
          <Image
            src={michaelImage}
            width={300}
            height={400}
            alt="Michael Coleman"
          />
        </div>
        <div className="p-5 text-white font-medium">
          {/* michael */}
          <div>
            <h2 className="text-3xl">Michael Coleman</h2>
            <p className="py-5 pr-[4rem] ">
              Michael Coleman is a pianist/composer living in Brooklyn, NY. He
              can be found leading his own groups (Michael Rocketship, Enjoyer,
              Beep!) or playing, recording and touring in a wide variety of
              other people's projects (Ben Goldberg, Chris Cohen, tUnE-yArDs,
              Sam Evian). When not playing keyboard instruments, Michael works
              as a recording engineer at Figure 8 Recording.
            </p>
          </div>
          {/* kasey */}
          <div className="pt-10">
            <Image
              src={kaseyImage}
              width={200}
              height={400}
              alt="Kasey Knudsen"
            />
            <h2 className="text-3xl">Kasey Knudsen</h2>
            <p className="py-5 pr-[4rem] ">
              Kasey Knudsen, a graduate of Berklee College of Music, has been a
              vital part of the bay area music community since 2002. In addition
              to leading a number of her own ensembles, she has performed and
              recorded with a wide range of artists, including Ben Goldberg,
              Fred Frith, Tune Yards and Charlie Hunter. Active as an educator,
              she is currently a faculty member of The California Jazz
              Conservatory, and has taught for the Stanford Jazz Workshop, The
              Lafayette Jazz Workshop, Sonoma State University, SFJazz, The
              Monterey Jazz Festival Education Program, and many more.
            </p>
          </div>
          {/* jon */}
          <div className="pt-10">
            <Image
              src={jonImage}
              width={300}
              height={400}
              alt="Kasey Knudsen"
            />
            <h2 className="text-3xl">Jon Arkin</h2>
            <p className="py-5 pr-[4rem] ">
              A graduate of the University of Miami, Jon Arkin is an in-demand
              freelance drummer with many notable local, national and
              international artists. His drumming style has been sought out as
              much for his versatility as for his uniqueness. A believer in the
              power of listening, grooving, dynamic balance, and attunement, his
              collaborators attest to his ability to suit the music of the
              moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
