export const metadata = {
  title: "About The Schimscheimer Family Trio",
  description: "Everyone's Favorite Fake Family Band",
};

const aboutPage = () => {
  return (
    <div className="flex relative items-center justify-center custom-img2 g-fixed bg-cover h-screen">
      <div className="p-5 text-white font-medium  z-[5]  mt-[-10rem]">
        <h2 className="text-3xl">Michael Coleman</h2>
        <p className="py-5 pr-[4rem] ">
          Michael Coleman is a pianist/composer living in Brooklyn, NY. He can
          be found leading his own groups (Michael Rocketship, Enjoyer, Beep!)
          or playing, recording and touring in a wide variety of other people's
          projects (Ben Goldberg, Chris Cohen, tUnE-yArDs, Sam Evian). When not
          playing keyboard instruments, Michael works as a recording engineer at
          Figure 8 Recording.
        </p>
        <h2 className="text-3xl">Kasey Knudsen</h2>
        <p className="py-5 pr-[4rem] ">
          Kasey Knudsen, a graduate of Berklee College of Music, has been a
          vital part of the bay area music community since 2002. In addition to
          leading a number of her own ensembles, she has performed and recorded
          with a wide range of artists, including Ben Goldberg, Fred Frith, Tune
          Yards and Charlie Hunter. Active as an educator, she is currently a
          faculty member of The California Jazz Conservatory, and has taught for
          the Stanford Jazz Workshop, The Lafayette Jazz Workshop, Sonoma State
          University, SFJazz, The Monterey Jazz Festival Education Program, and
          many more.
        </p>
        <h2 className="text-3xl">Jon Arkin</h2>
        <p className="py-5 pr-[4rem] ">
          A graduate of the University of Miami, Jon Arkin is an in-demand
          freelance drummer with many notable local, national and international
          artists. His drumming style has been sought out as much for his
          versatility as for his uniqueness. A believer in the power of
          listening, grooving, dynamic balance, and attunement, his
          collaborators attest to his ability to suit the music of the moment.
        </p>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/40" />
    </div>
  );
  // <div className="custom-img2 bg-fixed bg-cover h-screen">
  //   About</div>)
};

export default aboutPage;
