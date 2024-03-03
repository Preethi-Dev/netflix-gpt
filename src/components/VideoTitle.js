import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12 h-[80vh] flex flex-col text-white  relative z-10">
      <h1 className="text-6xl font-bold mt-auto">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div className="flex gap-5 mt-12 mb-auto">
        <button className="bg-white text-black py-3 px-16 font-semibold rounded-md">
          Play
        </button>
        <button className="bg-gray-500 text-white py-3 px-16 font-semibold bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
