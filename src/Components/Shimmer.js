import React from "react";

const Shimmer = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2.5 bg-gray-500 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-48 bg-gray-500 rounded col-span-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
