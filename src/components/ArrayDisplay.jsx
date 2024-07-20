import React from "react";
import { motion } from "framer-motion";

const ArrayDisplay = ({ array }) => (
  <div className="flex justify-center items-end mb-4">
    {array.map((value, index) => (
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        // transition={{ type: "tween", duration: 3 }}
        key={index}
        className="bg-blue-500 text-white text-sm font-bold flex items-center justify-center m-1"
        style={{ height: `${value * 15}px`, width: "30px" }}
      >
        {value}
      </motion.div>
    ))}
  </div>
);

export default ArrayDisplay;
