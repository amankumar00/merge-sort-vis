import React from "react";

const TreeNode = ({ step }) => {
  if (!step) return null;

  return (
    <div className="p-2 border rounded bg-gray-100 m-2">
      <div className="flex justify-center mb-2">
        <div className="flex">
          {step.array.map((value, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white text-sm font-bold flex items-center justify-center m-1"
              style={{ height: `${value * 5}px`, width: "30px" }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        {step.left && (
          <div className="flex-1 border-r-2 border-gray-300">
            <TreeNode step={step.left} />
          </div>
        )}
        {step.right && (
          <div className="flex-1">
            <TreeNode step={step.right} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNode;
