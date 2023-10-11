import React from "react";
import { data } from "../data/data.js";
import WorkTable from "./WorkTable.jsx";

const Experience = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      id="experience-id"
      name="experience"
      className="pt-44 w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p
            name="experience-title"
            className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600"
          >
            Experience
          </p>
          <p className="py-4">Take a look at my recent experience:</p>
        </div>

        <WorkTable />
      </div>
    </div>
  );
};

export default Experience;
