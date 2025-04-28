import React from "react";
import { useTheme } from "../context/ThemeContext"; // Import theme hook
import PlaneImage from "../utilis/plane.png";

const FlightDetails = ({ from, to, date, time }) => {
  const { darkMode } = useTheme();

  // Dynamic classes based on theme
  const containerBg = darkMode ? "bg-[#313DDF] text-white" : "bg-[#E0E7FF] text-black";
  const headingText = darkMode ? "text-white" : "text-black";
  const subText = darkMode ? "text-gray-200" : "text-gray-600";
  const routeText = darkMode ? "text-white" : "text-black";
  const seeAllText = darkMode ? "text-white" : "text-black";

  return (
    <div
      className={`relative flex items-center justify-between p-4 rounded-2xl ${containerBg}`}
      style={{ width: "100%", height: "250px" }}
    >
      {/* Right half with plane image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-no-repeat scale-x-[-1]"
        style={{
          backgroundImage: `url(${PlaneImage})`,
          backgroundSize: "120%",
          backgroundPosition: "right 15%",
        }}
      >
        <div className="flex items-end ml-8 mt-5">
          <button className={`hover:underline text-sm scale-x-[-1] ${seeAllText}`}>
            See all
          </button>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-between gap-10 w-1/2">
        <div>
          <h3 className={`text-3xl font-semibold mb-1 ${headingText}`}>
            Flight Details
          </h3>
          <p className={`text-lg ${subText}`}>
            {date} {time}
          </p>
        </div>

        <div className={subText}>
          <p className={`text-2xl font-semibold ${routeText}`}>
            {from} ➔ {to}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
