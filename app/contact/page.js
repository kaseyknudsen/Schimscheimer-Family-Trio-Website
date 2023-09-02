import Contact from "../components/Contact";

export const metadata = {
  title: "Contact The Schimscheimer Family Trio",
  description: "Get In Touch!",
};

const page = () => {
  return (
    <div className="custom-img3 bg-fixed bg-cover min-h-screen">
      <div className="pt-[25%] flex justify-center">
        <h1 className=" text-white text-5xl">Get In Touch</h1>
      </div>
      <Contact />
    </div>
  );
};

export default page;
