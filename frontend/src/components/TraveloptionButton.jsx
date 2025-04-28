import React from "react";
import { useTheme } from "../Context/ThemeContext"; // Import the theme context
import { FaRegUser } from "react-icons/fa";
import { TbFriends } from "react-icons/tb";
import { MdFamilyRestroom } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";

const TravelOptionButton = ({ label, selected, onClick }) => {
  const { darkMode } = useTheme(); // Access darkMode from context

  // Function to render the appropriate icon based on the label
  const renderIcon = () => {
    switch (label) {
      case "Solo":
        return <FaRegUser className="text-gray-400 text-xl" />;
      case "Couple":
        return <TbFriends className="text-gray-400 text-xl" />;
      case "Family":
        return <MdFamilyRestroom className="text-gray-400 text-xl" />;
      case "Friends":
        return <GiThreeFriends className="text-gray-400 text-xl" />;
      default:
        return null;
    }
  };

  // Dynamic class values based on the current theme
  const buttonClass = darkMode
    ? selected
      ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-transparent"
      : "bg-[#1C1C1E] text-gray-300 border-gray-700 hover:bg-gray-700"
    : selected
    ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-transparent"
    : "bg-[#F0F0F0] text-gray-800 border-gray-300 hover:bg-gray-200"; // Light mode styles

  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-xl border w-full text-md font-semibold transition-all flex items-center justify-center gap-2 ${buttonClass}`}
    >
      {renderIcon()}
      <span>{label}</span>
    </button>
  );
};

export default TravelOptionButton;
