import React from "react";
import HEAD from "../assets/bitmoji_headshot.png";

const About = () => {
  return (
    <div name="about" className="pt-24 w-full block h-auto bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <img className="w-3/4 " src={HEAD} alt="" />
          <div className="pt-20">
            <p className="text-xl">
              I am dedicated to building excellent software solutions that
              improves the lives of those around me. I specialize in front-end
              web-development using modern frameworks and tools with different
              libraries and languages. Please take a look at my experience
              and project and see how I can be a great fit for your team!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
