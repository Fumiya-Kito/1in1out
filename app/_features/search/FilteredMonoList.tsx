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
    <>
      <div>
        <input
          type="text"
          placeholder="Search by Mono Name..."
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
          className="text-black"
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
    </>
  );
}
