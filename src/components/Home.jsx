import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] pt-8">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          OWAIS UGHRATDAR
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m passionate about crafting intuitive user experiences with code and
          creativity. Currently, I’m focused on perfecting my understanding of 
          frontend development and how to take a product from inception to shipment.
          Alongside this, I am expanding my understanding of backend development and data handling.
        </p>
        <div>
          <a href="#experience-id" className="w-[230px] scroll-smooth text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            See my experience
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
