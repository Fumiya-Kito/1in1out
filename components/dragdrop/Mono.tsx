"use client";

import { useState } from "react";

type MonoProps = {
  item: {
    id: number;
    category_id: number;
    icon: JSX.Element;
    name: string;
    reason: string;
  };

};

export default function ({ item }: MonoProps) {
  const [categoryId, setCategoryId] = useState<number>(item.category_id);
  const clickHandler = () => {
    setCategoryId((prevId) => {
      if (prevId === 0) {
        return item.category_id;
      }
      return 0;
    });
  };

  return (
    <ul key={item.id} className="p-1 m-2 bg-blue-950">
      {item.icon}
      <p>{item.name}</p>
      <p>{item.reason}</p>
      <p>categoryID(state): {categoryId}</p>
      <button onClick={clickHandler}className="p-2 m-2 bg-cyan-500 text-black rounded-lg">
        Change Category
      </button>
    </ul>
  );
}
