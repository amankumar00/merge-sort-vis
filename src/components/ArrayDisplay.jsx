import React from "react";

const ArrayDisplay = ({ array }) => (
  <div className="flex justify-center items-end mb-4">
    {array.map((value, index) => (
      <div
        key={index}
        className="bg-blue-500 text-white text-sm font-bold flex items-center justify-center m-1"
        style={{ height: `${value * 5}px`, width: "30px" }}
      >
        {value}
      </div>
    ))}
  </div>
);

export default ArrayDisplay;
