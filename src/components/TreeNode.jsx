import React from "react";
import { motion } from "framer-motion";
const TreeNode = ({ step }) => {
  if (!step) return null;

  return (
    <div className="p-2 border rounded bg-teal-50 m-2 max-h-full max-w-fit">
      <div className="  flex justify-center mb-2 ">
        <div className="flex">
          {step.array.map((value, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              key={index}
              className={`text-white text-sm font-bold flex items-center justify-center m-1 ${
                value >= 0 ? "bg-blue-500" : "bg-red-500"
              }`}
              style={{ height: `${value * 15}px`, width: "30px" }}
            >
              {value}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex">
        {step.right && (
          <div className="flex-1">
            <TreeNode step={step.right} />
          </div>
        )}
        {step.left && (
          <div className="flex-1 border-r-2 border-gray-300">
            <TreeNode step={step.left} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNode;
