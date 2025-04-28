import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import ActivityCard from './ActivityCard';

const ActivitySection = () => {
  const { darkMode } = useTheme();

  // Theme-aware class names
  const containerBg = darkMode ? 'bg-[#0F0F0F] text-white' : 'bg-white text-black';
  const sectionBg = darkMode ? 'bg-[#1C1C1C]' : 'bg-[#F3F4F6]';
  const dateBg = darkMode ? 'bg-[#2A2A2A]' : 'bg-[#E5E7EB]';
  const dateText = darkMode ? 'text-gray-400' : 'text-gray-700';

  return (
    <div className={`${containerBg} min-h-screen p-6`}>
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Activities</h2>
        <button className="text-[#D9F99D] text-sm hover:underline">See all</button>
      </div>

      {/* Day Plan Section */}
      <div className={`${sectionBg} rounded-2xl p-6 mb-8`}>
        {/* Day Plan & Count */}
        <div className="flex items-center gap-4 mb-6">
          <div className="border border-[#D9F99D] text-black bg-[#D3F462] px-4 py-2 rounded-lg font-semibold text-sm">
            Day Plan
          </div>
          <div className="border border-[#D9F99D] text-[#D9F99D] px-4 py-2 rounded-lg text-sm">
            14 Activities
          </div>
        </div>

        {/* Dates Row */}
        <div className="flex gap-4 overflow-x-auto">
          {/* Selected Date */}
          <div className="flex items-center rounded-xl overflow-hidden border border-[#D9F99D] bg-[#D3F462] text-black">
            {/* Month (vertical) */}
            <div className="px-2 py-4 flex items-center justify-center">
              <span className="text-xs rotate-[-90deg] tracking-widest font-semibold">JAN</span>
            </div>
            {/* Day & Date */}
            <div className={`flex flex-col items-center justify-center px-3 py-4 ${darkMode ? 'bg-[#2A2A2A] text-white' : 'bg-[#F3F4F6] text-black'}`}>
              <span className="text-xs font-semibold">MON</span>
              <span className="text-2xl font-bold">27</span>
            </div>
          </div>

          {/* Other Dates */}
          {[
            { month: 'JAN', date: '28', day: 'TUE' },
            { month: 'JAN', date: '29', day: 'WED' },
            { month: 'JAN', date: '30', day: 'THU' },
            { month: 'JAN', date: '31', day: 'FRI' },
            { month: 'FEB', date: '1', day: 'SAT' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center px-4 py-3 rounded-xl ${dateBg} ${dateText}`}
            >
              <span className="text-xs rotate-[-90deg] tracking-widest">{item.month}</span>
              <span className="text-2xl font-semibold">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activities List Section */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-[#D3F462] text-black px-4 py-2 rounded-lg text-sm font-semibold">
            Day 1
          </span>
          <span className="text-gray-400 text-sm">27.01.2025</span>
          <span className="text-[#D3F462] text-sm font-semibold">3 Activities</span>
        </div>

        {/* Activity Card */}
        <ActivityCard />
      </div>
    </div>
  );
};

export default ActivitySection;
