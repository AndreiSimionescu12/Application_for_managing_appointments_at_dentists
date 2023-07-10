import React,{useState} from "react";
import {Card} from "../card/Card";
import cardData from "../cardData/cardData";
import "./Cards.css";

export const Cards = () => {
  const [expandedCards, setExpandedCards] = useState(
    cardData.map((card) => false)
  );

  const handleExpandClick = (index) => {
    const updatedExpandedCards = [...expandedCards];
    updatedExpandedCards[index] = true;
    setExpandedCards(updatedExpandedCards);
  };

  return (
    <div className="card-list-container">
      {cardData.map((card, index) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          expanded={expandedCards[index]}
          onExpandClick={() => handleExpandClick(index)}
        />
      ))}
    </div>
  );
};

export default Cards;


