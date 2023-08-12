const Hero = ({ heading }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/50" />
      <div className="p-5 text-white z-[2]  mt-[-10rem]">
        <h2 className="text-4xl">Schimscheimer Family Trio</h2>
        <h3 className='pt-2 '>{heading}</h3>
        <p className="py-5 pr-[4rem]">
          Continuing with their tradition of composing sonnets to beloved,
          albeit often fabricated relatives, the Schimscheimer Family Trio’s 3rd
          album “Genogram” is a musical voyage into an unhinged family
          reunion–-a multidimensional soundscape of sometimes delicate, other
          times maniacal moments.
        </p>
        <button className="px-8 py-2 border">Listen to Genogram</button>
      </div>
    </div>
  );
};

export default Hero;
