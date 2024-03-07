"use client";

import { Category, Mono } from "@/app/type";
import { Dispatch, SetStateAction, useState } from "react";

export default function ExchangeBord({
  allMonoList,
  allCategoryList,
}: {
  allMonoList: Mono[];
  allCategoryList: Category[];
}) {
  const [cards, setCards] = useState(allMonoList);

  // const wishlist = joinedDataList.find((category) => category._id === 1);
  // const monosInInventory = joinedDataList.filter(
  //   (category) => category._id !== 1
  // );

  return (
    <>
      <div className="w-full h-1/2 p-2">
        <p>wishlist</p>
      </div>
      <div className="w-full h-1/2 flex gap-3 p-4 overflow-scroll bg-stone-800">
        {allCategoryList.map((category) => (
          <>
            {category._id !== 1 && (
              <CategoryColumn
                key={category._id}
                categoryId={category._id}
                title={category.name}
                cards={cards}
                setCards={setCards}
              />
            )}
          </>
        ))}
      </div>
    </>
  );
}

function CategoryColumn({
  title = "Nameless",
  headingColor,
  categoryId,
  cards,
  setCards,
}: {
  title?: string;
  headingColor?: string;
  categoryId: number;
  cards: Mono[];
  setCards: Dispatch<SetStateAction<Mono[]>>;
}) {
  const [active, setActive] = useState(false);
  const filteredCards = cards.filter((card) => card.category_id === categoryId);
  return (
    <div className="w-56 shrink-0 bg-stone-700">
      <div className="flex items-center justify-between mb-2">
        <h2>{title}</h2>
        <span className="rounded">{filteredCards.length}</span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((card) => (
          <DragableCard key={card._id} {...card} />
        ))}
      </div>
    </div>
  );
}

function DragableCard({ _id, name, iconJsx, category_name }: Mono) {
  return (
    <>
      <div className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing">
        {iconJsx}
        <p>{name}</p>
      </div>
    </>
  );
}
