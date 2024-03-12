"use client";
import NewColumnForm from "@/components/forms/NewColumnForm";
import Column from "@/components/Column";
import { useState } from "react";

export type CardType = {
  name: string;
  id: string | number;
  index: number;
  columnId: string | number;
};

const defalutColoums = [
  {
    id: "col1",
    name: "Todo",
    index: 0,
  },
  { id: "col2", name: "In progress", index: 1 },
  { id: "col3", name: "Done", index: 2 },
];

const defaultCards = [
  {
    id: "abcd",
    name: "task 1",
    index: 0,
    columnId: "col1",
  },
  {
    id: "efgh",
    name: "task 5",
    index: 5,
    columnId: "col1",
  },
  {
    id: "ijkl",
    name: "task 2",
    index: 1,
    columnId: "col2",
  },
  {
    id: "mnop ",
    name: "task 3",
    index: 2,
    columnId: "col3",
  },
];
export default function Board() {
  const [cards, setCards] = useState(defaultCards);
  const [coloums, setColoums] = useState(defalutColoums);
  return (
    <div className="flex gap-4">
      {coloums.map((column) => (
        <Column
          key={column.id}
          {...column}
          setCards={setCards}
          cards={cards
            .sort((a, b) => a.index - b.index)
            .filter((card) => card.columnId === column.id)}
        />
      ))}
      <NewColumnForm />
    </div>
  );
}
