import React from "react";

const RandamGif = () => {
  return (
    <>
      <div className="w-screen h-screen bg-gray-400 pt-5">
        <div className="w-full px-4 sm:px-12 bg-red-600 flex flex-col justify-center items-center">
          <div className="bg-white text-center py-3 rounded-lg w-full">
            <h2 className="text-sm sm:text-lg font-extrabold">RANDOM GIF</h2>
          </div>

          <div className="w-full bg-green-700 flex flex-col sm:flex-row  space-y-5 sm:space-y-0 sm:space-x-8 wmd:max-w-10/12 mt-5">
            <div className="bg-yellow-300 w-full rounded-lg  flex flex-col items-center py-3">
              <div className="w-full text-center ">
                <h2 className="font-bold underline">A RANDOM GIF</h2>
              </div>

              <div className="w-full  bg-pink-700 max-w-sm h-50 md:h-70 my-3 object-fill">
                <img src="" alt="Image" className="w-full h-full rounded-md" />
              </div>

              <div className="w-full max-w-[75%] bg-blue-700 py-1.5 rounded-lg cursor-pointer text-center">
                <button className="text-lg font-semibold cursor-pointer">
                  GENERATE
                </button>
              </div>
            </div>

            <div className="bg-yellow-300 w-full rounded-lg flex flex-col  items-center py-3">
              <div className="w-full text-center">
                <h2 className="font-bold underline">RANDOM GIF</h2>
              </div>

              <div className="w-full  bg-pink-700  max-w-sm h-50 md:h-70 my-3 object-fill">
                <img src="" alt="Image" className="w-full h-full rounded-md" />
              </div>

              <div className="w-full  py-1.5 rounded-lg cursor-pointer text-center flex flex-col justify-center items-center space-y-3">
                <input
                  placeholder="GENERATE"
                  className="text-lg font-semibold  w-full max-w-[75%] bg-blue-700 py-1.5 rounded-lg cursor-pointer text-center"
                />

                <button className="text-lg font-semibold  w-full max-w-[75%] bg-blue-700 py-1.5 rounded-lg cursor-pointer text-center">
                  GENERATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandamGif;
