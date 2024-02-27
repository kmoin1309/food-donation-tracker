import React from "react";
import hero from "../assets/hero.jpeg";

const Landing = () => {
  return (
    <div className="absolute flex items-center justify-evenly flex-wrap w-100%">
      <div>
        <img
          className="bg-cover bg-center h-screen "
          height="100vh"
          src={hero}
          alt="logo"
        />
      </div>

      <div className="px-2 mt-60 justify-evenly mb-14 w-100%">
        <h1 className="text-center font-thin text-black ">
          Join Us in Fighting Food Waste and Hunger
        </h1>
      </div>
      <div className="flex w-max gap-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Donate
        </button>
      </div>

      <div className="flex w-max gap-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Need a Food?
        </button>
      </div>
    </div>
  );
};

export default Landing;
