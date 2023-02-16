import React from "react";

const Loader = () => {
  return (
    <div
      className="radial-progress animate-spin"
      style={{
        "--value": 50,
        "--size": "3rem",
        "--thickness": "8px",
      }}
    ></div>
  );
};

export default Loader;
