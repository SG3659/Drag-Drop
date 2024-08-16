import { useState } from "react";
import Card from "./Card";
import Arrow from "./Arrow";
import data from "../data";
const Canvas = ({ onShowMore }) => {
  const [cards, setCards] = useState(data);

  const [connections, setConnections] = useState([{ from: 1, to: 2 }]);

  const handleAddCard = () => {
    const lastCard = cards[cards.length - 1];
    const newCard = {
      id: cards.length + 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      x: lastCard.x + 50,
      y: lastCard.y + 50,
    };
    setCards([...cards, newCard]);
    setConnections([...connections, { from: lastCard.id, to: newCard.id }]);
  };

  const paticularCard = (cardId, newProperties) => {
    setCards(
      cards.map((card) =>
        card.id === cardId ? { ...card, ...newProperties } : card
      )
    );
  };
  const dragHandler = (cardID, x, y) => {
    paticularCard(cardID, { x, y });
  };
  const resizeHandler = (cardID, width, height) => {
    paticularCard(cardID, { width, height });
  };

  return (
    <div className="h-screen w-screen overflow-auto p-4 relative">
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4"
        onClick={handleAddCard}
      >
        Add Card
      </button>
      <div className="canvas relative">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            x={card.x}
            y={card.y}
            width={card.width}
            height={card.height}
            onDrag={(x, y) => dragHandler(card.id, x, y)}
            onResize={(width, height) => resizeHandler(card.id, width, height)}
            onShowMore={() => onShowMore(card)}
          />
        ))}
        {connections.map((connection) => (
          <Arrow
            key={`${connection.from}-${connection.to}`}
            from={cards.find((card) => card.id === connection.from)}
            to={cards.find((card) => card.id === connection.to)}
          />
        ))}
      </div>
    </div>
  );
};

export default Canvas;
