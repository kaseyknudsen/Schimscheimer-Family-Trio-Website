import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Everyone's Favorite Family Band" />
      
    </div>
  );
};

export default Home;
