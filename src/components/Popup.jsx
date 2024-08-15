import React from "react";

const Popup = ({ card, closePopup }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded p-4 w-1/2 relative">
        <h2 id="popup-title" className="text-lg">
          {card.text}
        </h2>
        <p id="popup-description">This is a popup for card {card.id}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
