import React from "react";

function Array() {
  const array = [1, 2, 5, 2, 5];
  const ArrayDisplay = ({ array }) => {
    return (
      <div>
        <h1>Array Elements</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          {array.map((item, index) => (
            <div
              key={index}
              style={{ padding: "5px", border: "1px solid #ccc" }}
            >
              {item}
            </div>
          ))}
        </div>
        {/* <ul>
          {array.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
      </div>
    );
  };
  return (
    <div>
      {/* <p className="text-cyan-600">asoberf</p> */}
      <ArrayDisplay array={array} />
    </div>
  );
}

export default Array;
