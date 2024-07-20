import React from "react";
import { motion } from "framer-motion";

const SortButton = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1, color: `green` }}
    onClick={onClick}
    className="bg-green-500 text-white font-bold py-2 px-4 rounded"
  >
    Sort
  </motion.button>
);

export default SortButton;
