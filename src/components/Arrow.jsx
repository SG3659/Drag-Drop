import React from "react";

const Arrow = ({ from, to }) => {
  const x1 = from.x + from.width / 2;
  const y1 = from.y + from.height / 2;
  const x2 = to.x + to.width / 2;
  const y2 = to.y + to.height / 2;

  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, 
      }}
    >
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="2" />
    </svg>
  );
};

export default Arrow;
