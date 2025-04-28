import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import { activities } from './Activities.js';

const ActivityCard = () => {
  const { darkMode } = useTheme();

  // Theme-aware class names
  const cardBg = darkMode ? 'bg-[#1C1C1C]' : 'bg-white';
  const titleText = darkMode ? 'text-white' : 'text-black';
  const labelText = darkMode ? 'text-gray-200' : 'text-gray-700';
  const valueText = darkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <div>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`${cardBg} rounded-xl overflow-hidden flex shadow-lg`}
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-1/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className={`text-xl font-semibold mb-2 ${titleText}`}>
                {activity.title}
              </h3>
              <p className={`text-sm ${labelText}`}>
                Timing:{' '}
                <span className={`text-sm ${valueText}`}>
                  {activity.timing}
                </span>
              </p>
              <p className={`text-sm ${labelText}`}>
                Duration:{' '}
                <span className={`text-sm ${valueText}`}>
                  {activity.duration}
                </span>
              </p>
              <p className={`text-sm ${labelText}`}>
                Pick up:{' '}
                <span className={`text-sm ${valueText}`}>
                  {activity.pickup}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;
