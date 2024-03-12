import React, { SetStateAction } from "react";
import { CardType } from "./Board";
import { ReactSortable } from "react-sortablejs";

type ColumProps = {
  id: string | number;
  name: string;
  cards: CardType[];
  setCards: SetStateAction<any>;
};

export default function Column({ id, name, cards, setCards }: ColumProps) {
  function setCardsForColumn(
    sortedCards: CardType[],
    newColumnId: string | number
  ) {
    setCards((prevCards: CardType[]) => {
      const newCards = [...prevCards];
      sortedCards.forEach((card: CardType, newIndex: number) => {
        const foundCard = newCards.find((newCards) => newCards.id === card.id);

        if (foundCard) {
          foundCard.index = newIndex;

          foundCard.columnId = newColumnId;
        }
      });
      return newCards;
    });
  }

  return (
    <div className="w-56 bg-white shadow-md rounded-md p-2">
      <h3>{name}</h3>
      <ReactSortable
        list={cards}
        setList={(items) => setCardsForColumn(items, id)}
        group="cards"
        className="min-h-12"
        ghostClass="opacity-40"
      >
        {cards.map((card) => (
          <div key={card.id} className="boarder bg-white my-2 p-4 rounded-md">
            <span>{card.name}</span>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
}
