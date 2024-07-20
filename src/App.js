import React, { useState } from "react";
import "./App.css";
import TreeNode from "./components/TreeNode";
import InputField from "./components/InputField";
import ArrayDisplay from "./components/ArrayDisplay";
import SortButton from "./components/SortButton";
import { motion } from "framer-motion";
function App() {
  const [array, setArray] = useState([]);
  const [rootStep, setRootStep] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const mergeSort = (array) => {
    if (array.length <= 1) return { array };

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    const left = mergeSort(leftArray);
    const right = mergeSort(rightArray);

    const merged = merge(left, right);
    return { array: merged, left, right };
  };

  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.array.length && rightIndex < right.array.length) {
      if (left.array[leftIndex] < right.array[rightIndex]) {
        result.push(left.array[leftIndex]);
        leftIndex++;
      } else {
        result.push(right.array[rightIndex]);
        rightIndex++;
      }
    }

    result = result
      .concat(left.array.slice(leftIndex))
      .concat(right.array.slice(rightIndex));
    return result;
  };

  const handleSort = () => {
    setError("");
    try {
      const sortedTree = mergeSort(array);
      setRootStep(sortedTree);
    } catch (e) {
      setError("Error during sorting");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSetArray = () => {
    const newArray = input.split(",").map((str) => {
      const num = Number(str.trim());
      return isNaN(num) ? null : num;
    });

    if (newArray.includes(null)) {
      setError(
        "Invalid input. Please enter a comma-separated list of numbers."
      );
    } else {
      setArray(newArray);
      setError("");
    }
  };

  return (
    <motion.div
      className="bg-teal-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col items-center min-h-screen ">
        <header className="text-center py-5">
          <h1 className="text-3xl font-bold mb-4">Merge Sort Visualizer</h1>
          <InputField
            input={input}
            onChange={handleInputChange}
            onSetArray={handleSetArray}
            error={error}
          />
          <ArrayDisplay array={array} />
          <SortButton onClick={handleSort} />
          <div className="mt-4 max-h-fit overflow-y-auto w-full">
            {rootStep && <TreeNode step={rootStep} />}
          </div>
        </header>
      </div>
    </motion.div>
  );
}

export default App;
