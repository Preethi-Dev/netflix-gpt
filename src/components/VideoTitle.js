import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-6 md:px-12 h-[80vh] flex flex-col text-white  relative z-10">
      <h1 className="text-3xl md:text-6xl font-bold mt-[30%] md:mt-auto">
        {title}
      </h1>
      <p className=" block text-lg py-6 md:w-1/4">{overview}</p>
      <div className="flex gap-5 mt-4 md:mt-4 mb-auto">
        <button className="bg-white text-black py-2 px-6 md:py-3 md:px-16 font-semibold rounded-md">
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-6 md:py-3 md:px-16 font-semibold bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
