import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header.js";

const Home = () => {
  const [explore, setExplore] = useState(false);

  const handleMouseDown = () => {
    setExplore(true);
  };

  const handleMouseUp = () => {
    setExplore(false);
  };

  return (
    <div className="h-screen bg-home-desktop bg-cover">
      <Header />
      <div className="flex">
        <div className="grid grid-cols-2 pt-60 w-screen">
          <div className="flex justify-center items-center">
            <p className="flex flex-col w-[550px]">
              <span className="text-[#babed5] uppercase text-3xl font-sans">
                so, you want to travel to
              </span>
              <span className="text-[#FFFFFE] uppercase text-[200px] font-serif">
                space
              </span>
              <span className="text-[#a6a7bc] text-xl text-justify">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </span>
            </p>
          </div>
          <div className="flex justify-center items-end">
            {explore ? (
              <div
                className="relative w-[450px] h-[450px] flex justify-center items-center rounded-full bg-opacity-15 bg-gray-300"
                onMouseUp={handleMouseUp}
              >
                <Link
                  to="/des"
                  className="uppercase bg-white text-[35px] text-gray-500 rounded-full flex justify-center items-center w-72 h-72 font-serif absolute z-10"
                >
                  explore
                </Link>
              </div>
            ) : (
              <div className="relative w-[450px] h-[450px] flex justify-center items-center rounded-full">
                <Link
                  to="/des"
                  className="uppercase bg-white text-[35px] text-gray-500 rounded-full flex justify-center items-center w-72 h-72 font-serif"
                  onMouseDown={handleMouseDown}
                >
                  explore
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
