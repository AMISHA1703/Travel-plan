import React from "react";
import { useTheme } from "../context/ThemeContext";
import TripCard from "../components/TripCard";
import FlightDetails from "../components/FlightDetails";
import AccommodationCard from "../components/AccomodationCard";
import Hotel from "../utilis/Hotel.png";
import SHotel from "../utilis/SHotel.png";
import ActivitySection from "../components/ActivitySection";
import { FaRegUser, FaWifi, FaSignal } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";

const Dashboard = ({ userTrip }) => {
  const { darkMode } = useTheme();
  const themeBg = darkMode ? "bg-[#0D0D0D] text-white" : "bg-white text-black";

  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  return (
    <div className={`min-h-screen p-6 space-y-8 ${themeBg}`}>
      {/* Status Bar */}
      <div className="flex justify-between p-2">
        <div className={darkMode ? "text-white" : "text-black"}>
          {`${hours}:${minutes}`}
        </div>
        <div className="flex gap-2">
          <FaSignal className={darkMode ? "text-white" : "text-black"} />
          <FaWifi   className={darkMode ? "text-white" : "text-black"} />
          <CiBatteryFull className={darkMode ? "text-white" : "text-black"} />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Hello {userTrip.name || "Traveler"}!
          </h1>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Ready for your trip?
          </p>
        </div>
        <div>
          <button className="bg-orange-400 rounded-full w-10 h-10 p-2 ml-2">
            C
          </button>
        </div>
      </div>

      {/* Trip Card */}
      <TripCard
        city={userTrip.destination || "Tokyo"}
        dateRange="27.01.2025 - 02.02.2025"
        duration="8 Days"
        groupSize="2 (2M, 2F)"
        activities="16 Activities"
      />

      {/* Flight Details */}
      <FlightDetails
        from="Delhi, India"
        to="Narita, Tokyo"
        date="26.01.2025"
        time="10:50 AM"
      />

      {/* Accommodations */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Accommodation</h2>
        <div className="grid grid-cols-2 gap-4">
          <AccommodationCard
            hotelName="Tokyo View Hotel"
            location="Shinjuku, Tokyo"
            checkIn="29/04/2025"
            checkOut="03/05/2025"
            night="6"
            status="Confirmed"
            imageUrl={Hotel}
          />
          <AccommodationCard
            hotelName="Shibuya Stay"
            location="Shibuya, Tokyo"
            checkIn="27/04/2025"
            checkOut="02/05/2025"
            night="5"
            status="Pending"
            imageUrl={SHotel}
          />
        </div>
      </div>

      {/* Activity Section */}
      <ActivitySection />
    </div>
  );
};

export default Dashboard;
