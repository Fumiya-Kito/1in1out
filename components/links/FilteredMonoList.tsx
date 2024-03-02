'use client'

import { useState } from "react";
import Link from "next/link";

import { Mono } from "@/app/type";
import MonoSearchForm from "../form/MonoSearchForm";

export default function FilteredMonoLinkList({ data }: { data: Mono[] }) {
  const [filteredData, setFilteredData] = useState<Mono[]>(data);

  const searchHandler: (inputValue: string) => void = (inputValue) => {
    const filterResult = data.filter(mono => mono.name.toLowerCase().includes(inputValue.toLocaleLowerCase()));
    setFilteredData(filterResult);
  }
  return (
    <>
      <MonoSearchForm onSearch={searchHandler} />
      <li className="list-none">
        {filteredData.map((mono) => (
          <ul key={mono._id}>
            <p>{mono.iconJsx}</p>
            <Link href={`/monodetail/${mono._id}`}>{mono.name}</Link>
          </ul>
        ))}
      </li>
    </>
  )
}

