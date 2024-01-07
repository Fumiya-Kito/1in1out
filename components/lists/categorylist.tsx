'use client';

import { useParams } from "next/navigation";
import Link from "next/link";

type CategoryListProps = {
  data: {
    id: number, 
    icon: JSX.Element, 
    name: string, 
    upper_limit: number
  }[];
}

export default function CategoryList({ data }: CategoryListProps) {
  return (
    <li className="list-none">
      {data.map((category) => (
        <ul key={category.id}>
          {category.icon}
          <Link href={`/monolist/${category.id}`}>{category.name}</Link>
        </ul>
      ))}
    </li>
  )
}

