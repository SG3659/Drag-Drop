// import { useState } from "react";
import { useState } from "react";
import Canvas from "./components/Canvas";
import Popup from "./components/Popup";
const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleShowMore = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };
  
  return (
    <div>
      <Canvas onShowMore={handleShowMore} />
      {showPopup && <Popup card={selectedCard} closePopup={closePopup} />}
    </div>
  );
};

export default App;
