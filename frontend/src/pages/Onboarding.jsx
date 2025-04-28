import React from "react";
import { useTheme } from "../context/ThemeContext";  // Import theme context
import DestinationForm from "../components/DestinationationForm";

const Onboarding = ({ onContinue }) => {
  const { darkMode } = useTheme(); // Get darkMode value from the context

  return (
    <div
      className={
        darkMode
          ? "min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900"
          : "min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100"
      }
    >
      <div className="w-full max-w-md p-6 ">
        <DestinationForm onSubmit={onContinue} />
      </div>
    </div>
  );
};

export default Onboarding;
