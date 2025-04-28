import React from "react";
import { useTheme } from "../Context/ThemeContext";  // Import the theme hook
import Tokoyo from "../utilis/Tokoyo.png";
import { FaUser } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { LuNotebook } from "react-icons/lu";

const TripCard = ({ city, dateRange, duration, groupSize, activities }) => {
  const { darkMode } = useTheme();

  // Dynamic class values based on theme
  const containerBg = darkMode ? "bg-[#1C1C1E] text-white" : "bg-white text-black";
  const dateText = darkMode ? "text-gray-300" : "text-gray-600";
  const infoText = darkMode ? "text-gray-300" : "text-gray-700";
  const circleBg = darkMode ? "bg-gray-600" : "bg-gray-200";

  return (
    <div
      className={`${containerBg} relative flex flex-col justify-between bg-cover bg-center p-4 rounded-2xl shadow-lg gap-3 overflow-hidden`}
      style={{ height: "300px", width: "100%" }}
    >
      {/* Flipped background layer */}
      <div
        className="absolute inset-0 bg-cover opacity-45 bg-center scale-x-[-1]"
        style={{ backgroundImage: `url(${Tokoyo})` }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold">{city}</h2>
        <p className={`${dateText} text-sm p-2`}>{dateRange}</p>
      </div>

      <div className={`relative z-10 grid grid-cols-3 gap-3 flex-wrap mt-2 text-sm`}>
        {/* Duration */}
        <div className="flex items-center gap-2">
          <span className={`flex items-center justify-center rounded-full w-8 h-8 shadow-lg ${circleBg}`}>
            <CiClock2 className="text-2xl text-yellow-300" />
          </span>
          <span className={`shadow-md font-semibold ${infoText}`}>
            {duration}
            <br />
            <span className="text-gray-400">duration</span>
          </span>
        </div>

        {/* Group Size */}
        <div className="flex items-center gap-2">
          <span className={`flex items-center justify-center rounded-full w-8 h-8 shadow-lg ${circleBg}`}>
            <FaUser className="text-yellow-300" />
          </span>
          <span className={`font-semibold ${infoText}`}>
            {groupSize}
            <br />
            <span className="text-gray-400">Group Size</span>
          </span>
        </div>

        {/* Activities */}
        <div className="flex items-center gap-2">
          <span className={`flex items-center justify-center rounded-full w-8 h-8 shadow-lg ${circleBg}`}>
            <LuNotebook className="text-lg text-yellow-300" />
          </span>
          <span className={`font-semibold ${infoText}`}>
            {activities}
            <br />
            <span className="text-gray-400">Activities</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
