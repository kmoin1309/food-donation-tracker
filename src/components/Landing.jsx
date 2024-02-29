import React from "react";
import hero from "../assets/hero.jpeg";

const Landing = () => {
  return (
    <div className="absolute flex items-center justify-evenly flex-wrap w-100% ">
        <img
          className="bg-cover bg-center h-screen "
          height="100vh"
          src={hero}
          alt="logo"
        />

        <h1 className="text-5xl px-4 -mt-96 font-bold ml-96 items-center justify-center flex flex-warp ">
          Join Us in Fighting Food Waste and Hunger
        </h1>
      
      <div className="flex gap-20 items-center justify-evenly ">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Donate
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Need a Food?
        </button>
      </div>
    </div>
  );
};

export default Landing;
