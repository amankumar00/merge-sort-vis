import React from "react";

const SortButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-green-500 text-white font-bold py-2 px-4 rounded"
  >
    Sort
  </button>
);

export default SortButton;
