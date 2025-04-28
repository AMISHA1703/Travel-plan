import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { PiClockCounterClockwise } from "react-icons/pi";
import { useTheme } from '../context/ThemeContext'; // assuming you have a theme context

const AccommodationCard = ({
  hotelName,
  location,
  imageUrl,
  checkIn,
  checkOut,
  night,
  status,
}) => {
  const { darkMode } = useTheme();

  // Theme-aware class names
  const cardBg = darkMode ? 'bg-[#1C1C1E]' : 'bg-white';
  const titleText = darkMode ? 'text-white' : 'text-black';
  const labelText = darkMode ? 'text-gray-300' : 'text-gray-700';
  const valueText = darkMode ? 'text-gray-400' : 'text-gray-500';
  const statusText = status === "Confirmed" ? 'text-green-400' : 'text-red-400';
  
  return (
    <div className={`${cardBg} rounded-2xl p-2 shadow-lg text-white`}>
      <img
        src={imageUrl}
        alt={hotelName}
        className="rounded-xl h-50 w-full object-cover mb-2"
      />
      <h4 className={`text-lg font-bold ${titleText}`}>{hotelName}</h4>
      <p className={`text-sm ${labelText}`}>{location}</p>
      <p className={`text-sm ${labelText}`}>
        Check-in: <span className={`text-sm ${valueText}`}>{checkIn}</span>
      </p>
      <p className={`text-sm ${labelText}`}>
        Check-out: <span className={`text-sm ${valueText}`}>{checkOut}</span>
      </p>
      <div className="flex justify-between">
        <p className={`text-sm ${labelText}`}>
          Night: <span className={`text-sm ${valueText}`}>{night}</span>
        </p>
        {status === "Confirmed" ? (
          <span className={`text-md flex items-center p-2 ${statusText}`}>
            <GiConfirmed className="m-2" />
            {status}
          </span>
        ) : (
          <span className={`text-md flex items-center p-2 ${statusText}`}>
            <PiClockCounterClockwise className="text-lg m-1" />
            {status}
          </span>
        )}
      </div>
    </div>
  );
};

export default AccommodationCard;
