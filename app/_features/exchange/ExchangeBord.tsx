"use client";

import { Category, Mono } from "@/app/type";
import React, { Dispatch, SetStateAction, useState } from "react";
import { LuRefreshCw, LuRefreshCwOff } from "react-icons/lu";
import { motion } from 'framer-motion'

export default function ExchangeBord({
  allMonoList,
  allCategoryList,
}: {
  allMonoList: Mono[];
  allCategoryList: Category[];
}) {
  const [cards, setCards] = useState(allMonoList);

  return (
    <>
      <p>wishlist</p>
      <div className="w-full h-1/2 p-2 bg-cyan-950">
        <p>wishlist Componentの予定</p>
      </div>
      <p>Your Inventory</p>
      <div className="w-full h-1/2 flex gap-3 p-4 overflow-scroll bg-stone-800">
        {allCategoryList.map((category) => (
          <div key={category._id}>
            {category._id !== 1 && (
              <CategoryColumn
                categoryId={category._id}
                title={category.name}
                upperLimit={category.upper_limit}
                cards={cards}
                setCards={setCards}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function CategoryColumn({
  title = "Nameless",
  headingColor,
  categoryId,
  upperLimit,
  cards,
  setCards,
}: {
  title?: string;
  headingColor?: string;
  categoryId: number;
  upperLimit: number;
  cards: Mono[];
  setCards: Dispatch<SetStateAction<Mono[]>>;
}) {
  const [active, setActive] = useState(false);
  const handleDragStart = (e: React.DragEvent, card: Mono) => {
    e.dataTransfer.setData("monoId", card._id);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    // highlightIndicator(e);
    setActive(true);
  }
  const handleDragLeave = () => {
    setActive(false);
  }
  const handleDrop = (e: React.DragEvent) => {
    setActive(prev => false);
  }

  const filteredCards = cards.filter((card) => card.category_id === categoryId);

  return (
    <div className="w-56 shrink-0 bg-stone-700 overflow-scroll flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <h2 className="truncate">{title}</h2>
        </div>
        <span className="rounded">{`${filteredCards.length}/${upperLimit}`}</span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`m-0 flex-1 w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        <AddCard
          category={categoryId}
          setCards={setCards}
          isFull={filteredCards.length / upperLimit >= 1}
        />
        {filteredCards.map((card) => (
          <DragableCard
            key={card._id}
            {...card}
            handleDragStart={handleDragStart}
          />
        ))}
        <DropIndicator beforeId={"-1"} category={categoryId} />
      </div>
    </div>
  );
}

function DragableCard({
  _id,
  name,
  iconJsx,
  category_id,
  category_name,
  handleDragStart,
}: Mono & { handleDragStart: Function }) {
  return (
    <>
      <DropIndicator beforeId={_id} category={category_id} />
      <motion.div
        layout
        layoutId={_id}
        draggable
        onDragStart={(e) => handleDragStart(e, { _id, name, category_id })}
        className="flex cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <div className="flex-none w-10">{iconJsx}</div>
        <div className="flex-auto min-w-0">
          <p className="truncate">{name}</p>
        </div>
      </motion.div>
    </>
  );
}

function DropIndicator({
  beforeId,
  category,
}: {
  beforeId?: string;
  category: number;
}) {
  return (
    <div
      data-before={beforeId || "-1"}
      data-category={category}
      className="h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
}

function AddCard({
  category,
  setCards,
  isFull,
}: {
  category: number;
  setCards: Dispatch<SetStateAction<Mono[]>>;
  isFull: boolean;
}) {
  const [available, setAvailable] = useState(isFull);

  return (
    <>
      {available ? (
        <motion.div className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50">
          <span>Not Available</span>
          <LuRefreshCwOff />
        </motion.div>
      ) : (
        <motion.div className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50">
          <span>Available</span>
          <LuRefreshCw />
        </motion.div>
      )}
    </>
  );
}
