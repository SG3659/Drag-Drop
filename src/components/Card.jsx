import React, { useState } from "react";

const Card = ({ text, x, y, width, height, onDrag, onResize, onShowMore }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialMouseY, setInitialMouseY] = useState(0);

  const title = readMore ? text : `text${text.substring(0, 200)}....`;
  const mousedownHandler = (e) => {
    setIsDragging(true);
    setInitialMouseX(e.clientX - x);
    setInitialMouseY(e.clientY - y);
  };

  const mousemoveHandler = (e) => {
    if (isDragging) {
      onDrag(e.clientX - initialMouseX, e.clientY - initialMouseY);
    } else if (isResizing) {
      onResize(e.clientX - x, e.clientY - y);
    }
  };

  const mouseupHandler = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const resizemousedownHandler = (e) => {
    setIsResizing(true);
    e.stopPropagation(); // Prevents triggering drag when starting to resize
  };
  const readmoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div
      className="absolute bg-white shadow-md rounded p-4 cursor-move overflow-auto"
      style={{
        top: y,
        left: x,
        width,
        height,
      }}
      onMouseDown={mousedownHandler}
      onMouseMove={mousemoveHandler}
      onMouseUp={mouseupHandler}
    >
      <p className="text-lg">
        {title}
        <span className="cursor-pointer text-red-800" onClick={readmoreHandler}>
          {readMore ? "ShowLess.." : "ReadMore..."}
        </span>
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={(e) => {
          e.stopPropagation();
          onShowMore();
        }}
      >
        Show More
      </button>
      <div
        className="absolute bottom-0 right-0 w-4 h-4 bg-gray-500 cursor-se-resize"
        onMouseDown={resizemousedownHandler}
      />
    </div>
  );
};

export default Card;
