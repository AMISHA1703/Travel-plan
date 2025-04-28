import React, { useState } from "react";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import { useTheme } from "./Context/ThemeContext"; // Import useTheme

const App = () => {
  const [userTrip, setUserTrip] = useState(null);
  const { darkMode, toggleTheme } = useTheme(); // Access darkMode and toggle

  const handleContinue = (formData) => {
    setUserTrip(formData);
  };

  return (
    <div className={darkMode ? "bg-[#0F0F0F] text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      {/* Toggle Theme Button */}
      <div className="p-4 flex justify-end">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-gray-300 text-black font-semibold text-sm"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Show Onboarding or Dashboard */}
      {!userTrip ? (
        <Onboarding onContinue={handleContinue} />
      ) : (
        <Dashboard userTrip={userTrip} />
      )}
    </div>
  );
};

export default App;
