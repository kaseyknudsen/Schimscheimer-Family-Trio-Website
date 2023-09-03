import Contact from "../components/Contact";

export const metadata = {
  title: "Contact The Schimscheimer Family Trio",
  description: "Get In Touch!",
};

const page = () => {
  return (
    <div className="custom-img3 bg-fixed bg-cover min-h-screen flex justify-center items-center">
   
      <Contact />
    </div>
  );
};

export default page;
