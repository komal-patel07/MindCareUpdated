import * as React from "react";

const Progress = ({ value, max = 100 }) => {
  return (
    <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};

export default Progress;