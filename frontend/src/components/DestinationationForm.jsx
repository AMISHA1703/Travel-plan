import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext"; // Import the theme hook
import TravelOptionButton from "./TraveloptionButton";
import { CiLocationOn, CiCalendarDate, CiBatteryFull } from "react-icons/ci";
import { FaRegUser, FaWifi, FaSignal } from "react-icons/fa";

const DestinationForm = ({ onSubmit }) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelWith, setTravelWith] = useState("");
  const { darkMode } = useTheme(); // Get darkMode from context

  // Dynamic classes based on theme
  const containerBg = darkMode
    ? "bg-[#0D0D0D] text-white  shadow-lg "
    : "bg-white text-black  border-gray-200 border-1  shadow-lg";
  const labelText = darkMode ? "text-white" : "text-black";
  const subtitleText = darkMode ? "text-gray-400" : "text-gray-600";
  const inputBg = darkMode
    ? "bg-[#1C1C1E] border-gray-700 placeholder-gray-500 text-white"
    : "bg-[#F3F4F6] border-gray-300 placeholder-gray-400 text-black";
  const selectText = darkMode ? "text-gray-300" : "text-gray-700";
  const iconColor = darkMode ? "text-white" : "text-black";

  const handleSubmit = () => {
    onSubmit({ destination, duration, travelWith });
  };

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return (
    <div className={`flex flex-col gap-6 p-6 min-h-screen  ${containerBg}`}>
      {/* Status Bar */}
      <div className="flex justify-between p-2">
        <div className={iconColor}>{`${hours}:${minutes}`}</div>
        <div className="flex gap-2">
          <FaSignal className={iconColor} />
          <FaWifi className={iconColor} />
          <CiBatteryFull className={iconColor} />
        </div>
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold mb-1">Plan Your Journey, Your Way!</h1>
        <p className={subtitleText + " text-sm"}>
          Let's create your personalised travel experience
        </p>
      </div>

      {/* Destination */}
      <label htmlFor="destination" className={labelText}>
        Where would you like to go?
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-1 p-1 flex items-center pointer-events-none">
          <CiLocationOn className="text-gray-300 ml-1 mr-2" />
        </div>
        <input
          id="destination"
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className={`${inputBg} border rounded-xl p-4 pl-6 w-full ml-1`}
        />
      </div>

      {/* Duration */}
      <label htmlFor="duration" className={labelText}>
        How long are you traveling for?
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CiCalendarDate className="text-gray-300" />
        </div>
        <select
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className={`${inputBg} ${selectText} border rounded-xl p-4 pl-7 w-full`}
        >
          <option value="" disabled>
            Select Duration
          </option>
          <option value="3 days">3 days</option>
          <option value="5 days">5 days</option>
          <option value="7 days">7 days</option>
        </select>
      </div>

      {/* Travel With */}
      <label className={labelText}>Who are you traveling with?</label>
      <div className="grid grid-cols-2 gap-4">
        {["Solo", "Couple", "Family", "Friends"].map((option) => (
          <TravelOptionButton
            key={option}
            label={option}
            selected={travelWith === option}
            onClick={() => setTravelWith(option)}
          />
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-gradient-to-r from-blue-600 to-indigo-500 p-4 rounded-2xl text-white font-semibold mt-6 hover:from-blue-700 hover:to-indigo-600 transition-all"
      >
        Continue
      </button>
    </div>
  );
};

export default DestinationForm;
