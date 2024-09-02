import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-[600px] md:h-screen bg-customGray text-white">
      <div className="text-center p-10 max-w-lg border  rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl  font-bold text-black mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Sezonsko sniženje do 50% počinje 15.09.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-customRed hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
            Notify Me
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
