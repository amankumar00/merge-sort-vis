import React from "react";

const InputField = ({ input, onChange, onSetArray, error }) => (
  <div className="flex mb-4">
    <input
      type="text"
      value={input}
      onChange={onChange}
      placeholder="Enter numbers separated by commas"
      className="border rounded px-2 py-1 mr-2"
    />
    <button
      onClick={onSetArray}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      Set Array
    </button>
    {error && <div className="text-red-500 ml-4">{error}</div>}
  </div>
);

export default InputField;
