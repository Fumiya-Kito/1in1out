"use client";

import { useEffect, useState } from "react";

import { Category, Mono } from "@/app/type";
import MonoCard from "@/components/cards/MonoCard";


export default function FilteredMonoLinkList({
  data,
  categoryList,
}: {
  data: Mono[];
  categoryList: Category[];
}) {
  const [filteredData, setFilteredData] = useState<Mono[]>(data);
  const [enteredName, setEnteredName] = useState('');

  const handleSearch: (inputValue: string) => void = (inputValue) => {
    const filterResult = data.filter((mono) =>
      mono.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
    );
    setFilteredData(filterResult);
  };

  useEffect(() => {
    setFilteredData(data);
    handleSearch(enteredName);
  }, [data]);
  
  useEffect(() => {
    handleSearch(enteredName);
  }, [enteredName])

  return (
    <div className="max-w-4xl m-auto">
      <div>
        <input
          type="text"
          placeholder="Search by Mono Name..."
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
          className="w-full max-w-sm p-2 my-2 text-white bg-neutral-700 rounded-lg border border-neutral-400 focus:bg-neutral-900 outline-transparent outline-0"
        />
      </div>
      <li className="list-none">
        {filteredData.map((mono) => (
          <ul key={mono._id}>
            <MonoCard
              model={mono}
              formProps={{
                categoryList: categoryList,
                categoryId: mono.category_id.toString(),
              }}
            />
          </ul>
        ))}
      </li>
    </div>
  );
}
