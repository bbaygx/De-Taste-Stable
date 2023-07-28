import React from "react";
import "./CardSkeleton.css"; // Import stylesheet for CardSkeleton

const CardSkeleton = () => {
  return (
    <div className="restaurant__item group cursor-pointer shadow-sm">
      <div className="skeleton-effect" />
      <div className="restaurant__item__content mt-3">
        <div className="status flex justify-between items-center">
          <div className="statusOutlet flex items-center gap-1">
            {/* <div className="skeleton-line" /> */}
            {/* <div className="skeleton-line" /> */}
          </div>
          <div className="review flex items-center gap-1">
            {/* <div className="skeleton-circle" /> */}
            {/* <div className="skeleton-line" /> */}
          </div>
        </div>
        <div className="skeleton-line" />
        <div className="skeleton-line" />
        <div className="flex justify-between pt-6 items-center">
          <div className="location text-gray-600 flex gap-2 items-center">
            {/* <div className="skeleton-line" /> */}
            {/* <div className="skeleton-line" /> */}
          </div>
          <div className="platform flex gap-3">
            <div className="skeleton-circle" />
            <div className="skeleton-circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
