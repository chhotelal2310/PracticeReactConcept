import axios from "axios";
import { getActiveElement } from "formik";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const RandamGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const response = await axios.get(url);
      const ImageUrl = response?.data?.data?.images?.downsized?.url;
      setGif(ImageUrl);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <>
      <div className="w-screen min-h-screen bg-gray-400 pt-5">
        <div className="w-full px-4 sm:px-12 flex flex-col justify-center items-center">
          <div className="bg-white text-center py-3 rounded-lg w-full">
            <h2 className="text-sm sm:text-lg font-extrabold">RANDOM GIF</h2>
          </div>

          <div className="w-full flex flex-col sm:flex-row  space-y-5 sm:space-y-0 sm:space-x-8 md:max-w-10/12 mt-5">
            <div className="w-full rounded-lg  flex flex-col items-center py-3 border border-gray-500 px-2">
              <div className="w-full text-center ">
                <h2 className="font-bold underline">A RANDOM GIF</h2>
              </div>

              <div className="w-full max-w-sm h-50 md:h-70 my-3 object-fill rounded-md border border-gray-500 flex justify-center items-center">
                {loading && <Spinner />}
                {!loading && (
                  <img
                    src={gif}
                    alt="Image"
                    className="w-full h-full rounded-md"
                  />
                )}
              </div>

              <div className="w-full max-w-[75%] bg-blue-700 hover:bg-blue-600 py-1.5 rounded-lg cursor-pointer text-center">
                <button
                  className="text-lg font-semibold cursor-pointer w-full text-white"
                  onClick={() => fetchData()}
                >
                  GENERATE
                </button>
              </div>
            </div>

            <div className="w-full rounded-lg flex flex-col  items-center py-3 border border-gray-500 px-2">
              <div className="w-full text-center">
                <h2 className="font-bold underline">RANDOM GIF</h2>
              </div>

              <div className="w-full   max-w-sm h-50 md:h-70 my-3 object-fill rounded-md border border-gray-500">
                <img src="" alt="Image" className="w-full h-full rounded-md" />
              </div>

              <div className="w-full  py-1.5 rounded-lg cursor-pointer text-center flex flex-col justify-center items-center space-y-3">
                <input
                  placeholder="GENERATE"
                  className="text-lg font-semibold  w-full max-w-[75%] bg-white py-1.5 rounded-lg  text-center placeholder:text-gray-700"
                />

                <button className="text-lg font-semibold  w-full max-w-[75%] bg-blue-700 py-1.5 rounded-lg cursor-pointer text-center text-white">
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
