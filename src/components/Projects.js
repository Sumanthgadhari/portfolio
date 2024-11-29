import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa"; // Flip icon

const ProjectCard = ({ title, shortDescription, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div
      className="relative w-full h-80 sm:w-[300px] lg:w-[350px] mx-auto"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full [perspective:1000px] transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-darkblue text-white rounded-lg shadow-md [backface-visibility:hidden]">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-center">{shortDescription}</p>
          </div>
          {/* Flip Icon */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center">
            <FaSyncAlt className="text-white text-2xl animate-spin-slow opacity-70" />
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full bg-slate-100 text-gray-900 rounded-lg shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-5">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-darkblue text-white font-medium text-sm rounded hover:bg-blue-700 transition-colors"
            >
              Read More
            </a>
          </div>
          {/* Flip Icon */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center">
            <FaSyncAlt className="text-gray-700 text-2xl animate-spin-slow opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
