import React from "react";

interface ProgressLineProps {
  percentage?: number;
  color?: string;
  title?: string;
}

const ProgressLine: React.FC<ProgressLineProps> = ({
  percentage,
  color,
  title,
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        {title && (
          <span className="text-sm font-bold text-gray-700">{title}</span>
        )}
        <span className="text-sm font-bold text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-5">
        <div
          className={`h-4 rounded-full transition-all duration-500 ease-in-out`}
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressLine;
