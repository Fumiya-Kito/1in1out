"use client";

import { Mono } from "@/app/type";
import { useState } from "react";

type MonoProps = {
  item: Mono;
  categories: number[];
};

export default function MonoItem({ item, categories }: MonoProps) {
  const [categoryId, setCategoryId] = useState<number | undefined>(item.category_id);
  const clickHandler = (id: number) => {
    setCategoryId((prevId) => id);
  };

  return (
    <ul key={item._id} className="p-1 m-2 bg-blue-950">
      {item.iconJsx}
      <p>{item.name}</p>
      <p>{item.reason}</p>
      <p>categoryID(state): {categoryId}</p>
      {categories.map(id => (
        <button
          key={id}
          onClick={clickHandler.bind(undefined, id)}
          className="p-2 m-2 bg-cyan-500 text-black rounded-lg"
        >
          Change to {id}
        </button>
      ))}
    </ul>
  );
}
